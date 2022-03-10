import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './Header'
import Landing from './Landing'
import { useAppDispatch } from '../app/hooks'
import { getUserAsync } from '../features/auth/authSlice'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

function App() {
  const dispatch = useAppDispatch()

  // fetch the user
  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch])

  return (
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
  )
}

export default App
