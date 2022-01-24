import Typography from '@material-ui/core/Typography';
 
function Footer() {
 
  return (
    <footer style={{ backgroundColor: 'black', height:'70px', color:'white', width: '100%', textAlign:'center', position: 'revert', left: '0px', marginBottom:'0px', marginTop:'200px'}}>
 
        <Typography >
          React Student CRUD Operations
        </Typography>
        <Typography component="p">
          @2022 All right reserved
        </Typography>

    </footer>
  );
}
 export default Footer;