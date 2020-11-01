import React from 'react';

function useSnackBar(initialVal){
  const [open, setOpen] = React.useState(initialVal);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return [open, handleClick, handleClose]
}

export default useSnackBar
