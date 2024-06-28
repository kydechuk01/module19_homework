// Задание 5.
// Перепишите консольное приложение из предыдущего юнита на классы.

// 1. Родительский класс с методами, которые включают/выключают прибор из розетки.
class ElectricDevice {

	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.enabled = false; // по-умолчанию выкл
	}

	// включить
	enable() {
		this.enabled = true;
		console.log(`Устройство ${this.name} [${this.id}] включено`);
		return true;
	}

	// выключить
	disable() {
		this.enabled = false;
		console.log(`Устройство ${this.name} [${this.id}] выключено`);
		return false;
	}

	// вернуть состояние
	state() {
		console.log(`Устройство  ${this.name} [${this.id}]. состояние: ${this.enabled ? 'включено' : 'выключено'}`);
		return this.enabled;
	}
}



// 2. Наследуем классы двух конкретных приборов - пылесоса и чайника.
// 3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

class Vacuum extends ElectricDevice {

	constructor(id, name, type) {
		super(id, name)
		this.type = type; // тип пылесоса (строка)
		this.power = undefined; // мощность по-умолчанию не задана
	}

	disable() {
		this.power = undefined;
		super.disable();
		return false;
	};

	setPower(power) {
		if (this.enabled) {
			this.power = power;
			console.log(`Для устройства ${this.name} [${this.id}] установили мощность ${this.power}`);
			return true;
		} else {
			console.log(`Устройство ${this.name} [${this.id}] не включено. Ошибка установки мощности ${power}.`);
			return false;
		}
	};
	getPower() {
		if (this.enabled) {
			console.log(`Для устройства ${this.name} [${this.id}] задана мощность ${this.power}`);
		}
		else {
			console.log(`Устройство ${this.name} [${this.id}] не включено.`);			
		}
		return this.power;
	};
	
}

class Kettle extends ElectricDevice {

	constructor(id, name, capacity) {
		super(id, name);
		this.temp = undefined; // температура по-умолчанию не задана
		this.capacity = capacity; // объем чайника

	}
	
	disable(){
		this.temp = undefined;
		super.disable();
		return false;
	}

	setTemp(temp) {
		if (this.enabled) {
			this.temp = temp;
			console.log(`Для устройства ${this.name} [${this.id}] задана температура ${this.temp}`);
			return true;
			}
		else {
			console.log(`Устройство ${this.name} [${this.id}] не включено. Ошибка установки температуры ${temp}.`);
			return false;
			}
		};

	getTemp() {
		if (this.enabled) {
			console.log(`Для устройства ${this.name} [${this.id}] задана температура ${this.temp}`);
		}
		else {
			console.log(`Устройство ${this.name} [${this.id}] не включено.`);			
		}
		return this.temp;
	};

}


// 3. создаем экземпляры приборов
console.log('\n### Создаем устройства:\n');

var myVacuum = new Vacuum(0, "Пылесос", 'робот-пылесос');
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

console.log('\n### Проверяем мощность пылесоса\n')
myVacuum.getPower();

console.log('\n### Выключаем пылесос и проверяем установку мощности:\n');

myVacuum.disable();
myVacuum.setPower(100);
console.log('\n### Проверяем мощность выключенного пылесоса\n')
myVacuum.getPower();


console.log('\n### Задаем температуру чайника:\n');
myKettle.setTemp(95);

console.log('\n### Проверяем температуру чайника:\n');
myKettle.getTemp();

console.log('\n### Выключаем чайник и проверяем установку температуры:\n');
myKettle.disable();
myKettle.setTemp(75);

console.log('\n### Проверяем температуру выключенного чайника:\n');
myKettle.getTemp();


console.log('\n### Состояние устройств:\n');
console.log(myVacuum);
console.log(myKettle);
