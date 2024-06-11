import { JSXGraph } from "jsxgraph";
import { useEffect } from 'react'
function CalcRect(props) {
    let area, momentofInartiaX, momentofInartiaY, ix, iy, welxt, welyt, welxb, welyb;
    let h = props.h0;
    let w = props.w0;
    area = h * w ;
    momentofInartiaX = (Math.pow(w, 3) * h ) / 12;
    momentofInartiaY = (w * Math.pow(h, 3) ) / 12;

    // Radii of gyration
    ix = Math.sqrt(momentofInartiaX / area);
    iy = Math.sqrt(momentofInartiaY / area);

    // Section Modulus 
    welxb = welxt = momentofInartiaX / (w/2);
    welyb = welyt = momentofInartiaY / (h/2); 

    const BOARDID = 'board-0';
 
    // input data from LMS
    useEffect(() => {
    let input = [
        0,0,  // point A(x, y)
        w,0,  // point B(x, y)
        w,h,  // point C(x, y)
        0,h,  // point D(x, y)
    ];
    
    // JSXGraph board
    const board = JXG.JSXGraph.initBoard(BOARDID, {
        boundingbox: [-50, w + 100, h + 100, -50],
        axis: true,
        resize:{enabled: false},
        pan: {enabled: true, needTwoFingers: true,},
        browserPan: true,
        zoom: {enabled: true}
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
    let D = board.create('point', [input[6], input[7]], {
        name: '',
        snapToGrid: true,
        fixed: true,
        size: 0
    });
    let ABCD = board.create('polygon', [A, B, C,D], {
        borders: {
            label: { offset: [-10, 10] },
            withLabel: true,
          }
    });
    // Overwrite the labels of the borders:
    for (let i = 0; i < ABCD.borders.length; i++) {
        ABCD.borders[i].label.setText( () => ABCD.borders[i].L().toFixed(0) );
    }
}, []); 


    
    const boardstyle = {
        width: w + 100 + "px",
        height: h + 100 + "px"
    }
    return (  
        <>
         <div id="board-0-wrapper" className="jxgbox-wrapper">
            <div id="board-0" className="jxgbox" data-ar="1 / 1" style={boardstyle}></div>
        </div>
        <br />
        <p>Regtangular Calculation V2 </p>
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

export default CalcRect;