export class Question {
    symptom_id:number;
    symptom_def:string;
    name:string
    synonyms:string[]

    constructor(symptom_id?:number, symptom_def?:string, name?:string, synonyms?:string[]) {
        this.symptom_id = symptom_id;
        this.symptom_def = symptom_def;
        this.name = name;
        this.synonyms = synonyms;
    }

}