import Student from "./domain/student.js";
const hashtag = "#";
const subjectsStudent1 = [
    {
        name: "français",
        grade: 16,
    },
    {
        name: "anglais",
        grade: 7,
    },
    {
        name: "humour",
        grade: 14,
    },
];
const subjectsStudent2 = [
    {
        name: "français",
        grade: 15,
    },
    {
        name: "anglais",
        grade: 6,
    },
    {
        name: "humour",
        grade: 16,
    },
    {
        name: "informatique",
        grade: 4,
    },
    {
        name: "sport",
        grade: 10,
    },
];
const student1 = new Student("José", "Garcia", subjectsStudent1);
const student2 = new Student("Antoine", "De Caunes", subjectsStudent2);
const students = [];
students.push(student1, student2);
// display
function displayStartOrEnd(label) {
    console.log(`${hashtag.repeat(10)} ${label} student ${hashtag.repeat(10)}`);
}
function displaySubjects(subjects) {
    for (const subject of subjects) {
        console.log(`${subject.name}: ${subject.grade}/20`);
    }
}
function displaysubjectsAverage(student) {
    console.log(`The average is ${student.getSubjectsAverage.toFixed(2)}`);
}
function displayStudents(students) {
    for (const student of students) {
        displayStartOrEnd("Start");
        console.log(student.getFullName);
        displaySubjects(student.getSubjects);
        displaysubjectsAverage(student);
        displayStartOrEnd("End");
    }
}
displayStudents(students);
