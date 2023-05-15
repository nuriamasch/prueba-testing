import test from 'node:test';

// ITERACIÓN 1: Función que realiza la suma de dos números
function sum(a, b) {
    return a + b;
  }
  
  // Test para la función de suma
  function testSum() {
    // Caso de prueba 1: Suma de números positivos
    const result1 = sum(2, 3);
    console.log(result1 === 5 ? 'Caso de prueba 1: PASSED' : 'Caso de prueba 1: FAILED');
  
    // Caso de prueba 2: Suma de un número positivo y cero
    const result2 = sum(5, 0);
    console.log(result2 === 5 ? 'Caso de prueba 2: PASSED' : 'Caso de prueba 2: FAILED');
  
    // Caso de prueba 3: Suma de un número negativo y cero
    const result3 = sum(0, -3);
    console.log(result3 === -3 ? 'Caso de prueba 3: PASSED' : 'Caso de prueba 3: FAILED');
  }
  
  // Ejecutar los tests
  testSum();
  