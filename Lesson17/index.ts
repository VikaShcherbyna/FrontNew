console.log("Welcome to ts");
//тип объявляется в момент определения переменной
let x: string;
x = "Peter";
// x=10;  так нельзя потому что инт в стринг запихиваем
x = String(10);
console.log(x);

let year: number = 1993;
console.log(year);

// ключивые слова для объявления типов: 'type' и 'interface'

type TAge = number; // называем их с большой буквы, или Т
let myAge: TAge = 30;
console.log("let myAge:Age=30                   - " + myAge);

//union type - можно присваивать выбор из несколько типов через логическое "ИЛИ"
let yourAge: number | string = 18;
console.log("let yourAge:number | string =18;   - " + yourAge);

//вы можете давать выбор не только из типов но из отдельных значений
type Animal = "cat" | "dog";
let myPet: Animal = "cat"; // если присвоим другое значение то будет ругаться

// расширяем ограничение значений
type ExtendedPet = Animal | "parrot";
let yourPet: ExtendedPet = "parrot";

let wildAnimal = "lion";
// wildAnimal=true  даст ошибку потому как выше мы строго указали что тип строка

//типизаци массивов
// массив строк
let truits: string[] = ["apple", "pear", "strawberry"];

//массив булевых значений
let answers: boolean[] = [true, false];

// * ключевые слова для объявления типов 'typу' и 'interface'

//как типищировать объект
//через Type

//*типизация через type
//TS проверит наличие всех ключей и соответствие данных по ключам их типов
type User = {
  firstName: string;
  isAdmin: boolean;
  // указываем необязательное поле
  age?: number;
};
type VipUser = User & {
  isVip: true;
};

const user1: User = { firstName: "Jack", isAdmin: true, age: 28 };
const vip: VipUser = { firstName: "Jack", isAdmin: false, isVip: true };
const vip1: VipUser = { firstName: "Jack", isAdmin: false, isVip: true };
console.log(vip1);
//*типизация объякта через unterface

interface IMagician {
  name: string;
  hasWand?: boolean;
  faculty: string;
}
interface IBlackMagician extends IMagician {
  hasBlackMagic: true;
}

const voldemort: IBlackMagician = {
  name: "Voldemort",
  faculty: "Sliserin",
  hasBlackMagic: true,
};
// Создайте интерфейс город City
// с типизированными ключами
interface City {
  name: string,
  population: number,
  foundationDate: number,
  isRiver: boolean,
  riverName: string
}
interface GermanyCity  extends City {
        touristicCity: boolean,
    touristicName?:string
  }

const myCity:GermanyCity={ 
    name: 'Lörrach',
    population: 20000,
    foundationDate: 1489,
    isRiver: true,
    touristicCity:true,
    riverName: 'Rein'
}
console.log(myCity)

//!Типизация функций
//типизируем параметры и возвращаемое значение
//вариант один
function sum(a:number, b:number):number{
    return a+b
}
console.log(sum(12,48))
//вариант два не указывая тип функции
function sum1(a:number, b:number){
    return a+b
} //60
console.log(sum1(12,48)) //60

function sum2(a:number, b:number, c:string):string{
    return `${c} ${a+b}`
}
console.log(sum2(12,48,'сумма'))  //вывод: сумма 60

//типизация 
const {touristicCity,foundationDate,touristicName,name} =myCity 
const infoCity:string=String(foundationDate)+" "+name
console.log(infoCity)