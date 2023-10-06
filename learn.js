// // Урок 1. Переменные

// const a = 100 // - неизменная константа
// let b = 200 // переменная
// const UPPER_SNAKE = string // стиль написания глобальной константы
// const thisConst = string //локальная переменная в стиле camelCase
// //Имя переменных и констант писать понятно и кратко

// // Урок 2. Типы данных

// // Number - число
// // String - строка
// // Boolean - булево значение True/False
// // bigInit - большие математические значения
// // undefined - не найдено, для простых значение
// // null - для объектов
// // array, set, map - массивы или объекты

// // Урок 3. Функции
// const sum = (a, b) => {
//   const result = a + b
//   return result
// }

// const amount = sum(2, 3)

// // const func = (…args) ⇒{} // в параметрах функции указано значение, которое принимает все поступающие аргументы в функцию
// // const func2 = (a, …args) ⇒{} //в параметрах функции указано значение, которое принимает параметр “а”, а также все остальные поступающие аргументы в функцию

// // ## Урок 4. Ветвление, условия

// const goods = order[groupName]
// if (goods) {
//   const len = goods.lenght
//   if (len > 0) {
//     total += calculateTotal(goods)
//     cont = +len
//   }
// }

// // Урок 5. Циклы
// for (const item of items) {
//   console.log(item.price)
// }

// // Урок 6. Массивы
// const purchase = {
// 	Electronics:[
// 		{name: 'Laptop', price: 1500},
// 		{name: 'Keyboard', price: 10},
// 		{name: 'HDMI cable', price: 10}
// 	]
// }

// const len = purchase.Electronics.length // Длина массива, возвращает количество единиц в массиве
// const entries = purchase.Electronics.entries // Вывод содержимого массива с именами и значениями
// const keys = Object.keys{purchase} // Получаем имена массивов: "Electronics"
// console.log(keys)

// console.log(purchase.Electronics[0]) // первый элемент массива
// console.log(purchase.Electronics.at(-1)) // последний элемент массива, получение данных в обратном порядке
// // Key - ключи и имена массивов или объектов
// // Entries - значения, которые содержат ключи: ‘price: 1500’ (ключ : значение)

// // Урок 7. Объекты: примеси и сериализация

const basket = {
  Lapton: 1500,
  Keybord: 1000,
  HDMI: 100,
}

const order = { ...basket }
console.log(order)
