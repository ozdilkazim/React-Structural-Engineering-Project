// import React, {useState, useEffect} from 'react';
import JXGBoard2 from 'jsxgraph-react-js'
function CalcIBeam (props) {
    let A1, A2, A3, y1, y2, y3, x1, x2, x3, ym, xm, area, I1x, I1y, I2x, I2y, I3x, I3y, momentofInartiaX, momentofInartiaY, d1x, d1y, d2x, d2y, d3x, d3y, ix, iy, welxt, welyt, welxb, welyb;
    let h = props.h0;
    let tw = props.tw0;
    let wfb = props.wfb0;
    let tfb = props.tfb0;
    let wft = props.wft0;
    let tft = props.tft0;
    let hw = h - tfb - tft;

    // Lets calculate centroid of section 

    // Segment 1 
    A1 = wft * tft;
    y1 = h - tft/2;
    x1 = Math.max(wfb, wft) / 2;
    I1x = tft * Math.pow(wft , 3) / 12
    I1y = wft * Math.pow(tft , 3) / 12

    // Segment 2
    A2 = hw * tw;
    y2 = tfb + hw / 2;
    x2 = Math.max(wfb, wft) / 2;
    I2x = hw * Math.pow(tw , 3) / 12
    I2y = tw * Math.pow(hw , 3) / 12

    // Segment 3 
    A3 = wfb * tfb;
    y3 = tfb / 2;
    x3 = Math.max(wfb, wft) / 2
    I3x = tfb * Math.pow(wfb , 3) / 12
    I3y = wfb * Math.pow(tfb , 3) / 12

    // Area 
    area = A1 + A2 + A3;

    // Centroid
    ym = (A1 * y1 + A2 * y2 + A3 * y3) / (A1 + A2 + A3)
    xm = (A1 * x1 + A2 * x2 + A3 * x3) / (A1 + A2 + A3)

    // Distance to centroid

    // S1
    d1y = Math.abs((h - tft / 2) - ym);
    d1x = Math.abs(Math.max(wft, wfb) / 2 - xm);
    // S2
    d2y = Math.abs((tfb + hw / 2) - ym);
    d2x = Math.abs(Math.max(wft, wfb) / 2 - xm);
    // S3
    d3y = Math.abs((tfb / 2) - ym);
    d3x = Math.abs(Math.max(wft, wfb) / 2 - xm);

    // Moment of Inertia
    momentofInartiaY = I1y + I2y + I3y + A1 * Math.pow(d1y , 2) + A2 * Math.pow(d2y , 2) + A3 * Math.pow(d3y , 2); 
    momentofInartiaX = I1x + I2x + I3x + A1 * Math.pow(d1x , 2) + A2 * Math.pow(d2x , 2) + A3 * Math.pow(d3x , 2); 
    momentofInartiaY = momentofInartiaY.toExponential();
    momentofInartiaX = momentofInartiaX.toExponential();

    // Radii of gyration
    ix = Math.sqrt(momentofInartiaX / area);
    iy = Math.sqrt(momentofInartiaY / area);

    // Section Modulus 
     // Bottom 
    welxb = momentofInartiaX / xm;
    welyb = momentofInartiaY / ym; 
     // Top
    welxt = momentofInartiaX / (Math.max(wfb, wft) - xm);
    welyt = momentofInartiaY / (h - ym);

    // Logs
    // console.log("A1 = ", A1, "y1 = ", y1,"x1 = ", x1, "I1x= ", I1x, "I1y = ", I1y, "d1y = ", d1y, "d1x = ", d1x);
    // console.log("A2 = ", A2, "y2 = ", y2,"x2 = ", x2, "I2x= ", I2x, "I2y = ", I2y, "d2y = ", d2y, "d2x = ", d2x);
    // console.log("A3 = ", A3, "y3 = ", y3,"x3 = ", x3, "I3x= ", I3x, "I3y = ", I3y, "d3y = ", d3y, "d3x = ", d3x);
    // console.log("Area = ", area, "ym = ", ym,"xm = ", xm);
    // console.log("Iyy = ", momentofInartiaY, "Ixx = ", momentofInartiaX);
    // console.log("ix = ", ix, "iyy =", iy);
    // console.log("Wel,xb = ", welxb, "Wel,yb =", welyb);
    // console.log("Wel,xt = ", welxt, "Wel,yt =", welyt);
    
    let coordinates = [
        0, 0,
        0, tfb,
        wfb/2-tw/2, tfb,
        wfb/2-tw/2, tfb+hw,
        wfb/2-wft/2, tfb+hw,
        wfb/2-wft/2, h,
        wfb/2+wft/2, h,
        wfb/2+wft/2, h-tft,
        wfb/2+tw/2, h-tft,
        wfb/2+tw/2, tfb,
        wfb, tfb,
        wfb, 0,
    ]

    if (wft > wfb) {
        const plus = (wft - wfb) / 2;
        for (let i= 0; i <coordinates.length; i+=2) {
            coordinates[i] =  coordinates[i] + plus
        }
    } 

    let logicJS = (brd) => {
        var A = brd.create('point', [coordinates[0], coordinates[1]],{name:"A", fixed:true,size: 2 }),
            B = brd.create('point', [coordinates[2], coordinates[3]],{name:"B", fixed:true,size: 2 }),
            C = brd.create('point', [coordinates[4], coordinates[5]],{name:"C", fixed:true,size: 2 }),
            D = brd.create('point', [coordinates[6], coordinates[7]],{name:"D", fixed:true,size: 2 }),
            E = brd.create('point', [coordinates[8], coordinates[9]],{name:"E", fixed:true,size: 2 }),
            F = brd.create('point', [coordinates[10], coordinates[11]],{name:"F", fixed:true,size: 2 }),
            G = brd.create('point', [coordinates[12], coordinates[13]],{name:"G", fixed:true,size: 2 }),
            H = brd.create('point', [coordinates[14], coordinates[15]],{name:"H", fixed:true,size: 2 }),
            I = brd.create('point', [coordinates[16], coordinates[17]],{name:"", fixed:true,size: 2 }),
            J = brd.create('point', [coordinates[18], coordinates[19]],{name:"", fixed:true,size: 2 }),
            K = brd.create('point', [coordinates[20], coordinates[21]],{name:"", fixed:true,size: 2 }),
            L = brd.create('point', [coordinates[22], coordinates[23]],{name:"", fixed:true,size: 2 }),
            T = brd.create('polygon', [A, B, C, D, E, F, G, H, I, J, K, L],{hasInnerPoints:false, strokeWidth: 0, fillOpacity: 1});    
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
        <p>Coordinatres = {coordinates.join(", ")}</p>
        <p>I-Beam Calculation</p>
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

export default CalcIBeam;