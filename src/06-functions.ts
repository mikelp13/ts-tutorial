/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип;
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе
 */


// можна через інтерфейс, але не рекомендовано 
interface IAddFn {
  (a: number, b: number): number;
}

const addExpression: IAddFn = function (x, y) {
  return x + y;
};

addExpression(2, 3);

// Для функцій типи краще описувати через type
type AddFn = (a: number, b: number) => number;

const addArrow: AddFn = (x, y) => {
  return x + y;
};

addArrow(2, 3);

// ========================================================
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
  return 5;
};

fn(1, 2, 3, 5, 6, 7, 5, 9);

type LogFn = (m: string) => number | void;

const log: LogFn = (message) => {
  console.log(message);
};

log("hello");
// ========================================================
enum PizzaSize {
  Small='s',
  Medium='m',
  Large = 'l',
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  logSize?(): void; // синтаксис для не обовязкового методу
  getSize(): string;
  addTopping(topping:string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings:['sause', 'mushrooms'],
  logSize() {
    console.log(this.size)
  },
  getSize() {
    return this.size
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza)

export {}