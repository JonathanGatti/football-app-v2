import { makeStyles } from '@material-ui/core/styles';
import background from '../imgs/3dsection.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:  'rgba(19,14,58,1.0)',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  title: {
    color: 'white',
    textTransform: 'uppercase'
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  playerContainer : {
    display : 'flex',
    justifyContent: 'center',
    maxHeight: '200px',
    maxWidth: '200px',
    marginTop: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    backgroundColor: 'transparent',
  },
}));

export  {useStyles};