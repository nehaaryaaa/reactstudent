import { AppBar, IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import { SearchSharp} from "@material-ui/icons";
import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    typo: {
      marginLeft: 300,
      margin: 20,
      fontWeight : 'bold'
    },
    link: {
        backgroundColor: 'darkblue',  padding: '20px',
    },
    searchbar: {
        marginLeft: '450px',
        borderRadius: '50px',
        height: '50px',
        textAlign:'center'
    }
  });

let NavBar=()=>{
    const [sid,setSid]=useState(0);
    const setDetails=(e)=>{
        setSid(e.target.value);
    }
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Typography variant="h3" className={classes.typo}>STUDENT CRUD OPERATIONS</Typography>
            <Toolbar>
                
                    <List component="nav">
                        <ListItem component="div">
                            <ListItemText inset>
                                <Typography className={classes.link} variant="button">
                                    <NavLink to="/students/showall" style={{ textDecoration: "none",color:'lightblue'}}>SHOW STUDENTS</NavLink>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography className={classes.link} variant="button">
                                    <NavLink to="/students/add" style={{ textDecoration: "none", color:'lightblue'}}>ADD STUDENT</NavLink>
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Paper className={classes.searchbar} component="form" >
                        <InputBase  type="text" name="sid"  onChange={setDetails} sx={{ m1 : 1, flex : 1 }} placeholder=" Search Student By Id" inputProps={{ 'aria-label' : 'search student by id'}} />
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