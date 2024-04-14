import { useState } from 'react'
import CalcRect from "./calculators/01_regtangular";
import CalcTube from "./calculators/02_tube";
import CalcCircular from "./calculators/03_circular";
import CalcPipe from "./calculators/04_pipe";
import CalcIbeam from "./calculators/05_ibeam";
import CalcLbeam from "./calculators/06_lbeam";
import CalcCbeam from "./calculators/07_cbeam";
function App() {

  return (
    <>
      <h1>Regtangular Calculator</h1>
      <div className="card">
        <CalcRect h0={100} w0={100}/>
      </div>
      <h1>Tube Calculator</h1>
      <div className="card">
        <CalcTube h0={100} w0={100} t0={5}/>
      </div>
      <h1>Circular Calculator</h1>
      <div className="card">
        <CalcCircular d0={100} />
      </div>
    </>
  )
}

export default App
