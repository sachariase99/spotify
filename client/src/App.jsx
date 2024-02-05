import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Leftmenu } from './components'

function App() {

    return (
      <>
        <Router>
          <Leftmenu />
        </Router>
      </>
    )
  }

export default App
