import faker from 'faker';

class User{
    mame: string;

    location:{
        lat: number; //latitude纬度
        lng: number; //longitude经度
    };

    constructor(){
        this.name = faker.name.findName();
    }
}