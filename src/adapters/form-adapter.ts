import { FormTask, FormValue } from "../models/form";

export const formatFormValue = (valueList: FormValue, formValue: FormValue) => {
  const formattedObject = Object.keys(formValue)
    .reduce((acc, current) => {
      console.log(current);
      const valueExists = valueList[current as keyof typeof valueList];
      return {
        ...acc,
        [current]: [...(valueExists ? valueExists : []), formValue[current as keyof typeof formValue]],
      }
    }, {})

  const formattedValue = {
    ...valueList,
    ...formattedObject
  };
  return formattedValue;
}

export const deleteFormValue = (valueList: FormValue, taskToBeDeleted: FormTask) => {
  const formattedObject = Object.keys(valueList)
    .reduce((acc, current) => {
      console.log(current);
      return {
        ...acc,
        [current]: valueList[current].filter(item => item.id !== taskToBeDeleted.id),
      }
    }, {})

  const formattedValue = {
    ...valueList,
    ...formattedObject
  };
  return formattedValue;
}

export const searchFormValue = (valueList: FormValue, taskToBeDeleted: string) => {
  const formattedObject = Object.keys(valueList)
    .reduce((acc, current) => {
      console.log(current);
      return {
        ...acc,
        [current]: valueList[current].filter(item => item.value.includes(taskToBeDeleted)),
      }
    }, {})

  const formattedValue = {
    ...valueList,
    ...formattedObject
  };
  return formattedValue;
}
