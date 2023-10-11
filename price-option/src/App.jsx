import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/NavBar/Navbar'
import Prices from './Components/Prices/Prices'


function App() {

  return (
    <> 
      <Navbar></Navbar>
      <h1 className='text-7xl bg-red-500 text-center'>Vite + React</h1>
      <Prices/>
      <LineChart></LineChart>
     
    </>
  )
}

export default App
