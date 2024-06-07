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


    //     var A = brd.create('point', [0,0],{name:"", fixed:true,size: 0 }),
    //     B = brd.create('point',  [w,0],{name:"", fixed:true,size: 0 }),
    //     C = brd.create('point', [w,h],{name:"", fixed:true,size: 0 }),
    //     D = brd.create('point',  [0,h],{name:"", fixed:true,size: 0 }),
    //     Z = brd.create('point',  [0,0],{name:"0", fixed:true,size: 5}),
    //     rect = brd.create('polygon',[A,B,C,D],{hasInnerPoints:false, strokeWidth: 0, fillColor: "blue", fillOpacity: 1});
    const BOARDID = 'board-0';
 
    // input data from LMS
    useEffect(() => {
    let input = [
        0,0,   // point A(x, y)
        w,0,  // point B(x, y)
        w,h,  // point C(x, y)
        0,h,  // point D(x, y)
    ];
    
    // JSXGraph board
    
    const board = JXG.JSXGraph.initBoard(BOARDID, {
        boundingbox: [0, 500, 500, 0],
        axis: true,
        showCopyright:true,
        showNavigation:true,
        resize:{enabled: false}
    });

    let A = board.create('point', [input[0], input[1]], {
        name: '\\(A\\)',
        snapToGrid: true,
        label: {offset: [-25, -10], fontSize: 16}
    });
    let B = board.create('point', [input[2], input[3]], {
        name: '\\(B\\)',
        snapToGrid: true,
        label: {offset: [10, -5], fontSize: 16}
    });
    let C = board.create('point', [input[4], input[5]], {
        name: '\\(C\\)',
        snapToGrid: true,
        label: {offset: [0, 15], fontSize: 16}
    });
    let D = board.create('point', [input[6], input[7]], {
        name: '\\(C\\)',
        snapToGrid: true,
        label: {offset: [0, 15], fontSize: 16}
    });
    let ABCD = board.create('polygon', [A, B, C,D], {
        borders: {strokeWidth: 2}
    });
}, []);
    
    return (  
        <>
         <div id="board-0-wrapper" className="jxgbox-wrapper">
            <div id="board-0" className="jxgbox" data-ar="1 / 1" width="500px" height="500px"></div>
        </div>
        <p>Regtangular Calculation</p>
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