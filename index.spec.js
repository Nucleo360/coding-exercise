const {
  isPalindrome,
  countVowels,
  flattenDeep,
  twoSum,
} = require("./index");

describe("EJERCICIO 1 - isPalindrome", () => {
  test("devuelve true para palíndromos simples", () => {
    expect(isPalindrome("ana")).toBe(true);
    expect(isPalindrome("reconocer")).toBe(true);
  });

  test("ignora mayúsculas, espacios y puntuación", () => {
    expect(isPalindrome("Anita lava la tina")).toBe(true);
    expect(isPalindrome("¿Acaso hubo búhos acá?")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama!")).toBe(true);
  });

  test("ignora acentos/diacríticos", () => {
    expect(isPalindrome("Ánita lava la tina")).toBe(true);
  });

  test("devuelve false cuando no es palíndromo", () => {
    expect(isPalindrome("hola")).toBe(false);
  });

  test("casos borde", () => {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("!!!")).toBe(true);
  });

  test("lanza TypeError si no es string", () => {
    expect(() => isPalindrome(123)).toThrow(TypeError);
  });
});

describe("EJERCICIO 2 - countVowels", () => {
  test("cuenta vocales correctamente", () => {
    expect(countVowels("hola")).toBe(2);
    expect(countVowels("murciélago")).toBe(5);
  });

  test("ignora mayúsculas y acentos", () => {
    expect(countVowels("ÁÉÍÓÚ")).toBe(5);
  });

  test("string vacío", () => {
    expect(countVowels("")).toBe(0);
  });

  test("lanza TypeError si no es string", () => {
    expect(() => countVowels(null)).toThrow(TypeError);
  });
});

describe("EJERCICIO 3 - flattenDeep", () => {
  test("aplana arrays anidados", () => {
    expect(flattenDeep([1, [2, [3]]])).toEqual([1, 2, 3]);
  });

  test("mantiene otros tipos", () => {
    expect(flattenDeep([1, ["a", [{ x: 1 }]]])).toEqual([1, "a", { x: 1 }]);
  });

  test("arrays vacíos", () => {
    expect(flattenDeep([[], [[], 1]])).toEqual([1]);
  });

  test("lanza TypeError si no es array", () => {
    expect(() => flattenDeep("no")).toThrow(TypeError);
  });
});

describe("EJERCICIO 4 - twoSum", () => {
  test("encuentra los índices correctos", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("funciona con números negativos", () => {
    expect(twoSum([-1, -2, -3, -4], -6)).toEqual([1, 3]);
  });

  test("devuelve null si no hay solución", () => {
    expect(twoSum([1, 2, 3], 10)).toBeNull();
  });

  test("no reutiliza el mismo índice", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("lanza TypeError con entradas inválidas", () => {
    expect(() => twoSum("no", 5)).toThrow(TypeError);
    expect(() => twoSum([1, 2], "5")).toThrow(TypeError);
  });
});
