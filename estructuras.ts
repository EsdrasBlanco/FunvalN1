/**
 * EJERCICIO 1: Pago de pasaje en transporte público (if - else)
 *
 * Contexto: El pasaje cuesta 2.50.
 * Variables iniciales:
 *   const saldoActual: number = 3.00;
 *   const costoPasaje: number = 2.50;
 *
 * Enunciado:
 * Si el saldo es suficiente para pagar el pasaje:
 *   - Resta el costo del pasaje al saldo y muestra:
 *     "Pasaje cobrado. Saldo restante: [nuevo saldo]"
 * De lo contrario:
 *   - Muestra: "Saldo insuficiente para viajar."
 */

// Tu código aquí:

let pasaje: number = 2.50;
const saldoActual: number = 3.00;

if (saldoActual >= pasaje) {
    console.log(`Pasaje cobrado. Saldo restante: ${saldoActual - pasaje}`);
} else {
    console.log("Saldo insuficiente para viajar.");
}

/**
 * EJERCICIO 2: Verificación para compra de entradas a una película para mayores (if - else con boolean)
 *
 * Contexto: En el cine, la película exige ser mayor de 18 años y presentar documento físico.
 * Variables iniciales:
 *   const edadCliente: number = 17;
 *   const tieneDocumento: boolean = true;
 *
 * Enunciado:
 * Evalúa si el cliente tiene 18 años o más Y además tiene su documento en mano.
 * - Si cumple ambas condiciones: imprimir "Venta de boleto autorizada."
 * - Si falla alguna: imprimir "Acceso denegado. Debe ser mayor de edad y portar documento."
 */

// Tu código aquí:

let edadCliente: number = 17;
let tieneDocumento: boolean = true;

if (edadCliente >= 18 && tieneDocumento) {
    console.log("Venta de boleto autorizada.");
} else {
    console.log("Acceso denegado. Debe ser mayor de edad y portar documento.");
}

/**
 * EJERCICIO 4: Luces del semáforo vehicular (switch - case)
 *
 * Contexto: Control del flujo vehicular mediante un semáforo.
 * Variable inicial:
 *   const luzSemaforo: string = "amarillo"; // Puede ser "verde", "amarillo", "rojo" u otro texto
 *
 * Enunciado:
 * Usando switch-case, muestra el mensaje según el color:
 * - "verde": "Avance: Vía libre."
 * - "amarillo": "Precaución: Reduzca la velocidad."
 * - "rojo": "Deténgase: Paso bloqueado."
 * - default: "Luz no reconocida o semáforo en mantenimiento."
 */

// Tu código aquí:

let luzSemaforo: string = "amarillo";

switch (luzSemaforo) {
    case "verde":
        console.log("Avance: Vía libre.");
        break;
    case "amarillo":
        console.log("Precaución: Reduzca la velocidad.");
        break;
    case "rojo":
        console.log("Deténgase: Paso bloqueado.");
        break;
    default:
        console.log("Luz no reconocida o semáforo en mantenimiento.");
        break;
}

/**
 * EJERCICIO 5: Descuento en la caja de una farmacia (if - else if - else)
 *
 * Contexto: Una farmacia premia el total gastado con descuentos:
 * - Menos de 50: 0% de descuento.
 * - De 50 a 99: 5% de descuento.
 * - De 100 a 199: 10% de descuento.
 * - 200 o más: 15% de descuento.
 *
 * Variables iniciales:
 *   const subtotalCompra: number = 120;
 *   let descuento: number = 0;
 *   let totalFinal: number = 0;
 *
 * Enunciado:
 * Determina el descuento según el monto, calcula el total final y muestra:
 * "Subtotal: [subtotal] | Descuento aplicado: [descuento]% | Total a pagar: [totalFinal]"
 */

// Tu código aquí:

let subtotalCompra: number = 120;
let descuento: number = 0;
let totalFinal: number = 0;

if (subtotalCompra < 50) {
    descuento = 0;
} else if (subtotalCompra >= 50 && subtotalCompra <= 99) {
    descuento = 5;
} else if (subtotalCompra >= 100 && subtotalCompra <= 199) {
    descuento = 10;
} else {
    descuento = 15;
}

totalFinal = subtotalCompra - (subtotalCompra * descuento / 100);

console.log(`Subtotal: ${subtotalCompra} | Descuento aplicado: ${descuento}% | Total a pagar: ${totalFinal}`);

/**
 * EJERCICIO 6: Asignación de canal de TV por categoría (switch - case)
 *
 * Contexto: En un decodificador, según el tipo de contenido se sugiere un canal de inicio:
 * Variable inicial:
 *   const categoriaElegida: string = "deportes";
 *   // Opciones: "noticias", "deportes", "infantil", "peliculas"
 *
 * Enunciado:
 * Usa switch-case para imprimir el número de canal sugerido:
 * - "noticias": "Sintonizando canal 10: Noticias 24/7"
 * - "deportes": "Sintonizando canal 25: Deportes en vivo"
 * - "infantil": "Sintonizando canal 40: Dibujos animados"
 * - "peliculas": "Sintonizando canal 55: Cine premium"
 * - default: "Categoría no encontrada en la guía."
 */

// Tu código aquí:

let categoriaElegida: string = "deportes";

switch (categoriaElegida) {
    case "noticias":
        console.log("Sintonizando canal 10: Noticias 24/7");
        break;
    case "deportes":
        console.log("Sintonizando canal 25: Deportes en vivo");
        break;
    case "infantil":
        console.log("Sintonizando canal 40: Dibujos animados");
        break;
    case "peliculas":
        console.log("Sintonizando canal 55: Cine premium");
        break;
    default:
        console.log("Categoría no encontrada en la guía.");
        break;
}

/**
 * EJERCICIO 7: Alerta de medidor de batería de celular (if - else if - else)
 *
 * Contexto: Un sistema operativo móvil monitorea el porcentaje de batería y si está conectado al cargador.
 * Variables iniciales:
 *   const porcentajeBateria: number = 15;
 *   const estaConectado: boolean = false;
 *
 * Enunciado:
 * - Si porcentajeBateria es mayor a 100 o menor a 0: mostrar "Lectura de batería errónea."
 * - Si está conectado:
 *     - Si la batería llega a 100: "Batería completa. Desconecte el cargador."
 *     - Si no: "Cargando dispositivo..."
 * - Si NO está conectado:
 *     - Menor o igual a 15: "Batería crítica: Activa el modo ahorro de energía."
 *     - Entre 16 y 50: "Nivel de batería moderado."
 *     - Más de 50: "Batería en buen nivel."
 */

// Tu código aquí:

let porcentajeBateria: number = 15;
let estaConectado: boolean = false;

if (porcentajeBateria > 100 || porcentajeBateria < 0) {
    console.log("Lectura de batería errónea.");
} else if (estaConectado) {
    if (porcentajeBateria === 100) {
        console.log("Batería completa. Desconecte el cargador.");
    } else {
        console.log("Cargando dispositivo...");
    }
} else {
    if (porcentajeBateria < 15 && porcentajeBateria >= 0) {
        console.log("Batería crítica: Activa el modo ahorro de energía.");
    } else if (porcentajeBateria > 50) {
        console.log("Nivel de batería moderado.");
    } else {
        console.log("Batería en buen nivel.");
    }
}

/**
 * EJERCICIO 8: Tarifa de estacionamiento por tipo de vehículo (switch - case + if)
 *
 * Contexto: Un garaje cobra por hora según el tipo de transporte:
 * - "moto": 5 por hora
 * - "auto": 10 por hora
 * - "camioneta": 15 por hora
 *
 * Variables iniciales:
 *   const tipoVehiculo: string = "auto";
 *   const horasEstacionado: number = 3;
 *   const esClienteFrecuente: boolean = true;
 *   let tarifaPorHora: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para asignar la tarifa por hora según el tipo de vehículo. Si el tipo no existe, tarifa = 0.
 * 2. Si la tarifa es válida (mayor a 0):
 *    - Calcula el costo total (horasEstacionado * tarifaPorHora).
 *    - Si esClienteFrecuente es true, resta un descuento fijo de 5 al costo final.
 *    - Imprime el costo final a cobrar.
 * 3. Si el tipo no es válido, imprime "Tipo de vehículo no admitido."
 */

// Tu código aquí:

const tipoVehiculo: string = "auto";
const horasEstacionado: number = 3;
const esClienteFrecuente: boolean = true;
let tarifaPorHora: number = 0;

switch (tipoVehiculo) {
    case "moto":
        tarifaPorHora = 5;
        break;
    case "auto":
        tarifaPorHora = 10;
        break;
    case "camioneta":
        tarifaPorHora = 15;
        break;
    default:
        tarifaPorHora = 0;
        break;
}

if (tarifaPorHora > 0) {
    let costoTotal: number = horasEstacionado * tarifaPorHora;
    if (esClienteFrecuente) {
        costoTotal -= 5;
    }
    console.log("Costo final a cobrar: " + costoTotal);
} else {
    console.log("Tipo de vehículo no admitido.");
}

/**
 * EJERCICIO 9: Control de equipaje de mano en mostrador de aeropuerto (if anidado / operadores lógicos)
 *
 * Contexto: La aerolínea impone dos límites estrictos:
 * - Peso máximo: 10 kg.
 * - Longitud total máxima (suma de alto + ancho + profundidad): 115 cm.
 *
 * Variables iniciales:
 *   const pesoMaletaKg: number = 11.5;
 *   const sumaDimensionesCm: number = 110;
 *
 * Enunciado:
 * Evalúa las variables y muestra exactamente una de las 4 opciones:
 * 1. Si cumple ambas reglas: "Equipaje aprobado para llevar en cabina."
 * 2. Si falla en peso pero pasa en dimensiones: "Rechazado: Excede el peso máximo permitido."
 * 3. Si pasa en peso pero falla en dimensiones: "Rechazado: Excede las dimensiones máximas permitidas."
 * 4. Si falla en ambas: "Rechazado: Excede tanto el peso como las dimensiones."
 */

// Tu código aquí:

const pesoMaletaKg: number = 11.5;
const sumaDimensionesCm: number = 110;

if (pesoMaletaKg <= 10 && sumaDimensionesCm <= 115) {
    console.log("Equipaje aprobado para llevar en cabina.");
} else if (pesoMaletaKg > 10 && sumaDimensionesCm <= 115) {
    console.log("Rechazado: Excede el peso máximo permitido.");
} else if (pesoMaletaKg <= 10 && sumaDimensionesCm > 115) {
    console.log("Rechazado: Excede las dimensiones máximas permitidas.");
} else {
    console.log("Rechazado: Excede tanto el peso como las dimensiones.");
}

/**
 * EJERCICIO 10: Facturación del menú del día con propina y delivery (switch-case + if-else)
 *
 * Contexto: Un restaurante cobra según el combo elegido:
 * - "ejecutivo": 25
 * - "vegetariano": 30
 * - "familiar": 55
 *
 * Variables iniciales:
 *   const comboElegido: string = "vegetariano";
 *   const pedirDelivery: boolean = true;
 *   const dejarPropina: boolean = true;
 *   let totalPagar: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para guardar el precio base según el combo. Si el combo no existe, totalPagar = 0.
 * 2. Si el combo es válido:
 *    - Si pedirDelivery es true, suma 5 por costo de envío.
 *    - Si dejarPropina es true, suma un 10% del precio base del combo como propina.
 *    - Imprime: "Pedido confirmado. Total final a pagar: [totalPagar]"
 * 3. Si el combo no existe:
 *    - Imprime: "El combo solicitado no está disponible en la carta."
 */

// Tu código aquí:

const comboElegido: string = "vegetariano";
const pedirDelivery: boolean = true;
const dejarPropina: boolean = true;
let totalPagar: number = 0;

switch (comboElegido) {
    case "ejecutivo":
        totalPagar = 25;
        break;
    case "vegetariano":
        totalPagar = 30;
        break;
    case "familiar":
        totalPagar = 55;
        break;
    default:
        totalPagar = 0;
        break;
}

if (totalPagar > 0) {
    if (pedirDelivery) {
        totalPagar += 5;
    }
    if (dejarPropina) {
        totalPagar += totalPagar * 0.1;
    }
    console.log("Pedido confirmado. Total final a pagar: " + totalPagar);
} else {
    console.log("El combo solicitado no está disponible en la carta.");
}

/* 
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output } as any);

(async () => {
let continuar: boolean = true;
while (continuar) {

const answer = await rl.question("¿Que numero quieres multiplicar? ");
const answer2 = await rl.question("¿Por que numero lo quieres multiplicar? ");

let resultado = 0;
for (let i = 0; i < parseInt(answer2); i++) {
    resultado += parseInt(answer);
}

console.log("El resultado es: " + resultado);

let continuarRespuesta = await rl.question("¿Desea continuar? (s/n) ");
continuar = continuarRespuesta.trim().toLowerCase() === "s";
}
rl.close();
})();

