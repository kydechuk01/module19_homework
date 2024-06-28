// 1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
function ElectricDevice(id, name) {

	this.id = id;
	this.name = name;
	this.enabled = false; // по-умолчанию выкл

	// включить
	this.enable = function () {
		this.enabled = true;
		console.log(`Устройство ${this.name} [${this.id}] включено`)
		return true;
	}

	// выключить
	this.disable = function () {
		this.enabled = false;
		console.log(`Устройство ${this.name} [${this.id}] выключено`)
		return false;
	}

	// вернуть состояние
	this.state = function () {
		console.log(`Устройство  ${this.name} [${this.id}]. состояние: ${this.enabled ? 'включено' : 'выключено'}`);
		return this.enabled;
	}
}


// 2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

function Vacuum(id, name, type) {
	ElectricDevice.call(this, id, name);
	this.type = type; // тип пылесоса (строка)

	this.disable = function () {
		this.enabled = false;
		this.power = 0;
		console.log(`Устройство ${this.name} [${this.id}] выключено. Мощность ${this.power}`)
		return false;
	};

	this.setPower = function (power) {
		if (this.enabled) {
			this.power = power;
			console.log(`Для устройства ${this.name} [${this.id}] установлена мощность ${this.power}`);
			return true;
		} else {
			console.log(`Устройство ${this.name} [${this.id}] не включено. Ошибка установки мощности ${power}.`);
			return false;
		}
	};
}

function Kettle(id, name, capacity) {
	ElectricDevice.call(this, id, name);
	this.capacity = capacity; // объем чайника
	this.disable = function () {
		this.enabled = false;
		this.temp = undefined;
		console.log(`Устройство ${this.name} [${this.id}] выключено.`)
		return false;
	}
	this.setTemp = function (temp) {
		if (this.enabled) {
			this.temp = temp;
			console.log(`Для устройства ${this.name} [${this.id}] установлена температура ${this.temp}`);
			return true;
		} else {
			console.log(`Устройство ${this.name} [${this.id}] не включено. Ошибка установки температуры ${temp}.`);
			return false;
		}
	}
}

// 3. создаем экземпляры приборов
console.log('\n### Создаем устройства:\n');

var myVacuum = new Vacuum(0, "Пылесос", 0, 'робот-пылесос');
var myKettle = new Kettle(1, "Чайник", '1.5L');

console.log(myVacuum);
console.log(myKettle);

console.log('\n### Проверка состояния устройств:\n');
console.log(myKettle.state());
console.log(myVacuum.state());

console.log('\n### Включаем устройства:\n');

myVacuum.enable();
myKettle.enable();

console.log('\n### Задаем мощность пылесоса:\n');
myVacuum.setPower(85);

console.log('\n### Выключаем пылесос и проверяем установку мощности:\n');

myVacuum.disable();
myVacuum.setPower(100);


console.log('\n### Задаем температуру чайника:\n');
myKettle.setTemp(95);

console.log('\n### Выключаем чайник и проверяем установку температуры:\n');
myKettle.disable();
myKettle.setTemp(75);

console.log('\n### Состояние устройств:\n');
console.log(myVacuum);
console.log(myKettle);
