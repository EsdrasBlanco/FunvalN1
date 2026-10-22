import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output } as any);

(async () => {
let continuar: boolean = true;
while (continuar) {

const answer = await rl.question("¿Cuál es tu nombre? ");

const  departamento= await rl.question("¿Cual es tu departamento? ");
let mensaje1: string;
type departamento_type = "ventas" | "marketing" | "desarrollo" | "recursos humanos";

switch(departamento) {
  case "ventas":
    mensaje1 = "Bienvenido al departamento de ventas";
    break;
  case "marketing":
    mensaje1 = "Bienvenido al departamento de marketing";
    break;
  case "desarrollo":
    mensaje1 = "Bienvenido al departamento de desarrollo";
    break;
  case "recursos humanos":
    mensaje1 = "Bienvenido al departamento de recursos humanos";
    break;
  default:
    mensaje1 = "Departamento no reconocido";
    break;
}

const  puesto= await rl.question("¿Que puesto tienes? ");
let mensaje2: string;

if (puesto === "gerente") {
  mensaje2 = "gerente";
} else if (puesto === "empleado") {
  mensaje2 = "empleado";
} else if (puesto === "supervisor") {
  mensaje2 = "supervisor";
} else {
  mensaje2 = "no hemos podido reconocerlo";
}

console.log(`Hola, ${answer}!
${mensaje1}
su puesto es de ${mensaje2}`);

let continuarRespuesta = await rl.question("¿Desea continuar? (s/n) ");
continuar = continuarRespuesta.trim().toLowerCase() === "s";
}
rl.close();
})();
