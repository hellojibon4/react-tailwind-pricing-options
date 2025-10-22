
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart';
import axios from 'axios';
import MarksChart from './Components/MarksChart/MarksChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const ResultsData = fetch('ResultsChart.json').then(res => res.json());
const marksPromis = axios.get('marksData.json');

function App() {



  return (

    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span>Loding Chard...</span>}>
          <MarksChart marksPromis={marksPromis}></MarksChart>
        </Suspense>

        <Suspense fallback={<span>Loading chart...</span>}>
          <ResultsChart ResultsData={ResultsData}></ResultsChart>
        </Suspense>



      </main>

    </>
  )
}

export default App
