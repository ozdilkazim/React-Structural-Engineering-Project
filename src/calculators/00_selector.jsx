import { useState } from 'react'
import CalcRect from "./01_regtangular";
import CalcTube from "./02_tube";
import CalcCircular from "./03_circular";
import CalcPipe from "./04_pipe";
import CalcIBeam from "./05_ibeam";
import CalcLBeam from "./06_lbeam";
import CalcCBeam from "./07_cbeam";
import CalcTBeam from "./08_tbeam";
import 'bootstrap/dist/css/bootstrap.min.css';


function Selector() {
    
    const getInitialState = () => {
        const value = "Open this select menu";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return ( 
    <>
        <div>
            <select value={value} onChange={handleChange}>
                <option defaultValue="select-option">Select option</option>
                <option value="CalcRect">Regtangular</option>
                <option value="CalcTube">Tube</option>
                <option value="CalcCircular">Circular</option>
                <option value="CalcPipe">Pipe</option>
                <option value="CalcIBeam">I-Beam</option>
                <option value="CalcLBeam">L-Beam</option>
                <option value="CalcCBeam">C-Beam</option>
                <option value="CalcTBeam">T-Beam</option>
            </select>

            {(() => {
                switch(value) {
                    case "select-option" : return "";
                    case "CalcRect" : return <CalcRect h0={150} w0={100}/>;
                    case "CalcTube" : return <CalcTube h0={150} w0={100} t0={3}/>;
                    case "CalcCircular" : return <CalcCircular d0={100} />;
                    case "CalcPipe" : return <CalcPipe d0={100} t0={5} />;
                    case "CalcIBeam" : return <CalcIBeam h0={300} tw0={25} wfb0={350} tfb0={15} wft0={250} tft0={20}/>;
                    case "CalcLBeam" : return <CalcLBeam h0={150} tw0={20} wfb0={200} tfb0={25}/>;
                    case "CalcCBeam" : return <CalcCBeam />;
                    case "CalcTBeam" : return <CalcTBeam h0={150} tw0={10} wft0={150} tft0={15}/>;
                }
            })()}

        </div>
   
      {/* <h1>Regtangular Calculator</h1>
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
        <CalcLBeam  h0={150} tw0={20} wfb0={200} tfb0={25} />
      </div>
      <h1>T-Beam Calculator</h1>
      <div className="card">
        <CalcTBeam  h0={150} tw0={10} wft0={150} tft0={15} />
      </div> */}
    </>
  )
  
}
export default Selector