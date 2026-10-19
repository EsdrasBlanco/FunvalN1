import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output } as any );
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Windows";
let version: number = 11;
let userName: string = "Juan";

const cartel: string = `Bienvenido a ${systemName} version ${version}
${userName} disfruta la experiencia`;

console.log(cartel);

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();