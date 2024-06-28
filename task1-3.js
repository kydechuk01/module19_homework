// Задание 1.
// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function getOwnProps(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

// Задание 2.
// Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function hasProp(str, obj) {
    return obj.hasOwnProperty(str);
}

// Задание 3.
// Напишите функцию, которая создает пустой объект, но без прототипа.

function createEmptyObj() {
    return Object.create(null);
}

// 1

console.log('### Проверка задания 1')

let human = {
    'Класс': 'Млекопитающие',
    'Вид': 'Homo sapiens',
}

let person = Object.create(human);

person.gender = 'male';
person.name = 'Ivan';
person.age = 18;
person.country = 'Russia';

console.log('Все свойства person, включая унаследованные:');
for (let key in person) { console.log(key, person[key]) }

console.log('\nТолько собственные свойства person:');
getOwnProps(person);

// 2

console.log('\n\n### Проверка задания 2')

console.log('Есть ли у person свойство age? ' + hasProp('age', person));
console.log('Есть ли у person свойство education? ' + hasProp('education', person));

// 3

console.log('\n\n### Проверка задания 3')

const newPerson = createEmptyObj();
console.log('Объект newPerson - это', newPerson);

