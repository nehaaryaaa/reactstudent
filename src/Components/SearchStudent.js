import { makeStyles, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
      marginLeft: 500,
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
function SearchStudent(){
    const classes = useStyles();
    let studAr = useSelector((store)=>store.StudReducer);
    
    let {id}=useParams();
    let sid=parseInt(id);

    return(
        <>
            <Typography variant="h4" className={classes.typo}>STUDENT DETAIL</Typography>
            <TableContainer component={Paper} style={{width:'800px', margin:'25px 300px'}}>
                <Table sx={{ minWidth :700 }} aria-label="customized table">
                    <TableHead >
                        <TableRow>
                            <TableCell className={classes.thead}>STUDENT ID</TableCell>
                            <TableCell className={classes.thead}>STUDENT NAME</TableCell>
                            <TableCell className={classes.thead}>STUDENT DEPARTMENT</TableCell>
                            <TableCell className={classes.thead}>YEAR</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        studAr.map((student)=>{
                            return (student.studId===sid                        
                                    ?   <StyledTableRow key={student.studId}>
                                            <TableCell className={classes.tbody}>{student.studId}</TableCell>
                                            <TableCell className={classes.tbody}>{student.studName}</TableCell>
                                            <TableCell className={classes.tbody}>{student.studDepartment}</TableCell>
                                            <TableCell className={classes.tbody}>{student.studYear}</TableCell>
                                        </StyledTableRow>
                                    :   <></> );
                            }
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default SearchStudent;