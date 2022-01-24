import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent  } from "../actions/studAction";
import { Navigate, useParams } from "react-router-dom";
import { TextField, Typography } from "@material-ui/core";

function UpdateStudent(){
    let studAr = useSelector((store)=>store.StudReducer);
    let {id}=useParams();
    let student2 = studAr.find((element) => {

        return element.studId === parseInt(id)

    });
    const [student, setStudent] = useState(student2);    

    let [flag, setFlag]=useState(false);
    let dispatch=useDispatch();
    

    const setDetails=(e)=>{
        setStudent({...student, [e.target.name]:e.target.value});
    }
    const test=(e)=>{
        e.preventDefault();
        dispatch(updateStudent(student));
        setFlag(true);
    }

    return(
        <div style={{'width':'500px'}}>
        {   
            flag===false?
            <form onSubmit={test}  style={{border:'2px solid darkblue', margin:'20px 300px'}}>
            <div>
                <Typography>Student Id</Typography>
                <TextField fullWidth id="outlined-basic"  variant="outlined" type="number" name="studId" value={student.studId} />
            </div>
            <div>
                <Typography>Student Name</Typography>
                <TextField fullWidth id="outlined-basic" variant="outlined" type="text" name="studName" value={student.studName} onChange={setDetails} />
            </div>
            <div>
                <Typography>Student Department</Typography>
                <TextField fullWidth id="outlined-basic" variant="outlined" type="text" name="studDepartment" value={student.studDepartment} onChange={setDetails} />
            </div>
            <div>
                <Typography>Year</Typography>
                <TextField fullWidth id="outlined-basic" variant="outlined" type="text" name="studYear" value={student.studYear} onChange={setDetails} />
            </div>
            <div style={{margin: '5px 150px'}}>
                <input type="submit" value="ADD" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '10px',margin:'10px'}} />
                <input type="reset" value="RESET" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '10px'}} />
            </div>
            </form>
            : <Navigate to="/students/showall"></Navigate>   
        }
        </div>
    );
}
export default UpdateStudent;