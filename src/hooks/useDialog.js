import {useState} from 'react';

function useDialog(){
  const [dialog, setDialog] = useState('false');
  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClickClose = () => {
    setDialog(false);
  };
  return [dialog, handleClickClose, handleClickOpen]
}

export default useDialog;