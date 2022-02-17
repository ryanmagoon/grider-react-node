import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  // get the current user
  useEffect(() => {}, [])

  return (
    <div>
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
    </div>
  )
}
export default connect(null, actions)(App)
