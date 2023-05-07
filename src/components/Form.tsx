import { ChangeEvent, useState } from "react";
import { FormInput } from "./FormInput";
import { FormList } from ".";
import { FormValue } from "../models/form";
import { deleteFormValue, formatFormValue, searchFormValue } from '../adapters/form-adapter'

interface Props {
  attributes: string[];
}

export const Form = ({ attributes }: Props) => {
  const initialFormValues = attributes.reduce((acc, current) => ({ ...acc, [current]: {} }), {}) as FormValue;
  const [formValue, setFormValue] = useState(initialFormValues);
  const [valueList, setValueList] = useState({} as FormValue);

  const handleClick = () => {
    const formattedValue = formatFormValue(valueList, formValue);
    setValueList(formattedValue);
  }

  const deleteClick = () => {
    const formattedValue = deleteFormValue(valueList, { id: 'task1', value: 'task1' });
    setValueList(formattedValue);
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = searchFormValue(valueList, e.target.value);
    setValueList(formattedValue);
  }

  return (
    <>
      {Object.keys(formValue).map(key => <FormInput key={key} setFormValue={setFormValue} attributeKey={key} />)}
      <FormList valueList={valueList} />
      <button onClick={handleClick}>addMe</button>
      <button onClick={deleteClick}>deleteMe</button>
      <p>Search</p>
      <input onChange={handleSearch} />
    </>
  )
}
