import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { getUserAsync } from './features/auth/authSlice'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

function App() {
  const user = useAppSelector((state) => state.auth.value)
  const dispatch = useAppDispatch()

  // fetch the user
  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
        <img src={logo} className="App-logo" alt="logo" />
        {user && <h1>hello, {JSON.stringify(user)}</h1>}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
