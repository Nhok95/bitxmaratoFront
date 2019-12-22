export class Persona {
    name: string;
    location: string;
    is_active: boolean;
    count: number;
    
    constructor(name?:string, location?:string, is_active?:boolean, count?:number) {
        this.name = name;
        this.location = location;
        this.is_active = is_active;
        this.count = count;
    }

}