// import React, {useState, useEffect} from 'react';
import JXGBoard2 from 'jsxgraph-react-js'
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

    let logicJS = (brd) => {
        // Create a circle providing two points
        var A = brd.create('point', [D/2,D/2],{name:"", fixed:true,size: 0 }),
        B = brd.create('point',  [D/2,0],{name:"", fixed:true,size: 0}),
        C = brd.create('point',  [0,0],{name:"0", fixed:true,size: 5}),
        circle = brd.create('circle',[A,B],{hasInnerPoints:false, strokeWidth: 0, fillColor: "blue", fillOpacity: 1});
    }

    return (
        <>        
        <JXGBoard2
            logic={logicJS}
            boardAttributes={{ 
            axis: true, 
            boundingbox: [-100, +D+100, +D+100, -100],
            fixed: true,
            }}
        />

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