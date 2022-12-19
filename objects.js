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

console.log(is(company1, company2));
console.log(is(company3, company4));




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
console.log(getDomainInfo('https://hexlet.io'));
console.log(getDomainInfo('http://google.com'));




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
console.log(countWords('another one sentence with strange Words words'));
