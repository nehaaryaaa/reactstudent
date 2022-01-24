import { Student } from './Student';

export class StudentOperations{

    studArray=new Set();
    constructor(){
        this.studArray.add(new Student(101,'Neha','CS','SE'))
        this.studArray.add(new Student(102,'Arya','IT','TE'));
    }

    addStudent(stud){     // stud :new data
        console.log("Student Added")
        let newStud=new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studYear);
        this.studArray.add(newStud);
        return [...this.studArray];
    }
    updateStudent(student){
        let newStud=new Student(parseInt(student.studId),student.studName,student.studDepartment,student.studYear);
        this.searchStudent(newStud.studId);
        this.deleteStudent(newStud.studId);
        this.studArray.add(newStud);
        return [...this.studArray];
        
    }
    searchStudent(sId){
        return [...this.studArray].find((student)=>student.studId===sId);
    }
    deleteStudent(sId){
        let student = this.searchStudent(sId);
        this.studArray.delete(student);
        return [...this.studArray];
    }
}