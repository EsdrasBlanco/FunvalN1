import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main(): Promise<void> {
  // Creamos la "interfaz de conversación" entre el programa y el usuario
  const rl = readline.createInterface({ input, output } as any);

  // await pausa el programa hasta que el usuario escribe y presiona Enter
  const nombre: string = await rl.question('¿Cuál es tu nombre? ');
  const edadTexto: string = await rl.question('¿Cuántos años tienes? ');

  // Convertimos el texto a número para poder operar con él
  const edad: number = parseInt(edadTexto, 10);

  console.log(`\nHola, ${nombre}! Tienes ${edad} años.`);

  if (edad >= 18) {
    console.log('Eres mayor de edad. ¡Bienvenido al programa!');
  } else {
    console.log('Eres menor de edad. Sigue aprendiendo, ¡vas muy bien!');
  }

  // Siempre hay que cerrar la interfaz al terminar
  rl.close();
}

main();