import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output } as any);

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let idCounter: number = 1;

(async () => {
  let tareas: Task[] = [];
  let continuar: boolean = true;

  const saveTodb = (nuevaTarea: Task): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const conexionExitosa = true;
        if (conexionExitosa) {
          resolve();
        } else {
          reject(new Error("Error 500: falló la conexión al guardar la tarea en la base de datos"));
        }
      }, 2000);
    });
  };

  const addTask = async (title: string) => {
    try {
    if (title.trim() === "") {
      throw new Error("El título de la tarea no puede estar vacío.");
    }
    console.log("Guardando tarea en la base de datos...");
    const nuevaTarea: Task = {
      id: idCounter++,
      title: title,
      completed: false
    };
    await saveTodb(nuevaTarea);
    tareas.push(nuevaTarea);
    console.log(`¡Tarea agregada y guardada con exito en la base de datos!`);
    } catch (error) {
      console.log(`Ocurrio un error: ${(error as Error).message}`);
    }
  };

  const removeTask = () => {
    if (tareas.length > 0) {
      const tareaEliminada = tareas.pop();
      console.log(`Tarea eliminada: "${tareaEliminada?.title}"`);
    } else {
      console.log(`No hay tareas registradas para eliminar.`);
    }
  };

  const listTasks = () => {
    console.log("\n--- LISTA DE TAREAS ---");
    if (tareas.length === 0) {
      console.log("(El arreglo está vacío)");
    } else {
const formattedTasks = tareas.map(task => {
        const { id, title, completed } = task;
        const estado = completed ? "completada" : "pendiente";
        return `[${id}] ${title} - ${estado}`;
    });
    formattedTasks.forEach(formattedStr => {
        console.log(formattedStr);
    });
    }
  };

  const completeTask = (idToComplete: number) => {
    const tarea = tareas.find(t => t.id === idToComplete);
    if (tarea) {
      tarea.completed = true;
      console.log(`¡La tarea "[${tarea.id}] ${tarea.title}" ahora esta marcada como completada!`);
    } else {
      console.log(`No se encontro ninguna tarea con el ID ${idToComplete}.`);
    }
  };

  const filterPending = () => tareas.filter(t => !t.completed);
  const filterCompleted = () => tareas.filter(t => t.completed);

  while (continuar) {
    console.log("\n--- GESTOR DE TAREAS ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar ultima tarea");
    console.log("3. Listar tareas");
    console.log("4. Marcar tarea como completada");
    console.log("5. Ver solo tareas pendientes");
    console.log("6. Ver solo tareas completadas");
    console.log("7. Salir");

    const opcion = await rl.question('Elige una opcion (1-7): ');

    switch (opcion.trim()) {
      case '1':
        const tituloInput = await rl.question('Ingresa el titulo de la tarea: ');
        await addTask(tituloInput.trim());
        break;

      case '2':
        removeTask();
        break;

      case '3':
        listTasks();
        break;

      case '4':
        listTasks();
        const idInput = await rl.question('Ingresa el ID de la tarea que deseas completar: ');
        const idNumber = parseInt(idInput.trim());
        if (!isNaN(idNumber)) {
          completeTask(idNumber);
        } else {
          console.log("Por favor ingresa un numero de ID válido.");
        }
        break;

      case '5':
        console.log("\n--- TAREAS PENDIENTES ---");
        const pendientes = filterPending();
        pendientes.forEach(t => console.log(`[${t.id}] ${t.title} - pendiente`));
        break;

      case '6':
        console.log("\n--- TAREAS COMPLETADAS ---");
        const completadas = filterCompleted();
        completadas.forEach(t => console.log(`[${t.id}] ${t.title} - completada`));
        break;

      case '7':
        console.log("Saliendo del programa. ¡Hasta luego!");
        continuar = false;
        break;

      default:
        console.log("Opcion no valida. Ingresa un numero del 1 al 7.");
        break;
    }
  }
  rl.close();
})();