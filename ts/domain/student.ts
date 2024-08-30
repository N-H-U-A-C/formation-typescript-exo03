import Subject from "./subjects.js";

export default class Student {
    private firstName: string;
    private lastName: string;
    private subjects: Subject[];

    public constructor(firstName: string, lastName: string, subjects: Subject[]) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.subjects = subjects
    }

    public get getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }

    
    public get getSubjects() : Subject[] {
        return this.subjects;
    }
    
    
    public get getSubjectsAverage() : number {
        return this.subjects.reduce((sum, element: Subject) => sum + element.grade, 0) / this.subjects.length;
    }
}