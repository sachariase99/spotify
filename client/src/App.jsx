import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { StartSession, Signup, About, BackButton, ForwardButton, Pause, Microphone } from './components'

function App() {

    return (
      <>
        <Router>
          <StartSession />
          <Signup />
          <About />
          <BackButton />
          <ForwardButton />
          <Pause />
          <Microphone />
        </Router>
      </>
    )
  }

export default App
