import {useState} from 'react';

function useSearchPlayerForm(initialVal){
  const [val, setVal] = useState('')
  const handleChange = (e) => {
    setVal(e.target.value)
  }
  const reset = () => {
    setVal('')
  }
  return [val, handleChange, reset];
}

export default useSearchPlayerForm;