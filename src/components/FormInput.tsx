import { ChangeEvent, useState } from "react";
import { FormTask } from "../models/form";

interface Props {
  attributeKey: string;
  setFormValue: Function;
}

export const FormInput = ({ attributeKey, setFormValue }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(e.target.value)
    if (!value) setError('valor invalido')
    else setError('');
  }

  const handleClick = () => {
    setFormValue((previousFormValue: FormTask) => ({ ...previousFormValue, [attributeKey]: { id: inputValue, value: inputValue } }));
  }
  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      {error && <p>{error}</p>}
      {inputValue && <p>{inputValue}</p>}
      <button disabled={!!error} onClick={handleClick}>Send</button>
    </>
  )
}
