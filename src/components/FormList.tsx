import { FormValue } from '../models/form';

interface Props {
  valueList: FormValue;
}

export const FormList = ({ valueList }: Props) => {
  return (
    <>
      {JSON.stringify(Object.keys(valueList))}
      {Object.keys(valueList).map(itemKey =>
      (<p key={itemKey}>
        <ul>
          {JSON.stringify(valueList[itemKey as keyof typeof valueList])}
        </ul>
      </p>))}
    </>
  )
}
