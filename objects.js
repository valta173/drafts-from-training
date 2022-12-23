/* Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. То есть приводит их к определенному виду.

На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся два поля: имя и описание.

У некоторых уроков имя и описание могут быть в разном регистре. Такое случается при вводе данных:

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колег',
};

Наша функция должна обновлять содержимое урока по следующим правилам:

Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
Весь текст описания приводится к нижнему регистру.*/
 

// with lodash ._capitalize
const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колег',
};

const normalize = obj => {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
};

export default normalize();

normalize(lesson);
console.log(lesson);
/* {
    description: "как удивить колег",
    name: "Деструктуризация"
   } */




/* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, website. */

const is = (c1, c2) => {
  if (c1.name === c2.name && c1.state === c2.state && c1.website === c2.website)
    return true;
  
  return false;
}

export default is();

// with lodash _.isEqual() 
const is = (c1, c2) => _.isEqual(c1, c2);


const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

console.log(is(company1, company2)); // false
console.log(is(company3, company4)); // true




/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем: */

const getDomainInfo = (domain) => {
  let scheme = domain.split(':', 1).join();
  if (!domain.startsWith('http')) scheme = 'http';
  const name = _.last(domain.split('//'));
  
  const result = {name, scheme};
  return result;
}

export default getDomainInfo();

console.log(getDomainInfo('yandex.ru'));
/* {
    name: "yandex.ru",
    scheme: "http"
   } */
console.log(getDomainInfo('https://hexlet.io'));
/* {
    name: "hexlet.io",
    scheme: "https"
   } */
console.log(getDomainInfo('http://google.com'));
/* {
    name: "google.com",
    scheme: "http"
   } */




/* Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект. В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли. */

const countWords = string => {
  const arr = _.words(string.toLowerCase());
  let obj = {};
  
  for (const item of arr) {
    if (obj.hasOwnProperty(item)) 
      obj[item]++;
    else 
      obj[item] = 1;
  }

  return obj;
};

export default countWords();

console.log(countWords('one two three two ONE one wow'));
/* {
   one: 3,
   three: 1,
   two: 2,
   wow: 1
   } */
console.log(countWords('another one sentence with strange Words words'));
/* {
    another: 1,
    one: 1,
    sentence: 1,
    strange: 1,
    with: 1,
    words: 2
   } */




/* Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. Параметры:

Исходный объект
Массив имен свойств */
const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const pick = (obj, data) => _.pick(obj, data);

export default pick();

console.log(pick(data, ['none', 'cores'])); // { cores: 4 }
console.log(pick(data, ['user', 'os'])); // { os: "linux", user: "ubuntu" }
console.log(pick(data, [])); // { ... }




/*Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

Исходный объект
Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null.

В этой задаче нельзя использовать библиотеку lodash. Смысл задачи в том, чтобы реализовать всё самостоятельно.*/

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

const get = (obj, arr) => {
  let value = obj;
  for (const key of arr) {
    value = value[key];
    if (value === undefined) return null;
  }
  return value;
};

console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false




/* Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью. */

// Вызовы ниже нужно рассматривать как независимые

const company = {
  name: null,
  state: 'moderating',
};
 
const data = {
  name: 'Hexlet',
  state: 'published',
};

const fill = (basicObj, pickData, data) => {
  
  let copyObj = {};
  
  for (let key in basicObj) {
    copyObj[key] = basicObj[key];
  }

  return Object.assign(copyObj, _.pick(data, pickData));
}

export default fill();

console.log(fill(company, ['name', 'state'], data)); // { name: "Hexlet", state: "published" }
console.log(fill(company, ['name'], data)); // { name: "Hexlet", state: "moderating" }
console.log(fill(company, [], data)); // { name: null, state: "moderating" }





/* Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов. */

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
  key3: 'someValue',
};

const cloneDeep = (obj) => {
  let newObj = {};
  for (let item in obj) {
    if (_.isObject(obj[item])) {
      newObj[item] = cloneDeep(obj[item]);
      continue;
    } 
    newObj[item] = obj[item];
  }
  return newObj;
}

export default cloneDeep();

const result = cloneDeep(data);

console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true




/* Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:

Имя
Объект с дополнительными свойствами
Также у компаний есть два свойства со значениями по умолчанию:

state – moderating
createdAt – текущая дата */

const make = (name, list) => {
  let result = {};
  
  let createdAt = new Date();
  const dd = String(createdAt.getDate()).padStart(2, '0');
  const mm = String(createdAt.getMonth() + 1).padStart(2, '0');
  const yyyy = createdAt.getFullYear();
  createdAt = mm + '/' + dd + '/' + yyyy;
  
  const state = 'moderating';
  
  for (let key in list) {
    result[key] = list[key];
  }
  
  return {name, state, ...result, createdAt};
};

export default make();

console.log(make('Hexlet', {}));
/* {
   createdAt: "12/22/2022",
   name: "Hexlet",
   state: "moderating"
   }*/

console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }));
/* {
   createdAt: "12/22/2022",
   name: "Hexlet",
   state: "published",
   website: "hexlet.io"
   } */




/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен. */

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = ( arr ) => {
  let result = [];
  
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let item in arr[i] ) {
      const { name: nameUser } = arr[i];
      if ( !result.includes(nameUser) ) result.push(nameUser);
    }
  }
    
  return result.sort();
}

export default getSortedNames();

console.log(getSortedNames(users)); // ["Bronn", "Eiegon", "Reigar", "Sansa"]
