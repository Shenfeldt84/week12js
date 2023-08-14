//Задание 1
//Найдите сумму num1 и num2. Добавьте слушатель события на кнопку "Задание 1" и выведите результат на экран.

const buttonOne = document.querySelector(".b-1");
let resultOne = document.querySelector("#resultOne");
// console.log(resultOne.textContent);

const makeOne = () => {
  let num1 = 5;
  let num2 = 10;
  //Ваш код
  // let res = num1 + num2;

  resultOne.innerHTML = `${num1 + num2}`;
};

buttonOne.addEventListener("click", makeOne()); //Слушатель уже добавлен

//Задание 2
//Найдите разность num1 и num2. Добавьте слушатель события на кнопку "Задание 2" и выведите результат на экран.

const buttonTwo = document.querySelector(".b-2");
let resultTwo = document.querySelector("#resultTwo");

const makeTwo = () => {
  const num1 = 20;
  const num2 = 7;
  //Ваш код
  resultTwo = resultTwo.innerHTML = `${num1 - num2}`;
};
// buttonTwo.addEventListener("click",makeTwo());
document.querySelector(".b-2").onclick = makeTwo;
//Добавьте слушатель события

//Задание 3
//Найдите произведение num1 и num2. Добавьте слушатель события на кнопку "Задание 3" и выведите результат на экран.

const buttonThree = document.querySelector(".b-3");
let resultThree = document.querySelector("#resultThree");

const makeThree = () => {
  const num1 = 8;
  const num2 = 4;
  resultThree = resultThree.innerHTML = `${num1 * num2}`;
};
document.querySelector(".b-3").onclick = makeThree;

//Задание 4
//Найдите результат операции деления num1 на num2. Добавьте слушатель события на кнопку "Задание 4" и выведите результат на экран.

const buttonFour = document.querySelector(".b-4");
let resultFour = document.querySelector("#resultFour");

const makeFour = () => {
  const num1 = 16;
  const num2 = 2;
  //Ваш код
  resultFour = resultFour.innerHTML = `${num1 / num2}`;
};

document.querySelector(".b-4").onclick = makeFour;

//Добавьте слушатель события

//Задание 5
//Возведите число num в степень power. Добавьте слушатель события на кнопку "Задание 5" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonFive = document.querySelector(".b-5");
let resultFive = document.querySelector("#resultFive");

const makeFive = () => {
  const num = 3;
  const power = 4;
  //Ваш код
  resultFive = resultFive.innerHTML = `${Math.pow(num, power)}`;
};

document.querySelector(".b-5").onclick = makeFive;
//Добавьте слушатель события

//Задание 6
//Найдите результат от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 6" и выведите результат на экран.

const buttonSix = document.querySelector(".b-6");
let resultSix = document.querySelector("#resultSix");

const makeSix = () => {
  const num1 = 20;
  const num2 = 5;
  //Ваш код
  resultSix = resultSix.innerHTML = `${num1 % num2}`;
};

document.querySelector(".b-6").onclick = makeSix;

//Добавьте слушатель события

//Задание 7
//Найдите остаток от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 7" и выведите результат на экран.

const buttonSeven = document.querySelector(".b-7");
let resultSeven = document.querySelector("#resultSeven");

const makeSeven = () => {
  const num1 = 25;
  const num2 = 7;
  //Ваш код
  resultSeven = resultSeven.innerHTML = `${num1 % num2}`;
};

document.querySelector(".b-7").onclick = makeSeven;

//Добавьте слушатель события

//Задание 8
//Найдите остаток от деления num1 на 10. Добавьте слушатель события на кнопку "Задание 8" и выведите результат на экран.

const buttonEight = document.querySelector(".b-8");
let resultEight = document.querySelector("#resultEight");

const makeEight = () => {
  const num1 = 123;
  //Ваш код
  resultEight = resultEight.innerHTML = `${num1 % 10}`;
};

document.querySelector(".b-8").onclick = makeEight;

//Добавьте слушатель события

//Задание 9
//Найдите остаток от деления num1 на 100. Добавьте слушатель события на кнопку "Задание 9" и выведите результат на экран.

const buttonNine = document.querySelector(".b-9");
let resultNine = document.querySelector("#resultNine");

const makeNine = () => {
  const num1 = 4567;
  //Ваш код
  resultNine = resultNine.innerHTML = `${num1 % 100}`;
};

document.querySelector(".b-9").onclick = makeNine;

//Добавьте слушатель события

//Задание 10
//Найдите символ по индексу 2 в строке "Hello". Добавьте слушатель события на кнопку "Задание 10" и выведите результат на экран.

const buttonTen = document.querySelector(".b-10");
let resultTen = document.querySelector("#resultTen");

const makeTen = () => {
  const str = "Hello";
  //Ваш код
  resultTen = resultTen.innerHTML = `${str.charAt(2)}`;
};

document.querySelector(".b-10").onclick = makeTen;

//Добавьте слушатель события

//Задание 11
//Выведите на экран результат операции 5 взятое по модулю 2. Добавьте слушатель события на кнопку "Задание 11" и выведите результат на экран.

const buttonEleven = document.querySelector(".b-11");
let resultEleven = document.querySelector("#resultEleven");

const makeEleven = () => {
  //Ваш код

  resultEleven = resultEleven.innerHTML = `${Math.abs(5, 2)}`;
};
document.querySelector(".b-11").onclick = makeEleven;

//Задание 12
//Объедините строки str1 и str2. Добавьте слушатель события на кнопку "Задание 12" и выведите результат на экран.

const buttonTwelve = document.querySelector(".b-12");
let resultTwelve = document.querySelector("#resultTwelve");

const makeTwelve = () => {
  const str1 = "Hello, ";
  const str2 = "World!";
  //Ваш код
  resultTwelve = resultTwelve.innerHTML = str1 + str2;
};

document.querySelector(".b-12").onclick = makeTwelve;

//Задание 13
//Найдите длину строки str. Добавьте слушатель события на кнопку "Задание 13" и выведите результат на экран.

const buttonThirteen = document.querySelector(".b-13");
let resultThirteen = document.querySelector("#resultThirteen");

const makeThirteen = () => {
  const str = "JavaScript";
  let strLength = str.length;

  //Ваш код
  resultThirteen = resultThirteen.innerHTML = strLength;
};
document.querySelector(".b-13").onclick = makeThirteen;

//Задание 14
//Приведите строку str к нижнему регистру. Добавьте слушатель события на кнопку "Задание 14" и выведите результат на экран.

const buttonFourteen = document.querySelector(".b-14");
let resultFourteen = document.querySelector("#resultFourteen");

const makeFourteen = () => {
  let str = "JavaScript";
  let strToLowerCase = str.toLowerCase();
  resultFourteen = resultFourteen.innerHTML = strToLowerCase;
  //Ваш код
};
document.querySelector(".b-14").onclick = makeFourteen;

//Добавьте слушатель события

//Задание 15
//Приведите строку str к верхнему регистру. Добавьте слушатель события на кнопку "Задание 15" и выведите результат на экран.

const buttonFifteen = document.querySelector(".b-15");
let resultFifteen = document.querySelector("#resultFifteen");

const makeFifteen = () => {
  const str = "JavaScript";
  let strToUpperCase = str.toUpperCase();
  resultFifteen = resultFifteen.innerHTML = strToUpperCase;

  //Ваш код
};

document.querySelector(".b-15").onclick = makeFifteen;

//Добавьте слушатель события

//Задание 16
//Получите подстроку из строки str, начиная с индекса 3 и до конца строки. Добавьте слушатель события на кнопку "Задание 16" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSixteen = document.querySelector(".b-16");
let resultSixteen = document.querySelector("#resultSixteen");

const makeSixteen = () => {
  const str = "JavaScript";
  let getString = str.substring(3, 10);
  resultSixteen = resultSixteen.innerHTML = getString;
  //Ваш код
};
document.querySelector(".b-16").onclick = makeSixteen;
//Добавьте слушатель события

//Задание 17
//Получите подстроку из строки str, начиная с индекса 3 и до индекса 7 (не включая его). Добавьте слушатель события на кнопку "Задание 17" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSeventeen = document.querySelector(".b-17");
let resultSeventeen = document.querySelector("#resultSeventeen");

const makeSeventeen = () => {
  const str = "JavaScript";
  let findIndex = str.substring(3, 7);
  resultSeventeen = resultSeventeen.innerHTML = findIndex;
  //Ваш код
};
document.querySelector(".b-17").onclick = makeSeventeen;

//Добавьте слушатель события

//Задание 18
//Замените все вхождения подстроки 'world' на 'JavaScript' в строке str. Добавьте слушатель события на кнопку "Задание 18" и выведите результат на экран.
//Подсказка: Для замены подстрок в строке используйте метод replace()
const buttonEighteen = document.querySelector(".b-18");
let resultEighteen = document.querySelector("#resultEighteen");

const makeEighteen = () => {
  const str = "Hello, world!";
  //Ваш код

  let replace = str.replace(/world/gi, "JavaScript");
  resultEighteen = resultEighteen.innerHTML = replace;
};
document.querySelector(".b-18").onclick = makeEighteen;

//Добавьте слушатель события

//Задание 19
//Получите подстроку из строки str, начиная с индекса 7 и длиной 6 символов. Добавьте слушатель события на кнопку "Задание 19" и выведите результат на экран.

const buttonNineteen = document.querySelector(".b-19");
let resultNineteen = document.querySelector("#resultNineteen");

const makeNineteen = () => {
  const str = "Hello, world!";
  let substring = str.substr(7, 6);
  // console.log(substring);
  resultNineteen = resultNineteen.innerHTML = substring;
};

document.querySelector(".b-19").onclick = makeNineteen;

//Задание 20
//Найдите максимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 20" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.max()

const buttonTwenty = document.querySelector(".b-20");
let resultTwenty = document.querySelector("#resultTwenty");

const makeTwenty = () => {
  let numbers = Math.max(10, 25, 5, 30, 15);
  resultTwenty = resultTwenty.innerHTML = numbers;
};

document.querySelector(".b-20").onclick = makeTwenty;

// Задание 21
// Выведите на экран случайное целое число от 1 до 10. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.

const buttonTwentyOne = document.querySelector(".b-21");
let resultTwentyOne = document.querySelector("#resultTwentyOne");

const makeTwentyOne = () => {
  //Ваш код
  let numbers = Math.floor(Math.random());
  resultTwentyOne = resultTwentyOne.innerHTML = numbers;
};

document.querySelector(".b-21").onclick = makeTwentyOne;

//Задание 22
//Найдите минимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.min()

const buttonTwentyTwo = document.querySelector(".b-22");
const resultTwentyTwo = document.querySelector("#resultTwentyTwo");

const makeTwentyTwo = () => {
  //Ваш код
};

//Добавьте слушатель события

//Задание 23
//Выведите на экран результат возведения числа 2 в степень 5. Добавьте слушатель события на кнопку "Задание 23" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonTwentyThree = document.querySelector(".b-23");
let resultTwentyThree = document.querySelector("#resultTwentyThree");

const makeTwentyThree = () => {
  //Ваш код
  let number = Math.pow(2, 5);
  resultTwentyThree = resultTwentyThree.innerHTML = number;
};

document.querySelector(".b-23").onclick = makeTwentyThree;

//Добавьте слушатель события

//Задание 24
//Выведите на экран наименьшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 24" и выведите результат на экран.

const buttonTwentyFour = document.querySelector(".b-24");
let resultTwentyFour = document.querySelector("#resultTwentyFour");

const makeTwentyFour = () => {
  //Ваш код
  let number = Math.min(7, 3, 11, 5, 9);
  resultTwentyFour = resultTwentyFour.innerHTML = number;
};

document.querySelector(".b-24").onclick = makeTwentyFour;

//Добавьте слушатель события

//Задание 25
//Выведите на экран наибольшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 25" и выведите результат на экран.

const buttonTwentyFive = document.querySelector(".b-25");
let resultTwentyFive = document.querySelector("#resultTwentyFive");

const makeTwentyFive = () => {
  //Ваш код
  let number = Math.max(7, 3, 11, 5, 9);
  resultTwentyFive = resultTwentyFive.innerHTML = number;
};

document.querySelector(".b-25").onclick = makeTwentyFive;

//Добавьте слушатель события

//Задание 26
//Выведите на экран случайное число от 0 до 1 с точностью до 4 знаков после запятой. Добавьте слушатель события на кнопку "Задание 26" и выведите результат на экран.
//Подсказка: Используйте метод toFixed(4)

const buttonTwentySix = document.querySelector(".b-26");
let resultTwentySix = document.querySelector("#resultTwentySix");

const makeTwentySix = () => {
  //Ваш код
  let number = 0.1;
  let number1 = number.toFixed(4);
  resultTwentySix = resultTwentySix.innerHTML = number1;
};

document.querySelector(".b-26").onclick = makeTwentySix;

//Добавьте слушатель события

//Задание 27
//Выведите на экран случайное целое число от 50 до 100. Добавьте слушатель события на кнопку "Задание 27" и выведите результат на экран.

const buttonTwentySeven = document.querySelector(".b-27");
let resultTwentySeven = document.querySelector("#resultTwentySeven");

const makeTwentySeven = () => {
  //Ваш код
  let randomNumber = Math.floor(Math.random(50) * 101);
  resultTwentySeven = resultTwentySeven.innerHTML = randomNumber;
};

document.querySelector(".b-27").onclick = makeTwentySeven;

//Добавьте слушатель события

//Задание 28
//Округлите число 4.47 в большую сторону с помощью метода Math.ceil(). Добавьте слушатель события на кнопку "Задание 28" и выведите результат на экран.

const buttonTwentyEight = document.querySelector(".b-28");
let resultTwentyEight = document.querySelector("#resultTwentyEight");

const makeTwentyEight = () => {
  //Ваш код
  let number = Math.ceil(4.47);
  resultTwentyEight = resultTwentyEight.innerHTML = number;
};

document.querySelector(".b-28").onclick = makeTwentyEight;

//Добавьте слушатель события

//Задание 29
//Получите квадратный корень из числа 16 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 29" и выведите результат на экран.

const buttonTwentyNine = document.querySelector(".b-29");
const resultTwentyNine = document.querySelector("#resultTwentyNine");

const makeTwentyNine = () => {
  //Ваш код
  let squareRoot = Math.sqrt(16);
  resultTwentyNine = resultTwentyNine.innerHTML = squareRoot;
};

document.querySelector(".b-29").onclick = makeTwentyNine;

//Добавьте слушатель события

//Задание 30
//Получите квадратный корень из числа 25 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 30" и выведите результат на экран.

const buttonThirty = document.querySelector(".b-30");
let resultThirty = document.querySelector("#resultThirty");

const makeThirty = () => {
  //Ваш код
  let squareRoot = Math.sqrt(25);
  resultThirty = resultThirty.innerHTML = squareRoot;
};

document.querySelector(".b-30").onclick = makeThirty;

//Добавьте слушатель события
