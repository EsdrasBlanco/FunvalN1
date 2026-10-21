/* 
    los estudiantes de funval estan trayendote sus listas de notas
    algunos dieron 2 examenes algunos 4 algunos 6 etc
    deberas devolver el promedio de notas del estudiante
*/


let notas: number[] = [90, 98];

/* ---------------------OBJETOS------------------------ */
interface estudiante {
  nombre: string;
  apPaterno: string;
  edad: number;
  pais: string;
  celular: number;
  notas: number[];
}

let estudianteFunvalero: estudiante = {
  nombre: "Roberto",
  apPaterno: "Trinidad",
  edad: 20,
  pais: "Paraguay",
  celular: 987123213,
  notas: [95, 35, 55, 75, 0],
};

let notaFinal: number = 0;
for (let i = 0; i < estudianteFunvalero.notas.length; i++) {
  notaFinal += estudianteFunvalero.notas[i];
}
notaFinal /= estudianteFunvalero.notas.length;

console.log(
  "el promedio del estudiante " +
    estudianteFunvalero.nombre +
    " es: " +
    notaFinal,
);
/* -----------------ejercicio---------------------- */
const estudiantes: estudiante[] = [
  {
    nombre: "Mateo",
    apPaterno: "González",
    edad: 19,
    pais: "Bolivia",
    celular: 71234567,
    notas: [85, 90, 78],
  },
  {
    nombre: "Valentina",
    apPaterno: "Rodríguez",
    edad: 21,
    pais: "Argentina",
    celular: 1123456789,
    notas: [92, 88],
  },
  {
    nombre: "Santiago",
    apPaterno: "Martínez",
    edad: 18,
    pais: "Colombia",
    celular: 3101234567,
    notas: [75, 80, 95, 89, 91],
  },
  {
    nombre: "Camila",
    apPaterno: "Fernández",
    edad: 22,
    pais: "Perú",
    celular: 987654321,
    notas: [100],
  },
  {
    nombre: "Diego",
    apPaterno: "Silva",
    edad: 20,
    pais: "Chile",
    celular: 912345678,
    notas: [65, 72, 80, 85],
  },
  {
    nombre: "Isabella",
    apPaterno: "Santos",
    edad: 19,
    pais: "Brasil",
    celular: 11987654321,
    notas: [95, 93, 87],
  },
  {
    nombre: "Sebastián",
    apPaterno: "Hernández",
    edad: 23,
    pais: "México",
    celular: 5512345678,
    notas: [70, 68],
  },
  {
    nombre: "Luciana",
    apPaterno: "Pérez",
    edad: 18,
    pais: "Uruguay",
    celular: 99123456,
    notas: [88, 91, 84, 96, 79, 90],
  },
  {
    nombre: "Gabriel",
    apPaterno: "Castro",
    edad: 24,
    pais: "Ecuador",
    celular: 991234567,
    notas: [55, 70, 65],
  },
  {
    nombre: "Mariana",
    apPaterno: "López",
    edad: 20,
    pais: "Paraguay",
    celular: 981234567,
    notas: [98, 94, 89, 92],
  },
];

/* 
  quiero saber el promedio de todos los estudiantes y ver a los estudiantes q esten aprobados
  un estudiante esta aprobado cuando su promedio es mayor a 60


  mateo promedio 65  aprobado
  mariana promedio 35  reprobado
*/

const promedio = estudiantes.reduce((acc, estudiante) => {
  return acc + estudiante.notas.reduce((acc, nota) => acc + nota, 0) / estudiante.notas.length;
}, 0) / estudiantes.length;

console.log(promedio);

if (promedio > 60) {
  console.log("aprobado");
} else {
  console.log("reprobado");
}