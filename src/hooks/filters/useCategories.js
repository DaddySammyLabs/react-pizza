import { useState } from "react";

export const useCategories = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState("Все");

  // let categorizedItems;

  // if (activeCategory === "Все") {
  //   categorizedItems = items;
  // } else {
  //   categorizedItems = items.filter((item) => item.category === activeCategory);
  // }

  const categorizedItems =
    activeCategory === "Все"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return {
    activeCategory,
    setActiveCategory,
    categorizedItems,
    // loading,
    // error,
    // refetch,
  };
};

// Самые популярные методы массивов JavaScript
// 1. filter() — фильтрация
// Возвращает новый массив только с теми элементами, которые подходят под условие.
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter((num) => num > 3);
// console.log(result); // [4, 5]

// 2. map() — преобразование
// Создаёт новый массив, преобразуя каждый элемент.
// const numbers = [1, 2, 3];
// const result = numbers.map((num) => num * 2);
// console.log(result); // [2, 4, 6]

// 3. forEach() — перебор
// Выполняет действие для каждого элемента массива.
// const fruits = ["Яблоко", "Банан", "Груша"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// 4. find() — поиск
// Возвращает первый элемент, который соответствует условию.
// const numbers = [10, 20, 30, 40];
// const result = numbers.find((num) => num > 20);
// console.log(result); // 30

// 5. findIndex() — поиск индекса
// 6. some() — проверка хотя бы одного элемента
// 7. every() — проверка всех элементов

// 8. reduce() — сведение массива к одному значению
// Например, сложение всех чисел:
// const numbers = [1, 2, 3, 4];
// const result = numbers.reduce((sum, num) => sum + num, 0);
// console.log(result); // 10

// 9. sort() — сортировка
// const numbers = [5, 2, 8, 1];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 5, 8]

// Краткая шпаргалка
// Метод         Что делает
// filter()      Фильтрует элементы

// .map()        Преобразует элементы

// .forEach()    Перебирает элементы

// .find()       Находит элемент

// .findIndex()  Находит индекс

// .some()       Проверяет хотя бы один

// .every()      Проверяет все

// .reduce()     Собирает одно значение

// .sort()       Сортирует

// .includes()   Проверяет наличие значения
