import './App.css'
import { Form } from './components/Form'

function App() {
  const attributes = ['task', 'devs'];

  return (
    <>
      <Form attributes={attributes} />
    </>
  )
}

export default App
