Type Inference

Typescript bersifat strongly typed system yang berarti kita perlu menganotasikan type secara eksplicit pada kode Typescript yang kita tulis dan dilakukan type checking pada saat proses kompilasi kode ke Javascript. Namun, Typescript sendiri memungkinkan kita untuk tidak menuliskan type secara eksplicit yang nantinya akan dilakukan type inference secara otomatis oleh Typescript compiler. Konsep itulah Typescript dapat disebut optionally typed karena kita dapat menulis dynamic typing seperti native Javascript dengan tambahan fitur pada Typescript dan type checking pada saat proses kompilasi kode.

Contohnya:
```

index.ts

let mypet = 'Dog';
// let mypet: string
// variable mypet di kenali oleh Typescript compiler dengan tipe data string walaupun tidak secara eksplicit di tulis

let totalPrice = 30000;
// let totalPrice: Number 

let randomItems = [1, 2, null]
// let randomItems (number | null)[]

```


kompile kode diatas dengn menggunakan command:
```

tsc index.ts
```


Jika berhasil akan mengenerate / menghasilkan file Javascript baru dengan nama index.js yang sudah di generate oleh Typescript compiler.
Variable

Mirip seperti Javascript, cara mendeklarasikan variable pada Typescript menggunakan keywords var, let, dan const

cara mendeklrasikan variable pada Typescript:

Variable dapat di deklrasikan menggunakan keywords var, let, atau const. setelah nama variable dapat menuliskan type sebuah variable dengan menggunakan : (titik dua) diiktui tipe data yang diinginkan.

peraturan cara mendeklarasikan variable:

    Nama variable dapat digabungkan antara alfabet dengan angka
    Variable tidak dapat mengandung spasi atau $ pada awal variable
    Awal nama variable tidak dapat berupa angka Variable dapat di deklrasikan menggunakan keyword var, let, dan const

// keywords var
var namaVariable: type = <value>;

// keywords let
let namaVariable: type = <value>;

// keywords const
const namaVariable: type = <value>;

Apa saja perbedaan var, let, dan const ?

Assignment, var dan let dapat dilakukan reassigment valuenya namun tidak untuk const. karena const memiliki sifat immutable atau tidak bisa diubah valuenya.

var employee: string = "John Doe";
employee = 'Eminem'; // tidak error

let programmer: string = 'Dan Abramof';
programmer = 'John Fafa'; // Tidak Error

const engineer: string = 'Bill Gates';
engineer = 'Thomas Alfa ediso' 
//  error karena const tidak dapat di lakukan assign ulang terhadap nilai yang telah di inisiasi sifatnya immutable

let programmer: string = 'Mark Zuckenberg' 
// error cannot redeclare block-scope variable

Hoisting, Jika menggunakan var kita konsep hoisting dapat berlaku untuk var. Namun, tidak dapat berlaku untuk let dan const

employee = 'John Doe'
console.log(employee)
var employee: string // tidak error
employee = 'John Doe'
console.log(employee)
let employee: string // error Block-scoped variable 'employee' used before its declaration
employee = 'John Doe'
console.log(employee)
const employee: string // error const declaration must be initiated

Scope var dapat merujuk pada global variable / function variable / block scope variable, sedangkan const dan let merujuk pada block-scope variable.

 var greet: string = "Good morning";
 var hour: number = 12;

  if (hour >= 12) {
     var greet = "Good Afternoon"; 
  }

  console.log(greeter) // "Good Afternoon"

var akan menimbulkan masalah karena sifatnya global dan dapat dilakukan reassign pada variable dan bisa jadi akan mendapatkan hasil yang salah seperti contoh diatas

 let morning: string = "Good morning";
 let hour : number = 12;

  if (hour >= 12) {
     let afterrnoon = "Good Afternoon"; 
  }

  console.log(afternoon) // afternoon is not defined

variable afternoon yang di deklarasikan menggunakan let tidak dapat diakses console diluar block scope if dan berlaku juga untuk scope pada fungsi atau class. Begitu juga dengan variable yang dideklrasikan dengan keywords const

 let morning = "Good morning";
 var hour = 12;

  if (hour >= 12) {
     let afterrnoon = "Good Afternoon"; 
  }

  console.log(afternoon) // afternoon is not defined

Convention untuk Modern Javascript dan Typescript adalah sebagai berikut mengenai var, let, dan const:

    gunakan keywords const secara default untuk mendeklrasikan variable pada Typescript
    gunakan let untuk mendeklarasikan variable yang sifatnya mutable atau iterable
    hindari menggunakan var

Tipe Data Dasar
string

Tipe data string digunakan untuk menyimpan informasi yang bersifat tekstual. string dapat di tulis menggunakan ("") tanda petik dua ataupun ('') petik satu

const SUNDAY: string = "SUNDAY";
const MONDAY: string = 'MONDAY';

number

Tipe data number digunakan untuk mewakili bilangan bulat dan nilai floating-point dalam JavaScript dan juga TypeScript. Namun, Anda harus ingat bahwa semua nomor diwakili secara internal sebagai nilai floating-point (descimal). Number juga dapat ditentukan sebagai literatur Heksadesimal, Oktal atau Biner. Ingatlah bahwa representasi Oktal dan Biner diperkenalkan di ES6, dan ini dapat menghasilkan keluaran kode JavaScript yang berbeda berdasarkan versi yang Anda targetkan.

Ada juga tiga nilai simbolis khusus tambahan yang termasuk dalam tipe number: +Infinity, -Infinity, dan NaN. Berikut adalah beberapa contoh penggunaan tipe number.

// Jika option strictNullChecks pada Typescript compiler di set ke true
let a: number = undefined; // Error
let b: number = null; // Error
let c: number = 3;
let d: number = 0b111001; // Binary
let e: number = 0o436; // Octal
let f: number = 0xadf0d; // Hexadecimal
let g: number = "cat"; // Error

// Jika option strictNullChecks pada Typescript compiler di set ke false
let a: number = undefined; // Ok
let b: number = null; // Ok
let c: number = 3;
let d: number = 0b111001; // Binary
let e: number = 0o436; // Octal
let f: number = 0xadf0d; // Hexadecimal
let g: number = "cat"; // Error

Boolean

Tipe data boolean hanya memiliki 2 nilai valid saja true atau false digunakan pada struktrur kontrol conditional statemen seperti if else, switch case, while loop, dan for loop

let isValid: boolean = true
let isNill: boolean = false

Undefined

undefined pada Typescript merupakan tipe data yang digunakan untuk merepresentasikan sebuah variable yang belum diinialisasi valuenya. by default undefined menjadi sub types dari Typescript

// dengan option strictNullCheck diubah menjadi true
let a: undefined = undefined; // Ok
let b: undefined = null; // Error
let c: number = undefined; // Error
let d: void = undefined; // Ok

// dengan option strictNullCheck diubah menjadi false
let a: undefined = undefined; // Ok
let b: undefined = null; // Ok
let c: number = undefined; // Ok
let d: void = undefined; // Ok

null

null adalah tipe data yang merepresentasikan ketiadaan value. Jika option strictNullCheck pada config compilerOptions pada tsconfig.json diubah menjadi true maka tipe data null hanya dapat diisi dengan value null saja. Jika diset ke false maka tipe data null dapat diisi dengan value tipe data lain

// strictNullChecks diset ke true
let banana: null = null; // Ok
let quantity: undefined = null; // Error
let discount: number = null; // Error
let cashback: void = null; // Error

// // strictNullChecks diset ke false
let banana: null = null; // Ok
let quantity: undefined = null; // Ok
let discount: number = null; // Ok
let cashnack: void = null; // Ok

Array

tipe data Array adalah tipe data yang berisi list dari sebuah elemen. sebuah list dapat memiliki berbagai multiple data ataupun hanya satu tipe data. tipe data array dapat dianotasikan menggunakan kurang kotak type[ ] ataupun menggunakan generic array yang dianotasikan menggunakan angular brackets Array<type>

let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

Tuples

Typescript memiliki tipe data baru yang berbentuk array dengan panjang array yang telah diketahui dan dapat mengandung beberapa tipe data. cara menganotasikan sebuah tuple pada Typescript yaitu sama seperti membuat array pada Typescript namun tuple memiliki size yang sudah diketahui dan tipe data yang sudah diketahui juga. Contohnya

// lakukan anotasi type tuple setelah nama variable. cara menganotasikan type diletaikkan dalam kurung tegak 
let student: [string, number]; 

// assign value tuple sesuai jenis type yang sudah dianotasikan
student = ["John Doe", 60]; // OK
student = ["John Dee", 80]; // OK
student = [70, "John Doe"]; // Error
student = [40, "John Dee"]; // Error

Fitur baru tuple pada Typescript 4.0
Variadic tuple type

kita dapat mendapatkan tail(buntut) dari sebuah tuple dengan menggunakan spread operator pada value kedua descrtucturing sebuah array.

function tail(arg: Array<string>): Array<string> {
    // desctructuring sebuah array menggunakan konsep tuple 
    // gunakan spread operator pada value kedua destructuring array untuk mendapatkan nilai buntut sebuah array
    const [_, ...result] = arg; 
    return result
}

const myFavoriteFruits = ["Apel", "Nanas", "Pisang"]
console.log(tail(myFavoriteFruits)) // "[Nanas", "Pisang"]

Labeled tuple element

function printUsernameInfo(...args: [string, number]) {
    return {
        name: args[0],
        age: args[1]
    }
}

/* sama seperti
function printUsernameInfo(args0: string, args1: number) {
} */

const employeeName: string = 'John Doe'
const employeeAge: number = 23

console.log(printUsernameInfo(employeeName, employeeAge))

Variables Scope

sama seperti penjelasan tentang var, let, dan const. pada Typescript beberapa variable scope
Global scope

Variable yang dideklarasikan secara global dapat diakses di scope manapun baik function scope, if block scope, iteration block scope ataupun nested function scope

let globalVar=100;  // global scope

function globalFunction() {          //function
  console.log(globalVar) // 100

  if (true) {         //code block
    console.log(globalVar) // 100
  }

  function nested() {         //nested function within someFn1
    console.log(globalVar) // 1--
  }

}

for (let c = 0; c < 3; c++){    //code block
  console.log(globalVar); // 100
}

function someOtherFn1() {       //another function
  console.log(globalVar) // 100
}

console.log(globalVar) // 100          //outside of any function/code block
### Function scope

variable yang dideklarasikan pada function scope hanya dapat diakses pada block scope function tersebut atau nested child funcition tersebut dan tidak dapat diakses pada luar block scope function tersebut ataupun pada global scope

 function initFunction() {   
    let fnVar=10                
    console.log(fnVar) // 10

    if (true) {
      console.log(fnVar)  //10
    }

    function nested() {
      console.log(fnVar)       
    }

  }

  function otherFunc() {
      console.log(fnVar)  // cannot find name fnVar   
  }

  for (let c = 0; c < 3; c++){
      console.log(fnVar);  // cannot find name fnVar
  }

  console.log(fnVar) // cannot find name fnVar

Nested Function Scope

variable yang dideklarasikan pada nested function scope tidak dapat diakses diluar function tersebut bahkan di scope parent functionnya sendiri dan hanya dapat diakses pada function tersebut saja atau nested functionnya itu sendiri

function someFn() {

    function nested() {
      let fnNestedVar=100         
      console.log(fnNestedVar) // 100
    }

    console.log(fnNestedVar)            //error cannot find name fnNestedVar
}

function someOtherFn() {
    console.log(fnNestedVar)            //error cannot find name fnNestedVar
}

for (let c = 0; c < 3; c++){
    console.log(fnNestedVar);           //error cannot find name fnNestedVar
}

console.log(fnNestedVar)   //error cannot find name fnNestedVar

Local scope

Local scope merupakan scope variable yang dideklarasikan pada block code if else ataupun block code iteration. variable hanya dapat diakses pada block code tersebut saja tanpa dapat di akses dari luar block code tersebut

function initFunction() {   

    if (true) {        
      let localVar=1000
      console.log(localVar)      //ok
    }

    console.log(localVar)        //Error

    function nested() {         
      console.log(localVar)      //Error
    }

}

for (let c = 0; c < 3; c++){    
    console.log(localVar);        //Error
}

function someOtherFn() {       
    console.log(localVar)        //Error
}

console.log(localVar)          //Error

Spread Operator (...)

spread operator berfungsi untuk spread (menyebar) element sebuah array atau object. Kegunaan spread operator umumnya
Copy Array Element

sebuah elemen pada array dapat di copy menggunakan spread operator

// copying array
let list = [1, 2];
let copyList = [...list, 3, 4];
console.log(copyList); // [1,2,3,4]

Spread Object Value (Copy Object Element)

// // copying object
const point2D = {x: 1, y: 2};
/** Create a new object by using all the point2D props along with z */
const point3D = {...point2D, z: 3}; 
// {x: 1, y:2, z:3}

Rest parameter

kita dapat mengisi parameter pada fungsi Typescript menggunakan spread operator untuk mempersingkat menulis parameter pada sebuah fungsi

pada Javascript rest parameter di tulis menggunakan konsep func.apply()

// before Typescript
function foo(a, b): string {
    return a + b;
}


let d = foo.apply(null, [10, 20]); 
console.log(d) // 30

pada Typescript dapat menggunakan spread operator seperti kode dibawah ini:

// menggunakan spread operator sebagai rest parameter
function boo(...x: number[]): void {   
    console.log(x)
}

var args:number[] = [0, 1, 2];
boo(...args)

Flow Control
IF ELSE

sama seperti Javascript conditional statement pada Typescript dapat ditulis menggunakan if else seperti syntax dibawah ini

// if
if(condition) {

}

// if else

if(condition) {

} else {

}

// if else if
if(condition) {

} else if(condiion) {

} else {

}

// inline if 
let isNill = value === null ? true : false

contoh program if else sederhana adalah sebegai berikut:

let cost: number = 80
let totalRevenue: number = 100

if (totalRevenue - cost > 0) {
    console.log('Profit')
} else if(totalRevenue - cost > 0) {
    console.log('balik modal')
} else {
    console.log('Rugi')
}

Switch Case

Switch case digunakan juga sebagai conditional statement. Conditional statemen menggunakan switch case dapat ditulis seperti syntax dibawah ini

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Contoh sederhananya seperti dibawah ini:

        function getAlertSubscribers(level: AlertLevel) {
            let emails = new Array<string>();
            switch (level) {
                case AlertLevel.info:
                    emails.push("cst@domain.com");
                    break;
                case AlertLevel.warning:
                    emails.push("development@domain.com");
                    emails.push("sysadmin@domain.com");
                    break;
                case AlertLevel.error:
                    emails.push("development@domain.com");
                    emails.push("sysadmin@domain.com");
                    emails.push("management@domain.com");
                    break;
                default:
                    throw new Error("Invalid argument!");
            }
            return emails;
        }

        console.log(getAlertSubscribers(AlertLevel.info)); // ["cst@domain.com"]
        console.log(getAlertSubscribers(AlertLevel.warning)); // ["development@domain.com", "sysadmin@domain.com"]

While Loop

While digunakan untuk melakukan iterasi pada Typescript. Proses iterasi akan tetap dilakukan sampai kondisi pada whileloop terpenuhi. Syntax yang diperlukan untuk melakukan iterasi menggunakan while seperti dibawah ini.

while (condition expression) {
    // code block to be executed
}

contoh sederhana:

let num: number = 0;    

while (num < 5) {
    console.log(num) // block code execute before i was updated
    num += 1;
    // block code of after i was updated
}
/*output
       0 
       1
       2
       3
       4 */

do while

do while sama seperti while loop.tetapi checking kondisi dilakukan di akhir statement bukan dilakukan di awal statemen seperti pada while loop

do {
// code block to be executed
}
while (condition expression);

contoh sederhana:

let i2: number = 0;

do {
    i2 += 1;
    console.log(i2);
} while (i2 < 5);


    /*output
       1
       2
       3
       4 */

for loop

berbeda dengan while loop for loop menempatkan proses iterasi dan kondis dalam satu line di dalam parenthesis for loop

for(nilai_sebelum_diiterasi, kondisi, iterasi) {
    // block code
}

contoh kodenya:

 const decimalNumber = [21, 12, 13]
 let sum = 0

 for(let i = 0; i<= decimalNumber.length-1; i++) {
     sum += decimalNumber[i]
 }

console.log(sum) // 46

for ... in

for...in adalah bentuk lain dari for loop yang dapat digunakan untuk melakukan iterasi pada list array atau tuple yang akan mereturn value dari index array yang dilakukan iterasi

note: for...in memberikan kembalian value dari hasil iterasi dalam bentuk index

for (let index in array) {
        // block code
}

contoh program sederhana:

let item: any = { price: 10000, amount: 200, sold: 3 };

// melakukan iterasi pada object keys
for (let key in item) {
     // melakukan check apakah object item mempunyai properti key yang merupakan kembalian dari iterasi key pada object item
     if (item.hasOwnProperty(key)) {
              console.log(key + " = " + item[key]);
     }
}

for...of

for...of merupakan bentuk lain dari for loop juga. for...of dapat melakukan iterasi untuk array, tuple, maupun melakukan iterasi untuk object keys. tidak sama seperti for...in. for..of memberikan kembalian element dari object yang diiterasi.

syntax:

for (let element of list) {
    /// block code
}

contoh sederhana untuk for...of

let iterable = [10, 20, 30];
let summary = 0

for (let value of iterable) {
     sum += value
}

console.log(sum);

Function

fungsi pada Typescript di tulis seperti menulis fungsi pada Javascript. Perbedaanya adalah pada Typescript kita dapat menganotasikan type pada parameter fungsi yang kita tulis ataupun return type pada fungsi yang kita tulis

function namaFungsi(parameter1: type, parameter2: type): returnType {

}

contoh:

function multiply(a: number, b: number): number {
    return a + b;
}

console.log(multiply(10,20)) // 30
console.log(multipl(10, "20")) // error string is not assignable to type number

Beberapa cara menulis fungsi pada Typescript
Named Funtion

fungsi ditulis menggunakan keyword function dan dikuti nama fungsi

function greet1(name?: string): string {
    if (name) {
        return "Hi! " + name;
    } else {
        return "Hi!";
    }
}

greet1('John')

Anonymous Function

fungsi ditulis tanpa menggunakan nama fungsi. Namun di ekspresikan dalam bentuk variable

let greet2 = function(name?: string): string {
    if (name) {
        return "Hi! " + name;
    } else {
        return "Hi!";
    }
};

greet2('Joko')

Arrow function

arrow function merupakan anonymous function. Namun, ditulis tanpa menggunakan keywords function melainkan dengan menggunakan notasi fat arrow () => {}

(param1: type, param2: type, ..., paramN: type): returnType => expression

contoh kode:

let greet3 = (name: string): string =>  {
    if (name) {
        return "Hi! " + name;
    } else {
        return "Hi!";
    }
};

greet3()

Function type

kita dapat menganotasikan sebuah type memiliki function type dengan menganotasikan type menggunakan anotasi fat arrow

(parameter: type) => returnType
let greet4: (name: string) => string = function(name: string): string {
    if (name) {
        return "Hi! " + name;
    } else {
        return "Hi!";
    }
};

greet4()

void void merupakan type yang mengindikasikan sebuah function tidak memiliki kembalian atau return

() => void
function printUsername(username: string): void {
    console.log(username)
}

printUsername('Admin')

Classes

Pada Bahas pemorgraman berorientasi object, Class adalah entities dasar untuk membuat reusable component. Pada Javascript khususnya ES6 kebawah belum terdapat dukungan fitur kelas. Namun, jika kita menulis class pada Typescript dan melakukan kompilasi code ke native Javascript dengan target versi ES6 kebawah secara otomatis class pada Typescript yang kita tulis akan di transpile ke dalam bentuk native Javascript ES6 kebawah dan tidak perlu khawatir tentan backward compatibility dari older browser karena belum ada dukungan class pada Javascript ES6 kebawah

Class mengandung 3 element penting:

    properties variable pada class
    consturctor method pertama yang dijalankan ketika instance class di buat
    method
    Method merupakan suatu operasi berupa fungsi-fungsi yang dapat dikerjakan oleh suatu object. Method didefinisikan pada class akan tetapi dipanggil melalui object

contoh menulis class pada Typescript:

// keywords class diikuti nama kelas dengan huruf pertama Huruf Kapital untuk menandakan sebuah class
class Character {
    public fullname: string; // properties class dengan access modifiers public

    // constructor dengan parameter firstname dan last name
    constructor(firstname: string, lastname: string) {
      this.fullname = `${firstname} ${lastname}`;
    }

    // method dengan access modifiers public
    public greet(name?: string) {
      if (name) {
        return `Hi! ${name}! my name is ${this.fullname}`;
      } else {
        return `Hi! my name is ${this.fullname}`;
     }
   }
}

// membuat instance class menggunakan keywrods new
// class dapat digunakan untuk menganotasikan sebuah type untuk sebuah intance class class tersebut
const archer: Character = new Character('Robin', 'Hood')
let msg = archer.greet();
console.log(msg); // "Hi! my name is Robhin Hood"

let msg1 = archer.greet("Dr. Halsey");
console.log(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"

Properties

properties digunakan untuk mendeklarasikan variable pada class. secara default properties pada class memiliki access modifiers public properties pada class dapat dianotasikan typenya dengan cara seperti menganotasikan type pada sebuah variable. Secara default, properties pada class harus dilakukan initialisasi valuenya jika tidak akan mendapatkan error. properties has no initializer. initialisasi value properties dapat dilakukan pada constructor class

class Employee {
    name: string;
    age: number; 
    address: striing: // error properites has no initializer

    consturctor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// jika class tidak memiliki constructor dan properties tidak dilakukan initialisasi maka class tersebut dapat digunakan sebagai type saja. Namun, cara ini bukanlah good practice pada penulisan kode Typescript disarankan menggunakan interface atau type aliases untuk mendefinisikan sebuah type 

class Staff {
    name: string;
    age: number;
}

const legalStaff: Staff = {
    name: 'John Foo',
    age: 25
}

Constructor

Constructor adalah method paling awal yang akan dieksekusi setelah instance class dibuat. di constructor lah initialisasi value pada properties class dilakukan. Constructor hanya akan dipanggil satu kali saja pada setiap instance class dibuat. Constructor dapat memiliki parameter ataupun tidak. Parameter pada constructor merupakan parameter pada saat instance class dibuat

class Animal {
    name: string;
    population: number;

    constructor(name: string, population:number) {
        this.name = name;
        this.population = population
    }
}

const panda: Animal = new Animal('Red Panda', 2000)

Methods

Methods adalah suatu operasi yang berup fungsi yang digunakan untuk mengeksekusi program pada sebuah class. Jika method memiliki access modifiers public maka method dapat dipanggil dari luar class. Jika tidak, maka method hanya dapat dipanggil dalam class tersebut atau sub class class tersebut

class Animal {
    name: string;
    population: number;

    constructor(name: string, population:number) {
        this.name = name;
        this.population = population
    }

    getAnimalName(): string {
        return this.name
    }

    getPopulation(counry: string): number {
        //memanggil method didalam class menggunakan keyword this
        if(this.getAnimalName() === 'Red Panda' && country === 'Indonesia') {
          return 0
        } else {
          return this.population
        }
    }
}

const panda: Animal = new Animal('Red Panda', 2000)
// memanggil method class diluar class
console.log(panda.getAnimalName())  // 'Red Panda'
console.log(panda.getAnimalPopulation('Indonesia')) // 0

Interface

Interface merupakan kerangka dari sebuah class atau object. Digunakan untuk mempermudah memahami sebuah class. interface ditulis menggunakan keyword. Interface di anotasikan pada Class dengan menggunakan keywords implements

interface IClass {
    properties: type,
    methods(parameter: type): type
}

class MyClass implements IClass {
    properties: type;
    constructor(properties: type) {

    }

    methods(parameter: type): type {

    }
}

Contoh kode:

interface LoggerInterface {
        errorLog(): void;
}

class Logger implements LoggerInterface {
    error: string;

    constructor(error: string) {
        this.error = error
    }

    public errorLog(): void {
        console.log(this.error)
    }
}

const myLogger: Logger = new Logger('Error request')
myLogger.errorLog()

// interface sebagai tipe data pada object
interface User {
    name: string,
    password: string
}

const admin: User = {name: 'admin'. password: 'test123'}

Generics ()

Generics merupakan sebuah tipe yang dianotasikan menggunakan sebuah variable. Generics menawarkan cara untuk membuat sebuah code menjadi lebih reusable karena typenya menjadi lebih dinamis atau tidak terlalu strict pada type tertentu,

function fName<T>(args: T): T {
    return args
}

// sama seperti dibawah ini

function fName(arg: any): any {
    return arg;
}

contoh code:

class FootballPlayer { 
  firstName: string; 
  lastName: string;

  constructor(fname:string, lname:string) { 
    this.firstName = fname;
    this.lastName = lname;
  }
}

// generic constraint dengan type FootPlayer menggunakan keywords extends 
function printBestPlayer(player: T): void { 
  console.log(player) 
}

const bestPlayer: FootballPlayer = new FootballPlayer('Bambang', 'Pamungkas') 

printBestPlayer(bestPlayer)
