import React, {createContext, useState} from 'react';

export const FormContext = createContext();

export function FormContextProvider(props){
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [dialog, setDialog] = useState(false)

  const toggleForm = () => {
    setIsFormShowing(!isFormShowing)
  }
  const handleClickOpen = () => {
    setDialog(true);
    setIsFormShowing(!isFormShowing)
  };
  const handleClickClose = () => {
    setDialog(false)
    setIsFormShowing(!isFormShowing)
  }

  return (
    <FormContext.Provider value={{isFormShowing, toggleForm, handleClickOpen, handleClickClose}}>
      {props.children}
    </FormContext.Provider>
  )
}