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

  const addTask = (title: string) => {
    const nuevaTarea: Task = {
      id: idCounter++,
      title: title,
      completed: false
    };
    tareas.push(nuevaTarea);
    console.log(`Tarea agregada con éxito.`);
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
      for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const estado = tarea.completed ? "completada" : "pendiente";
        console.log(`[${tarea.id}] ${tarea.title} - ${estado}`);
      }
    }
  };

  const completeTask = (idToComplete: number) => {
    const tarea = tareas.find(t => t.id === idToComplete);
    if (tarea) {
      tarea.completed = true;
      console.log(`¡La tarea "[${tarea.id}] ${tarea.title}" ahora está marcada como completada!`);
    } else {
      console.log(`No se encontró ninguna tarea con el ID ${idToComplete}.`);
    }
  };

  while (continuar) {
    console.log("\n--- GESTOR DE TAREAS ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar ultima tarea");
    console.log("3. Listar tareas");
    console.log("4. Marcar tarea como completada");
    console.log("5. Salir");

    const opcion = await rl.question('Elige una opcion (1-5): ');

    switch (opcion.trim()) {
      case '1':
        const tituloInput = await rl.question('Ingresa el titulo de la tarea: ');
        if (tituloInput.trim() !== "") {
          addTask(tituloInput.trim());
        } else {
          console.log(`El titulo no puede estar vacio.`);
        }
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
          console.log("Por favor ingresa un número de ID válido.");
        }
        break;

      case '5':
        console.log("Saliendo del programa. ¡Hasta luego!");
        continuar = false;
        break;

      default:
        console.log("Opcion no valida. Ingresa un numero del 1 al 5.");
        break;
    }
  }
  rl.close();
})();