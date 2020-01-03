import faker from 'faker';

export class User{
    name: string;

    location:{
        lat: number; //latitude纬度
        lng: number; //longitude经度
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude());
        };
    }
}