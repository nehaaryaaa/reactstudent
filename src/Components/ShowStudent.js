import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { makeStyles, styled, Typography, } from '@material-ui/core';
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
  const useStyles = makeStyles({
    typo: {
      marginLeft: 200,
      marginTop: 25,
      fontWeight : 'bold',
      color:'#5D3FD3'
    },
    thead: {
        backgroundColor: "#181818", 
        color:'#C0C0C0',
        textAlign:'center'
    },
    tbody: {
        textAlign:'center'
    }
  });
  
export function THead(){
    const classes = useStyles();
    return(
    <TableHead style={{'backgroundColor':'grey'}}>
        <TableRow>
            <TableCell className={classes.thead}>STUDENT ID</TableCell>
            <TableCell className={classes.thead}>STUDENT NAME</TableCell>
            <TableCell className={classes.thead}>STUDENT DEPARTMENT</TableCell>
            <TableCell className={classes.thead}>YEAR</TableCell>
            <TableCell className={classes.thead}>DELETE ACTION</TableCell>
            <TableCell className={classes.thead}>UPDATE ACTION</TableCell>
        </TableRow>
    </TableHead>
    );
}
 function TBody(){
    const classes = useStyles();
    let studAr = useSelector((store)=>store.StudReducer);

    return (
        <TableBody>
           {
                studAr.map((student)=>{
                   return(
                        <StyledTableRow key={student.studId}>
                            <TableCell className={classes.tbody}>{student.studId}</TableCell>
                            <TableCell className={classes.tbody}>{student.studName}</TableCell>
                            <TableCell className={classes.tbody}>{student.studDepartment}</TableCell>
                            <TableCell className={classes.tbody}>{student.studYear}</TableCell>
                            <TableCell className={classes.tbody}>
                                <NavLink to={`/students/delete/${student.studId}`} style={{ textDecoration: "none", backgroundColor: "grey", color:'black', padding: '15px'}}>DELETE</NavLink>
                            </TableCell>
                            <TableCell className={classes.tbody}>
                                <NavLink to={`/students/update/${student.studId}`} style={{ textDecoration: "none", backgroundColor: "grey", color:'black', padding: '15px'}}>UPDATE</NavLink>
                            </TableCell>
                        </StyledTableRow>
                   );
                })
            }
        </TableBody>
    );
}

function ShowStudent(){
    const classes = useStyles();
    return(
        <div style={{width:'800px', margin:'25px 300px'}}>
           
            
            <Typography variant="h4" className={classes.typo}>STUDENT DETAILS</Typography>
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