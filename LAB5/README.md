# Лабораторная работа №5

## ▎Цели работы

В данной лабораторной работе мы поговорим про асинхронность в JavaScript.

Перед выполнением заданий крайне рекомендуется к прочтению:
https://learn.javascript.ru/async
## ▎Задача 1
```js
//Каким будет вывод этого фрагмента кода? Почему?

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');
```
## ▎Задача 2
```js
//Каким будет вывод этого фрагмента кода? Почему?

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');
```

## ▎Задача 3
```js
//Каким будет вывод этого фрагмента кода? Почему?

console.log('start')

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

console.log('middle')

fn().then(res => {
  console.log(res)
})

console.log('end')
```

## ▎Задача 4
```js
//Каким будет вывод этого фрагмента кода? Почему?

console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')
```

## ▎Задача 5
```js
//Каким будет вывод этого фрагмента кода? Почему?

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);
```
## ▎Задача 6
```js
/** 
 Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/

function delay(ms) {
   ...
}

//delay(3000).then(() => alert('выполнилось через 3 секунды'));
```

## ▎Задача 7
```js
// Напиши функцию fetchWithRetries, которая принимает url (строка) и limit (целое число). 
// Функция с помощью fetch должна запросить данные из url. Если в результате запроса ошибка, то необходимо повторить попытку запроса. 
// Если количество повторов превысит количество limit, то необходимо кинуть ошибку (чтобы ее поймал catch)

function fetchWithRetries(url, limit) {
   ...
}

fetchWithRetries(url, 5)
 .then(res => console.log(res))
 .catch(err => console.log(err))
```
