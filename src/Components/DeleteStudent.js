import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { delStudents } from "../actions/studAction";

function DeleteStudent(){
    let {id}=useParams();
    console.log(id);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    }, [dispatch]);
    return(
        <>
            <h2>Student Deleted Successfully!!!..</h2>
            <Navigate to="/students/showall"></Navigate>
        </>
    );
}
export default DeleteStudent;