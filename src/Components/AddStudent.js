import { useState } from "react";
import { useDispatch } from "react-redux";
import {Student} from '../StudentData/Student';
import { addStudent  } from "../actions/studAction";
import { Navigate } from "react-router-dom";
import { makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    typo: {
        marginLeft: 300,
        marginTop: 25,
        fontWeight : 'bold',
        color:'#5D3FD3'
    },
    field: {
        backgroundColor:'#CCCCFF',
        border:'4px solid blueviolet',
        borderRadius:'15px'
    }   
  });
function AddStudent(){
    let [flag, setFlag]=useState(false);
    let dispatch=useDispatch();
    const [student, setStudent] = useState(new Student());

    const setDetails=(e)=>{
        setStudent({...student, [e.target.name]:e.target.value});
    }
    const test=(e)=>{
        e.preventDefault();
        dispatch(addStudent(student));
        setFlag(true);
    }
    const classes = useStyles();
    
    return(
        <div>
        <Typography variant="h4" className={classes.typo}>ADD STUDENT DETAILS</Typography>
        {flag===false ? 
            <form onSubmit={test} style={{borderRadius:'30px', border:'3px solid darkblue', margin:'20px 300px',padding:'20px',backgroundColor:'#7B68EE'}}>
            <div>
                <Typography>Student Id</Typography>
                <TextField className={classes.field} placeholder="Enter Student Id" fullWidth id="outlined-basic"  variant="outlined" type="number" name="studId" value={student.studId} onChange={setDetails}/>
            </div>
            <div>
                <Typography>Student Name</Typography>
                <TextField className={classes.field} placeholder="Enter Student Name" fullWidth id="outlined-basic" variant="outlined" type="text" name="studName" value={student.studName} onChange={setDetails} />
            </div>
            <div>
                <Typography>Student Department</Typography>
                <TextField className={classes.field} placeholder="Enter Student Department" fullWidth id="outlined-basic" variant="outlined" type="text" name="studDepartment" value={student.studDepartment} onChange={setDetails} />
            </div>
            <div>
                <Typography>Year</Typography>
                <TextField className={classes.field} placeholder="Enter Student Year" fullWidth id="outlined-basic" variant="outlined" type="text" name="studYear" value={student.studYear} onChange={setDetails} />
            </div>
            <div style={{marginLeft:'200px'}}>
                <input type="submit" value="ADD" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '10px', width:'100px', margin:'30px'}} />
                <input type="reset" value="RESET" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '10px',width:'100px'}} />
            </div>
            </form>
            : <Navigate to="/students/showall"></Navigate>
        }
        </div>
    );
}
export default AddStudent;