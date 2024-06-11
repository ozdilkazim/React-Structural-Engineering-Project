import { JSXGraph } from "jsxgraph";
import { useEffect } from 'react'
function CalcCircular(props) {
    let area, momentofInartiaX, momentofInartiaY, ix, iy, welxt, welyt, welxb, welyb;
    let D = props.d0;
    area = Math.PI * Math.pow(D, 2) / 4;
    momentofInartiaX = Math.PI * Math.pow(D, 4) / 64;
    momentofInartiaY = Math.PI * Math.pow(D, 4) / 64;    

    // Radii of gyration
    ix = Math.sqrt(momentofInartiaX / area);
    iy = Math.sqrt(momentofInartiaY / area);
    
    // Section Modulus 
    welxb = welxt = momentofInartiaX / (D/2);
    welyb = welyt = momentofInartiaY / (D/2); 

    const BOARDID = 'board-0';
    // input data from LMS
    useEffect(() => {
        let input = [
            D/2,D/2,  // point A(x, y)
            D/2,0,  // point B(x, y)
            0,0,  // point C(x, y)
        ];
        
        // JSXGraph board
        const board = JXG.JSXGraph.initBoard(BOARDID, {
            boundingbox: [-100, +D+100, +D+100, -100],
            axis: true,
            resize:{enabled: false},
            pan: {enabled: true, needTwoFingers: true,},
            browserPan: true,
            zoom: {enabled: true},
            fixed: true,
        });

        let A = board.create('point', [input[0], input[1]], {
            name: '',
            snapToGrid: true,
            fixed: true,
            size: 0
        });
        let B = board.create('point', [input[2], input[3]], {
            name: '',
            snapToGrid: true,
            fixed: true,
            size: 0
        });
        let C = board.create('point', [input[4], input[5]], {
            name: '',
            snapToGrid: true,
            fixed: true,
            size: 0
        });
        
        let AB = board.create('circle', [A, B], {
            borders: {
                label: { offset: [-10, 10] },
                withLabel: true,
            }
        });
        
    }, []); 


    
    const boardstyle = {
        width: D + 100 + "px",
        height: D + 100 + "px"
    }

    return (
        <>        
         <div id="board-0-wrapper" className="jxgbox-wrapper">
            <div id="board-0" className="jxgbox" data-ar="1 / 1" style={boardstyle}></div>
        </div>
        <br />
        <p>Circular Calculation</p>
        <p>Area = {area}</p>
        <p>Moment of Inertia at X Axis = {momentofInartiaX}</p>
        <p>Moment of Inertia at Y Axis = {momentofInartiaY}</p>
        <p>Radii of Gyration at X = {ix}</p>
        <p>Radii of Gyration at X = = {iy}</p>
        <p>Section Modulus X - Top = {welxt}</p>
        <p>Section Modulus X - Bottom = {welxb}</p>
        <p>Section Modulus Y - Top = {welyt}</p>
        <p>Section Modulus Y - Bottom = {welyb}</p>
        </>
    )
}

export default CalcCircular;