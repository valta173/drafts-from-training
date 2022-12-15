/* Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – массив содержит значения saturday и sunday
'short' – массив содержит значения sat и sun */

export const getWeekends = (length = 'long') => {
  if (length === 'long') return ['saturday', 'sunday']; 
  if (length === 'short') return ['sat', 'sun'];
}

console.log(getWeekends('short'));
console.log(getWeekends());




/* Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть */

export const swap = (arr) => {
  let swapStart = arr[0];
  let swapEnd = arr[arr.length - 1];
  if (arr.length < 2) arr
  else {
    arr[0] = swapEnd;
    arr[arr.length - 1] = swapStart;
  }
  return arr;
}
console.log(swap(['cat']));
console.log(swap(['cat', 'dog']));
console.log(swap(['cat', 'dog', 'mouse']));




/* Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null) */

const cities = ['moscow', 'london', 'berlin', 'porto'];

const getArrays = (arr, index, def = null) => (arr[index]) ? arr[index] : arr[index] = def;
export default getArrays();

console.log(getArrays(cities, 1));
console.log(getArrays(cities, 4));
console.log(getArrays(cities, 1, 'novosibirsk'));
console.log(getArrays(cities, 10, 'novosibirsk'));




/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел */

const names = ['john', 'smith', 'karl'];
 
const rename = (arr, prefix = 'Mr.') => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${prefix} ${arr[i]}`;
  }
    return arr;
}
export default rename;

console.log(rename(names, 'Mr.'));
console.log(rename(names, 'Mrs.'));
console.log(rename(names));




/* Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке. */
const names = ['john', 'smith', 'karl'];

export const reverse = arr => arr.reverse();

console.log(reverse(names));

// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse(), ну и ладно:

const names = ['john', 'smith', 'karl'];
const cities = ['moscow', 'london', 'paris', 'berlin'];

export const reverse = (arr) => {
  let array = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}

console.log(reverse(names));
console.log(reverse(cities));



/* Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три) */

const coll = [];
const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];

const calculateSumMulti3 = (arr) => {
  if (arr.length === 0) return 0;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) sum += arr[i];
  }
  
  return sum;
}

export default calculateSumMulti3();

console.log(calculateSumMulti3(coll));
console.log(calculateSumMulti3(coll1));
console.log(calculateSumMulti3(coll2));




/* Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :) */

const temperatures = [];
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];

const calculateAverage = (temperatures) => {
  if (!temperatures.length) return null;
  let sum = 0;
  for (const temp of temperatures) {
    sum += temp;
  }
  
  return sum / temperatures.length;
}

export default calculateAverage();

console.log(calculateAverage(temperatures));
console.log(calculateAverage(temperatures1));
console.log(calculateAverage(temperatures2));




/* Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию */

const temperatures = [];
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];

const getSameParity = (arr) => {
  let result = [];
  for (const num of arr) {
    if (Math.abs(arr[0] % 2 === 0)) {
      if (Math.abs(num % 2 === 0)) result.push(num);
    } else {
        if (Math.abs(num % 2 !== 0)) result.push(num);
      }
  }
  return result;
}

export default getSameParity();

console.log(getSameParity([]));
console.log(getSameParity([1, 2, 3]));
console.log(getSameParity([1, 2, 8]));
console.log(getSameParity([2, 2, 8]));




/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.

Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

Массив, содержащий купюры разных валют с различными номиналами
Наименование валюты */

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];

// С управляющими инструкциями мне не очень нравится работать...

const getTotalAmount = (arr, currency) => {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const devision = arr[i].split(' ');  
    if (devision[0] !== currency) continue; 
    result += +devision[1];
  }
  
  return result;
}

// Тем более, что всегда можно и без них!
const getTotalAmount = (arr, currency) => {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const devision = arr[i].split(' ');  
    if (devision[0] === currency) result += +devision[1];
  }
  
  return result;
}

export default getTotalAmount();

console.log(getTotalAmount(money1, 'usd'));
console.log(getTotalAmount(money2, 'eur'));
console.log(getTotalAmount(money3, 'rub'));




/* Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии. Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии. Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре (сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'. Если суперсерия закончилась в ничью, то нужно вернуть null. */

// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores1 = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];

const scores2 = [
  [3, 1], // Первая игра
  [4, 1], // Вторая игра
  [4, 1],
  [3, 2],
  [4, 3],
  [3, 2],
  [4, 3],
  [6, 5],
];

const scores3 = [
  [3, 7], // Первая игра
  [4, 5], // Вторая игра
  [4, 5],
  [3, 5],
  [4, 5],
  [3, 4],
  [4, 5],
  [6, 6],
];

const scores4 = [
  [3, 3], // Первая игра
  [4, 4], // Вторая игра
  [4, 4],
  [3, 3],
  [3, 3],
  [3, 3],
  [4, 4],
  [6, 6],
];

const getSuperSeriesWinner = (arr) => {
  let winsCanada = 0;
  let winsUssr = 0;
  
  for (let i = 0; i < arr.length; i++) {
    (arr[i][0] === arr[i][1]) ? winsCanada += 0 : (arr[i][0] > arr[i][1]) ? winsCanada++ : winsUssr++;
  }
  
  if (winsCanada === winsUssr) return null;
  const result = (winsCanada > winsUssr) ? 'Canada' : 'USSR';
  return result;
}

export default getSuperSeriesWinner();

console.log(getSuperSeriesWinner(scores1));
console.log(getSuperSeriesWinner(scores2));
console.log(getSuperSeriesWinner(scores3));
console.log(getSuperSeriesWinner(scores4));




/* Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию. */

const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];

const definitions1 = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

const definitions2 = [];

const buildDefinitionList = (arr) => {
  if (!arr.length) return '';
  
  let parts = ['<dl>'];
  
  for (let i = 0; i < arr.length; i++) {
    parts.push(`<dt>${arr[i][0]}</dt><dd>${arr[i][1]}</dd>`)
  };
  
  return parts = `${parts.join('')}</dl>`;
}

export default buildDefinitionList();

console.log(buildDefinitionList(definitions));
console.log(buildDefinitionList(definitions1));
console.log(buildDefinitionList(definitions2));




/* Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов). */

const sentence = 'When you play the game of thrones, you win or you die';
const sentence2 = 'chicken chicken? chicken! chicken';

const makeCensored = (sentence, stopWords) => {
  const separator = ' ';
  const words = sentence.split(separator);
  
  let censSens = [];
  for (const word of words) {
    (word === stopWords[0] || word === stopWords[1]) ? censSens.push('$#%!') : censSens.push(word);
  }
  
  return censSens.join(separator);
}

export default makeCensored();

console.log(makeCensored(sentence, ['die', 'play']));
console.log(makeCensored(sentence2, ['?', 'chicken']));

// Но что если стоп слов станет больше...?

const makeCensored = (sentence, stopWords) => {
  const separator = ' ';
  let words = sentence.split(separator);
  const censSens = [];
  for (let word of words) {
   (stopWords.includes(word)) ? censSens.push('$#%!') : censSens.push(word);
  }
  return censSens.join(separator);
}

// Ну вот, другое дело - теперь масштабируется))




/* Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах. */

const getSameCount = (arr1, arr2) => {
  const result = []
  
  for (const item of arr1) {
    for (const item2 of arr2) {
      if (item === item2) {
        result.push(item);
      }
    }
  }
  return _.uniq(result).length;
}

export default getSameCount();

console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]));
console.log(getSameCount([1, 4, 4], [4, 8, 4]));
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1]));
console.log(getSameCount([], []));

// Сначала всё усложнил и запутался)) Всё удалил и написал заново - работает!

// А потом новая тема и я почувствовал себя топ программером))))) Ну это же шик:
const getSameCount = (arr1, arr2) => _.uniq(_.intersection(arr1, arr2)).length;
// Работает точно так же, но кода в 10 раз меньше!




/* Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !. */

const countUniqChars = (text) => {
  const arr = _.uniq(text.split(''));
  let count = 0;
  
  for (const item of arr) {
    if (arr.includes(item)) count++;
  }
  return count;
}

export default countUniqChars();

console.log(countUniqChars('yyab'));
console.log(countUniqChars('You know nothing Jon Snow'));
console.log(countUniqChars(''));
console.log(countUniqChars('111yya!'));




/* Сортировка пузырьком (Buble sort) */

const bubleSort = (coll) => {
  let stepCount = coll.length - 1;
  let swapped;
  
  do {
    swapped = false;
    
    for (let i = 0; i < stepCount; i++) {
      if (coll[i] > coll[i + 1]) {
        let temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
      }
      swapped = true;
    }
  } while (swapped)
  
  return coll;
}

console.log(bubleSort([1, 5, 6, -4, 10]));
console.log(bubleSort([124, 57, -10, 23, 60242, 1]));
console.log(bubleSort([-3, 0, 52, -4, 0]));




/* Реализуйте и экспортируйте по умолчанию функцию, которая сортирует массив используя пузырьковую сортировку. Постарайтесь не подглядывать в текст теории и попробуйте воспроизвести алгоритм по памяти. */

const bubleSort = (coll) => {
  const stepsTo = coll.length - 1;
  let check;
  
  do {
    check = false;
    
    for (let i = 0; i < stepsTo; i++) {
      if (coll[i] > coll[i + 1]) {
        let sort = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = sort;
      }
      check = true;
    }
    
  } while (check);
  
  return coll;    
}

export default bubleSort();

console.log(bubleSort([3, 10, 4, 3]));
console.log(bubleSort([]));
