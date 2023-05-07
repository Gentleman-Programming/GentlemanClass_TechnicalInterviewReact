export interface FormTask {
  id: string,
  value: string
}
export interface FormValue {
  [key: string]: FormTask[]
}
