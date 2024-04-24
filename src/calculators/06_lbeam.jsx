// import React, {useState, useEffect} from 'react';
import JXGBoard2 from 'jsxgraph-react-js'
function CalcLBeam (props) {
    let A2, A3, y2, y3, x2, x3, ym, xm, area, I2x, I2y, I3x, I3y, momentofInartiaX, momentofInartiaY, d2x, d2y, d3x, d3y, ix, iy, welxt, welyt, welxb, welyb;
    let h = props.h0;
    let tw = props.tw0;
    let wfb = props.wfb0;
    let tfb = props.tfb0;
    let hw = h - tfb;

    // Lets calculate centroid of section 

    // Segment 2
    A2 = hw * tw;
    y2 = hw / 2 + tfb;
    x2 = tw / 2;
    I2x = hw * Math.pow(tw , 3) / 12
    I2y = tw * Math.pow(hw , 3) / 12

    // Segment 3 
    A3 = wfb * tfb;
    y3 = tfb / 2;
    x3 = wfb / 2
    I3x = tfb * Math.pow(wfb , 3) / 12
    I3y = wfb * Math.pow(tfb , 3) / 12

    // Area 
    area = A2 + A3;

    // Centroid
    ym = (A2 * y2 + A3 * y3) / (A2 + A3)
    xm = (A2 * x2 + A3 * x3) / (A2 + A3)

    // Distance to centroid

    // S2
    d2y = hw / 2 + tfb - ym;
    d2x = tw / 2 - xm;
    // S3
    d3y = tfb / 2 - ym;
    d3x = wfb / 2 - xm;

    // Moment of Inertia
    momentofInartiaY = I2y + I3y + A2 * Math.pow(d2y , 2) + A3 * Math.pow(d3y , 2); 
    momentofInartiaX = I2x + I3x + A2 * Math.pow(d2x , 2) + A3 * Math.pow(d3x , 2); 
    momentofInartiaY = momentofInartiaY.toExponential();
    momentofInartiaX = momentofInartiaX.toExponential();

    // Radii of gyrationl; 
    ix = Math.sqrt(momentofInartiaX / area);
    iy = Math.sqrt(momentofInartiaY / area);

    // Section Modulus 
     // Bottom 
    welxb = momentofInartiaX / xm;
    welyb = momentofInartiaY / ym; 
     // Top
    welxt = momentofInartiaX / (wfb - xm);
    welyt = momentofInartiaY / (h - ym);

    // Logs
    console.log("A2 = ", A2, "y2 = ", y2,"x2 = ", x2, "I2x= ", I2x, "I2y = ", I2y, "d2y = ", d2y, "d2x = ", d2x);
    console.log("A3 = ", A3, "y3 = ", y3,"x3 = ", x3, "I3x= ", I3x, "I3y = ", I3y, "d3y = ", d3y, "d3x = ", d3x);
    console.log("Area = ", area, "ym = ", ym,"xm = ", xm);
    console.log("Iyy = ", momentofInartiaY, "Ixx = ", momentofInartiaX);
    console.log("ix = ", ix, "iyy =", iy);
    console.log("Wel,xb = ", welxb, "Wel,yb =", welyb);
    console.log("Wel,xt = ", welxt, "Wel,yt =", welyt);

    let coordinates = [
        0, 0,
        0, h,
        tw, h,
        tw, tfb,
        wfb, tfb,
        wfb, 0,
    ]

    let logicJS = (brd) => {
        var A = brd.create('point', [coordinates[0], coordinates[1]],{name:"", fixed:true,size: 0 }),
            B = brd.create('point', [coordinates[2], coordinates[3]],{name:"", fixed:true,size: 0 }),
            C = brd.create('point', [coordinates[4], coordinates[5]],{name:"", fixed:true,size: 0 }),
            D = brd.create('point', [coordinates[6], coordinates[7]],{name:"", fixed:true,size: 0 }),
            E = brd.create('point', [coordinates[8], coordinates[9]],{name:"", fixed:true,size: 0 }),
            F = brd.create('point', [coordinates[10], coordinates[11]],{name:"", fixed:true,size: 0 }),
            Z = brd.create('point',  [0,0],{name:"0", fixed:true,size: 5}),
            T = brd.create('polygon', [A, B, C, D, E, F],{hasInnerPoints:false, strokeWidth: 0, fillColor: "blue", fillOpacity: 1});    
    }

    return (
        <>
        <JXGBoard2
            logic={logicJS}
            boardAttributes={{ 
            axis: true, 
            boundingbox: [-100, +h+100, +h+100, -100],
            fixed: true,
            }}
        />
        <p>L-Beam Calculation</p>
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

export default CalcLBeam;