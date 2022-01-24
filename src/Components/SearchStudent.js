import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
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

function SearchStudent(){
    let studAr = useSelector((store)=>store.StudReducer);
    
    let {id}=useParams();
    let sid=parseInt(id);

    return(
            <TableContainer component={Paper} style={{width:'800px', margin:'25px 300px'}}>
                <Table sx={{ minWidth :700 }} aria-label="customized table">
                    <TableHead style={{'backgroundColor':'grey'}}>
                        <TableRow>
                            <TableCell>STUDENT ID</TableCell>
                            <TableCell>STUDENT NAME</TableCell>
                            <TableCell>STUDENT DEPARTMENT</TableCell>
                            <TableCell>YEAR</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        studAr.map((student)=>{
                            return (student.studId===sid                        
                                    ?   <StyledTableRow key={student.studId}>
                                            <TableCell >{student.studId}</TableCell>
                                            <TableCell >{student.studName}</TableCell>
                                            <TableCell>{student.studDepartment}</TableCell>
                                            <TableCell>{student.studYear}</TableCell>
                                        </StyledTableRow>
                                    :   <></> );
                            }
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
export default SearchStudent;