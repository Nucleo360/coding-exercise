const { isPalindrome, countVowels, flattenDeep } = require("./index");

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

  test("ignora acentos/diacríticos (normaliza)", () => {
    expect(isPalindrome("Ánita lava la tina")).toBe(true);
    expect(isPalindrome("¿Acásó hubó búhós acá?")).toBe(true);
  });

  test("devuelve false cuando no es palíndromo", () => {
    expect(isPalindrome("hola")).toBe(false);
    expect(isPalindrome("esto no lo es")).toBe(false);
  });

  test("casos borde: string vacío y solo símbolos", () => {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("   ")).toBe(true);
    expect(isPalindrome("!!!???")).toBe(true);
  });

  test("lanza TypeError si la entrada no es string", () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
    expect(() => isPalindrome(123)).toThrow(TypeError);
    expect(() => isPalindrome({})).toThrow(TypeError);
  });
});

describe("EJERCICIO 2 - countVowels", () => {
  test("cuenta vocales en minúsculas", () => {
    expect(countVowels("hola")).toBe(2); // o,a
    expect(countVowels("murciélago")).toBe(5); // u,i,e,a,o (con acento)
  });

  test("cuenta vocales ignorando mayúsculas y acentos", () => {
    expect(countVowels("ÁÉÍÓÚ")).toBe(5);
    expect(countVowels("Pingüino")).toBe(4); // i, ü(u), i, o
  });

  test("no cuenta consonantes ni números", () => {
    expect(countVowels("rhythms")).toBe(0);
    expect(countVowels("bcd 123")).toBe(0);
  });

  test("maneja string vacío", () => {
    expect(countVowels("")).toBe(0);
  });

  test("lanza TypeError si la entrada no es string", () => {
    expect(() => countVowels(null)).toThrow(TypeError);
    expect(() => countVowels(42)).toThrow(TypeError);
  });
});

describe("EJERCICIO 3 - flattenDeep", () => {
  test("aplana un array ya plano", () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("aplana arrays anidados de varias profundidades", () => {
    expect(flattenDeep([1, [2, 3], [4, [5, [6]]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("mantiene tipos no-array tal cual", () => {
    expect(flattenDeep([1, ["a", ["b"]], [{ x: 1 }]])).toEqual([1, "a", "b", { x: 1 }]);
  });

  test("maneja arrays vacíos y anidados vacíos", () => {
    expect(flattenDeep([])).toEqual([]);
    expect(flattenDeep([[], [[], [[]]], 1])).toEqual([1]);
  });

  test("lanza TypeError si la entrada no es un array", () => {
    expect(() => flattenDeep("no")).toThrow(TypeError);
    expect(() => flattenDeep(null)).toThrow(TypeError);
    expect(() => flattenDeep({})).toThrow(TypeError);
  });
});
