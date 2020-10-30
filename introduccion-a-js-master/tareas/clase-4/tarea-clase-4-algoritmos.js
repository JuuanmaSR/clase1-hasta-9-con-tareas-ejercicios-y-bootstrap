//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/
function desafioProgramacion1() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  };
};
//desafioProgramacion1();

function desafioProgramacion2() {

  for (let i = 1; i <= 100; i++) {

    if (i % 2 != 0) {
      console.log(i);
    };

  };
};
//desafioProgramacion2();

function desafioProgramacion3() {
  let resultado = 0;
  for (let i = 0; i <= 10; i++) {
    resultado = 7 * i;
    console.log(resultado);
  }
};

//desafioProgramacion3();


function desafioProgramacion4() {
  let resultado = 0;
  let factor1 = 1;

  while (factor1 <= 10) {
    for (let i = 0; i <= 10; i++) {

      resultado = factor1 * i;
      console.log(`${factor1} * ${i} = ${resultado}`);


      ;
    }
    factor1++;
  };

};
//desafioProgramacion4();

function desafioProgramacion5() {
  const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let resultado = 0;

  for (let i = 0; i < miArray.length; i++) {
    resultado += miArray[i];

  }
  console.log(resultado);
};
//desafioProgramacion5();

function desafioProgramacion6() {
  let resultado = 1;

  for (let i = 10; i >= 1; i--) {
    resultado *= i;

  };
  console.log(resultado);
};
//desafioProgramacion6();

function desafioProgramacion7() {
  resultado = 0

  for (let i = 11; i <= 30; i++) {
    if (i % 2 != 0) {
      resultado += i;
    }
  }

  console.log(resultado)

};
//desafioProgramacion7();

function desafioProgramacion8() {
  let celsius = 20;
  let fahrenheit = 0;

  function CelsiusTofahrenheit(Celsius) {
    return fahrenheit = (celsius * 1.8) + 32;
  }

  console.log(CelsiusTofahrenheit(celsius));
};
//desafioProgramacion8();


function desafioProgramacion9() {

  let celsius = 0;
  let fahrenhei = 20;
  function fahrenheiToCelsius(fahrenhei) {
    return celsius = (fahrenhei - 32) / 1.8;
  };
  console.log(fahrenheiToCelsius(fahrenhei));
};
//desafioProgramacion9();


function desafioProgramacion10() {
  const miArray = [10, 10, 10, 10];
  let resultado = 0;
  for (let i = 0; i < miArray.length; i++) {
    resultado += miArray[i];
  };
  return console.log(resultado);

};
//desafioProgramacion10();

function desafioProgramacion11() {
  const myArrayPromedio = [50, 25, 64, 85, 98, 41, 75, 21];
  let sumaTotalArray = 0;
  let promedioFinal = 0;
  function calcularPromedioArray() {
    for (let i = 0; i < myArrayPromedio.length; i++) {
      sumaTotalArray += myArrayPromedio[i];

    };
    promedioFinal = sumaTotalArray / myArrayPromedio.length
    return console.log(promedioFinal);

  };
  calcularPromedioArray();

};
//desafioProgramacion11();

function desafioProgramacion12() {
  const arrayDePartida = [-2, -12, -58, 5, 45, 87, 96, 35, 47, -147];
  const arrayDeLlegada = [];

  for (let i = 0; i < arrayDePartida.length; i++) {
    if (arrayDePartida[i] > 0) {
      arrayDeLlegada.push(arrayDePartida[i]);
    };
  }
  console.log(arrayDeLlegada);

};
//desafioProgramacion12();

function desafioProgramacion13() {
  const myArray = [10, 8, 25, 24, 62, 32, 58, 59]
  let acumulador = 0;
  for (let i = 0; i < myArray.length; i++) {

    if (acumulador < myArray[i]) {
      acumulador = myArray[i]
    };

  }
  console.log(`Maximo numero del array es:${acumulador}`);
};
//desafioProgramacion13();

function desafioProgramacion14() {
  let num1 = 0;
  console.log(num1)
  let num2 = 1;
  console.log(num2)
  let numFi = 0;
  for (let i = 2; i < 10; i++) {
    numFi = num1 + num2
    console.log(numFi);
    num1 = num2;
    num2 = numFi;
  };

};
//desafioProgramacion14();

function desafioProgramacion15() {
  function encontrarFibonacci(n) {
    if (n == 0)
      return 0;

    if (n == 1)
      return 1;

    return encontrarFibonacci(n - 1) + encontrarFibonacci(n - 2);
  }

  let n = encontrarFibonacci(10);
  console.log(n);
};
//desafioProgramacion15();

function desafioProgramacion16() {

  let contador1 = 1;
  let contador2 = 0;
  let valorBoolean;

  for (let i = 1; i < 50; i++) {
    while (contador1 <= i) {

      while (contador1 <= i) {

        if (i % contador1 === 0) {
          contador2++
        };



        contador1++
      }

      if (contador2 === 2) {
        valorBoolean = true;
      } else {
        valorBoolean = false;
      }


    }

    contador1 = 1;
    contador2 = 0;
    console.log(`${i} es primo ? : ${valorBoolean} `);
  };
};

//desafioProgramacion16();

function desafioProgramacion17() {
  function sumaDeDigitos(num) {

    let number =  num;
    let auxiliar = num;
    let resultadoSuma = 0;

    while (number > 0) {
      resultadoSuma += (number % 10);
      number =Math.trunc( number / 10);
      

    };


    console.log(
      `La suma de los digitos del numero ${auxiliar} dio como resultado: ${resultadoSuma}`
    );


  };

  sumaDeDigitos(7);



};
//desafioProgramacion17();

function desafioProgramacion18(){

};
//desafioProgramacion18();

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

Desafío de programación #10: Calcula la suma de todos los números en un array de números

Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

Desafío de programación #13: Find the maximum number in an array of numbers

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

Desafío de programación #18: Imprimir los primeros 100 números primos

Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
