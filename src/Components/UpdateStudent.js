import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent  } from "../actions/studAction";
import { Navigate, useParams } from "react-router-dom";
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
    const classes = useStyles();
    
    return(
        <div>
        <Typography variant="h4" className={classes.typo}>UPDATE STUDENT DETAILS</Typography>
        {   
            flag===false?
            <form onSubmit={test} style={{borderRadius:'30px', border:'3px solid darkblue', margin:'20px 300px',padding:'20px',backgroundColor:'#7B68EE'}}>
            <div>
                <Typography>Student Id</Typography>
                <TextField className={classes.field} fullWidth id="outlined-basic"  variant="outlined" type="number" name="studId" value={student.studId} />
            </div>
            <div>
                <Typography>Student Name</Typography>
                <TextField className={classes.field} fullWidth id="outlined-basic" variant="outlined" type="text" name="studName" value={student.studName} onChange={setDetails} />
            </div>
            <div>
                <Typography>Student Department</Typography>
                <TextField className={classes.field} fullWidth id="outlined-basic" variant="outlined" type="text" name="studDepartment" value={student.studDepartment} onChange={setDetails} />
            </div>
            <div>
                <Typography>Year</Typography>
                <TextField className={classes.field} fullWidth id="outlined-basic" variant="outlined" type="text" name="studYear" value={student.studYear} onChange={setDetails} />
            </div>
            <div style={{marginLeft:'280px'}}>
                <input type="submit" value="UPDATE" style={{ textDecoration: "none", backgroundColor: "#0000CD", color:'lightblue', padding: '10px', width:'100px', margin:'30px'}} />
            </div>
            </form>
            : <Navigate to="/students/showall"></Navigate>   
        }
        </div>
    );
}
export default UpdateStudent;