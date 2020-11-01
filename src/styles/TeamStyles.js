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
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerContainer : {
    maxHeight: '200px',
    maxWidth: 'auto',
    marginTop: '1rem',
    display : 'flex',
    justifyContent: 'center'
  },
}));

export  {useStyles};