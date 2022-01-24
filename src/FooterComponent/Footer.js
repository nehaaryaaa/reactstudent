import { Typography } from '@material-ui/core';

export function Footer(){
    
    return(
        <footer style={{backgroundColor: 'black', color: 'whitesmoke',textAlign: 'center',position: 'relative',
            fontSize: '14px', padding: '5px', width: '99%', height: '40px', marginTop: '392px',left: 0,bottom: 0}}>
            <Typography>@Copyright 2022 Student CRUD Operations</Typography>
        </footer>
    );
}