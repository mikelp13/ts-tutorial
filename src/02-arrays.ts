/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: number[] = [30, 31, 27, 28, 32];
//readonly
// const temps: readonly number[] = [30, 31, 27, 28, 32];
// few types
// const temps: (number | string)[] = [30, 31, 27, 'fgyjytkj', 'dfsjfjf'];
temps.push(5)

const coords: [number, number] = [50.4501, 30.5234];
const rgb: [number, number, number] = [255, 0, 100];

console.log(temps, coords, rgb);
export {}