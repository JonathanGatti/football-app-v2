import { makeStyles } from '@material-ui/core/styles';
import background from '../imgs/3dsection.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(19,14,58,1.0)',
  },
  selectContainer:{
    color: 'white',
    display: 'flex',
    alignSelf: 'flex-start',
    fontSize: '24px'
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '0.5rem',
    width: '90%',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export  {useStyles};