import { JSXGraph } from "jsxgraph";
import JSXBoard from "./90_graph";
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

    // let logicJS = (brd) => {
    //     var A = brd.create('point', [0,0],{name:"", fixed:true,size: 0 }),
    //     B = brd.create('point',  [w,0],{name:"", fixed:true,size: 0 }),
    //     C = brd.create('point', [w,h],{name:"", fixed:true,size: 0 }),
    //     D = brd.create('point',  [0,h],{name:"", fixed:true,size: 0 }),
    //     Z = brd.create('point',  [0,0],{name:"0", fixed:true,size: 5}),
    //     rect = brd.create('polygon',[A,B,C,D],{hasInnerPoints:false, strokeWidth: 0, fillColor: "blue", fillOpacity: 1});
    // }
    
    
    return (  
        <>
        {/* <JXGBoard2
          logic={logicJS}
          boardAttributes={{ 
            axis: true, 
            boundingbox: [-100, +h+100, +w+100, -100],
            fixed: true,
        }}
        /> */}

        <JSXBoard />
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