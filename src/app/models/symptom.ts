export class Symptom {
    symptom_id: number;
    name:string;

    constructor(symptom_id?:number, name?:string) {
        this.symptom_id = symptom_id;
        this.name = name;
    }

}