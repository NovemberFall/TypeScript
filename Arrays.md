### `Arrays in TypeScript`

![](img/19.png)


```ts
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// const carsByMake = [
//     ['f150'],
//     ['corolla'],
//     ['camaro']
// ];


const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);


//Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});
```





### `Multiple Types in Arrays`
```ts
//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
```









### `Tuples in Typescript`
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)
![](img/.png)