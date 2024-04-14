import { useState } from 'react'
import CalcRect from "./calculators/01_regtangular";
import CalcTube from "./calculators/02_tube";
import CalcCircular from "./calculators/03_circular";
import CalcPipe from "./calculators/04_pipe";
import CalcIBeam from "./calculators/05_ibeam";
import CalcLBeam from "./calculators/06_lbeam";
import CalcCBeam from "./calculators/07_cbeam";
function App() {

  return (
    <>
      <h1>Regtangular Calculator</h1>
      <div className="card">
        <CalcRect h0={100} w0={100}/>
      </div>
      <h1>Tube Calculator</h1>
      <div className="card">
        <CalcTube h0={150} w0={100} t0={3}/>
      </div> */
      /* <h1>Circular Calculator</h1>
      <div className="card">
        <CalcCircular d0={100} />
      </div> */
      /* <h1>Pipe Calculator</h1>
      <div className="card">
        <CalcPipe d0={100} t0={5} />
      </div>
      <h1>I-Beam Calculator</h1>
      <div className="card">
        <CalcIBeam  h0={376} tw0={25} wfb0={150} tfb0={38} wft0={250} tft0={38} />
      </div>
      <h1>L-Beam Calculator</h1>
      <div className="card">
        <CalcLBeam  h0={376} tw0={25} wfb0={150} tfb0={38} />
      </div>
    </>
  )
}

export default App
