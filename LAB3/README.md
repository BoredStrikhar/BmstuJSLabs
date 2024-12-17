# Лабораторная работа №3

## ▎Цели работы

В данной лабораторной работе мы продолжаем изучать язык JavaScript. Задачи становятся сложнее. Необходимо решить 4 задачи. 

Перед выполнением заданий крайне рекомендуется к прочтению:

https://learn.javascript.ru/currying-partials

https://learn.javascript.ru/call-apply-decorators

https://learn.javascript.ru/bind

## ▎Задача 1
```js
/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */
Array.prototype.myMap = function(callback) {
   ...
}
```
## ▎Задача 2
```js
/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
   ...
}
```

## ▎Задача 3
```js
/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

function customBind(f, context) {
   ...
}
```

## ▎Задача 4
```js
/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add) 
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
   ...
}
```

## ▎Задача 5
```js
/**
 * Доп задание, делать не обязательно, но лучше сделать)
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
   ...
}

```

При сдаче лабораторной работе нужно уметь пояснять то, что написано в коде. При сдаче каждый студент получит похожие задачи, которые нужно будет решить самостоятельно. Задачи идентичны по сложности.
