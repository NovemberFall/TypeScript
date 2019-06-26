# type basics

```ts

//string
let myName: string = 'Ben';

let myAge: number = 27;

let hasHobbies: boolean = false;

let myRealAge: number;
myRealAge = 27;

let hobbies: any[] = ["Cooking", "Sports"];
//console.log(typeof hobbies)
hobbies = ["A string"]

//tuples
let address: [string, number] = ["Superstreet", 99];

//enum
enum Color {
    Gray,   //0
    Green,  //1
    Blue    //2
}
let myColor: Color = Color.Green;
console.log(myColor); //we don't see green, we see 1 
```

# enum
```ts
enum Color {
    Gray,   //0
    Green = 100,  //
    Blue    //
}
let myColor: Color = Color.Green;
console.log(myColor); //we don't see green, we see 100

enum Color {
    Gray,   //0
    Green = 100,  //
    Blue    //
}
let myColor: Color = Color.Blue;
console.log(myColor); //we don't see green, we see 101
```

# any type
```ts
//any
let car: any = "BMW";
/* without any, it wil generate error, since car will be a string */
console.log(car);  //BMW
car = {brand: "BMW", series: 3};
console.log(car);   //brand: "BMW", series: 3
```

# function
```ts
//functions
function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void{
    console.log("Hello!");
}

//argument types
function multiply(value1: number, value2: number): number{
    return value1 * value2;
}

```

# function as types
```ts
/*
// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();      //Hello!
myMultiply = multiply;
console.log(myMultiply(5, 2)); //10
*/

let myMultiply: (a: number, b: number)=> number;
myMultiply = multiply;
console.log(myMultiply(10,10));
```


# object
```ts
// objects
let userData:{name: string, age: number} = {
    name: "Max",
    age: 27
};

//complex object
let complex:{data: number[], output:(all: boolean)=> number[]} ={
    data: [100, 3.99, 10],
    output: function(all: boolean):number[]{
        return this.data;
    }
};
```