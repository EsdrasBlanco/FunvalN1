import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output } as any);

(async () => {
  let tareas: string[] = [];
  let continuar: boolean = true;

  while (continuar) {
    console.log("\n--- GESTOR DE TAREAS ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar ultima tarea");
    console.log("3. Listar tareas");
    console.log("4. Salir");

    const opcion = await rl.question('Elige una opcion (1-4): ');

    switch (opcion.trim()) {
      case '1':
        const nuevaTarea = await rl.question('Ingresa el titulo de la tarea: ');
        if (nuevaTarea.trim() !== "") {
          tareas.push(nuevaTarea.trim());
          console.log(`Tarea agregada con exito.`);
        } else {
          console.log(`El titulo no puede estar vacio.`);
        }
        break;

      case '2':
        if (tareas.length > 0) {
          const tareaEliminada = tareas.pop();
          console.log(`Tarea eliminada: "${tareaEliminada}"`);
        } else {
          console.log(`No hay tareas registradas para eliminar.`);
        }
        break;

      case '3':
        console.log("\n LISTA DE TAREAS:");
        if (tareas.length === 0) {
          console.log("(El arreglo esta vacio)");
        } else {
          for (let i = 0; i < tareas.length; i++) {
            console.log(`${i + 1}. ${tareas[i]}`);
          }
        }
        break;

      case '4':
        console.log("Saliendo del programa. ¡Hasta luego!");
        continuar = false;
        break;

      default:
        console.log("Opcion no valida. Ingresa un numero del 1 al 4.");
        break;
    }
  }
  rl.close();
})();