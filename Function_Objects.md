### `More on Annotations Around Functions`
```ts
const add = (a: number, b: number): number => {
    return a + b;
};


const add = (a: number, b: number): number => {
    return a + b;
};


const substract = (a: number, b: number): number => {
    return a - b;
};
```





### `Annotations for Anonymous Functions`

```ts
function divide(a: number, b: number): number {
    return a/b;
}

const multiply = function(a: number, b: number): number{
    return a * b;
}
```





### `void and never`
```ts
const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
}



const throwError = (message: string): void => {
    if(!message){
        throw new Error(message);
    }
}
```







### `Destructuring with Annotations`

```ts
const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

```




### `Annotations Around Objects`

```ts
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    }
};


// const {age, name}: {age: number, name: string} = profile;

const {age}:{age: number}  = profile;
const {
    coords: {lat, lng}
}: { coords: {lat: number; lng: number}} = profile;
```




