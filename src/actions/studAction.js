

export const addStudent=(student)=>{
    return {
        type: 'ADDSTUDENT',
        payload:student
    }
}
export const delStudents=(stId)=>{
    return {
        type: 'DELETESTUDENTS',
        payload: stId
    }
}
export const updateStudent=(student)=>{
    return {
        type: 'UPDATESTUDENT',
        payload: student
    }
}