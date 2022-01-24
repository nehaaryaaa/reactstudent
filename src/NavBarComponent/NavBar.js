import { AppBar, IconButton, InputBase, List, ListItem, ListItemText, Paper, Toolbar, Typography } from "@material-ui/core";
import { SearchSharp} from "@material-ui/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

let NavBar=()=>{
    const [sid,setSid]=useState(0);
    const setDetails=(e)=>{
        setSid(e.target.value);
    }
    return (
        <AppBar position="static">
        <Typography variant="h4" color="inherit" >Student CRUD Operations</Typography>
            <Toolbar>
                
                    <List component="nav">
                        <ListItem component="div">
                            <ListItemText inset>
                                <Typography variant="button">
                                    <NavLink to="/students/showall" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '15px'}}>SHOW STUDENTS</NavLink>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography variant="button">
                                    <NavLink to="/students/add" style={{ textDecoration: "none", backgroundColor: "darkblue", color:'lightblue', padding: '15px'}}>ADD STUDENT</NavLink>
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Paper component="form" style={{alignSelf:'revert'}}>
                        <InputBase className="input" type="text" name="sid"  onChange={setDetails} sx={{ m1 : 1, flex : 1 }} placeholder="Search Student By Id" inputProps={{ 'aria-label' : 'search student by id'}} />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <NavLink to={`/students/search/${sid}`} style={{ textDecoration: "none" }}>
                            <SearchSharp />
                            </NavLink>
                        </IconButton>
                    </Paper>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;