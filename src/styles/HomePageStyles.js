import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:  'rgba(19,14,58,1.0)',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize : '45px',
    marginTop: '1rem',
  },
  container: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  linkBtn: {
    color: 'white',
    margin: '2rem',
    padding: '30px 40px',
    textTransform: 'uppercase',
    backgroundColor:'rgba(45,37,83,1.0)',
    textAlign: 'center',
    '&:hover':{
      transform: 'scale(1.08) translateY(-5px)'
    },
    transition: 'all 0.2s ease-out'
  },
  deleteBtn: {
    position: 'relative',
    borderRadius: '3px',
    zIndex: 10,
    transform: 'translate(40px, -30px)',
    opacity: 0.2,
    '&:hover':{
      opacity: 1
    }
  }
}));

export  {useStyles};