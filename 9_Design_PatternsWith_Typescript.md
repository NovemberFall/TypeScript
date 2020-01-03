## Design Patterns
- focus on design patterns
- write really reusable code
![](img/2020-01-02-21-01-36.png)
![](img/2020-01-02-21-02-40.png)
- `npm install -g parcel-bundler`
---

## Bundling with Parcel
![](img/2020-01-02-21-04-54.png)
- create a new folder maps

![](img/2020-01-02-21-06-09.png)
- create index.html
- create a folder `src/index.ts`
- index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./src/index.ts"></script>
    
</body>
</html>
```
- index.ts
```ts
console.log('hi there!');
```
- run `parcel index.html`
![](img/2020-01-02-21-26-35.png)
![](img/2020-01-02-21-27-08.png)
![](img/2020-01-02-21-27-52.png)
---

## Project Structure
![](img/2020-01-02-21-29-42.png)
- create User.ts
---

### Generating Random Data
![](img/2020-01-02-21-35-16.png)
- `npmjs.com`
- search `faker`
- `npm install faker` 
![](img/2020-01-02-21-40-18.png)
- run `parcel index.html` again
---

## Type Definition Files
![](img/2020-01-02-21-45-53.png)
- axios has a default Type definition file for us
- however, faker doesn't have a Type definition file
- so we have to install a type definition file manually if it is not included for us
![](img/2020-01-02-21-47-34.png)
- search `@types/faker` on npmjs.com
![](img/2020-01-02-21-50-14.png)
![](img/2020-01-02-21-50-49.png)
- so we installed 
- `parcel index.html ` agian
![](img/2020-01-02-21-51-53.png)
- now there is no error
---

## Using Type Definition files
- if we `command+click` `faker`
![](img/2020-01-02-21-54-56.png)
