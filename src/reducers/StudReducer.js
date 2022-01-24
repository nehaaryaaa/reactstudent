import {StudentOperations} from '../StudentData/StudentClass';
let studImpl=new StudentOperations();
export const StudReducer=(state=[...studImpl.studArray],action)=>{
        switch(action.type){
                case 'ADDSTUDENT' : {
                        state=studImpl.addStudent(action.payload);
                        return state;
                }
                case 'DELETESTUDENTS': {
                        state= studImpl.deleteStudent(action.payload);                
                        return state;
                }
                case 'UPDATESTUDENT' : {
                        state=studImpl.updateStudent(action.payload);
                        return state;
                }
                case 'SEARCHSTUDENT' : {
                        state = studImpl.searchStudent(action.payload);
                        return state;
                }
                default: return state;
        }
}