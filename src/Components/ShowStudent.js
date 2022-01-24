import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { styled, } from '@material-ui/core';
import  {Table}  from '@material-ui/core';
import  {TableBody}  from '@material-ui/core';
import  {TableCell} from '@material-ui/core';
import  {TableContainer} from '@material-ui/core';
import  {TableHead} from '@material-ui/core';
import  {TableRow} from '@material-ui/core';
import { Paper } from '@material-ui/core';

  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
export function THead(){
    return(
    <TableHead style={{'backgroundColor':'grey'}}>
        <TableRow>
            <TableCell>STUDENT ID</TableCell>
            <TableCell>STUDENT NAME</TableCell>
            <TableCell>STUDENT DEPARTMENT</TableCell>
            <TableCell>YEAR</TableCell>
            <TableCell>DELETE ACTION</TableCell>
            <TableCell>UPDATE ACTION</TableCell>
        </TableRow>
    </TableHead>
    );
}
 function TBody(){
    let studAr = useSelector((store)=>store.StudReducer);

    return (
        <TableBody>
           {
                studAr.map((student)=>{
                   return(
                        <StyledTableRow key={student.studId}>
                            <TableCell >{student.studId}</TableCell>
                            <TableCell >{student.studName}</TableCell>
                            <TableCell>{student.studDepartment}</TableCell>
                            <TableCell>{student.studYear}</TableCell>
                            <TableCell>
                                <NavLink to={`/students/delete/${student.studId}`} style={{ textDecoration: "none", backgroundColor: "#181818", color:'#C0C0C0', padding: '15px'}}>DELETE</NavLink>
                            </TableCell>
                            <TableCell>
                                <NavLink to={`/students/update/${student.studId}`} style={{ textDecoration: "none", backgroundColor: "#181818", color:'#C0C0C0', padding: '15px'}}>UPDATE</NavLink>
                            </TableCell>
                        </StyledTableRow>
                   );
                })
            }
        </TableBody>
    );
}

function ShowStudent(){
   
    return(
        <div style={{width:'800px', margin:'25px 300px'}}>
           
            

            <TableContainer component={Paper}>
                <Table sx={{ minWidth :700 }} aria-label="customized table">
                    <THead></THead>
                    <TBody></TBody>
                </Table>
            </TableContainer>
        </div>
    );
} 
export default ShowStudent;