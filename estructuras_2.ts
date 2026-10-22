/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output } as any);

(async () => {
let continuar: boolean = true;
while (continuar) {

const answer = await rl.question("¿Que numero quieres sacar el factorial? ");

let resultado = 1;
for (let i = 1; i <= parseInt(answer); i++) {
    resultado *= i;
}

console.log("El resultado es: " + resultado);

let continuarRespuesta = await rl.question("¿Desea continuar? (s/n) ");
continuar = continuarRespuesta.trim().toLowerCase() === "s";
}
rl.close();
})();
