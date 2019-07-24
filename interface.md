### `interface`

- without interface:
```ts
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
}

printVehicle(oldCivic);
```

- the problem is that `const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {` this hard code is too hard to read.

### `Fixing long Annotations with interface`
```ts
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
}

printVehicle(oldCivic);
```


### `Syntax Around Interfaces`
