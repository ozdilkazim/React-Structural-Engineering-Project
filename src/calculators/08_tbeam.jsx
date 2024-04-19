// import React, {useState, useEffect} from 'react';
function CalcTBeam (props) {
    let A1, A2, y1, y2, x1, x2, ym, xm, area, I1x, I1y, I2x, I2y, momentofInartiaX, momentofInartiaY, d1x, d1y, d2x, d2y, ix, iy, welxt, welyt, welxb, welyb;
    let h = props.h0;
    let tw = props.tw0;
    let wft = props.wft0;
    let tft = props.tft0;
    let hw = h - tft;

    // Lets calculate centroid of section 

    // Segment 1 
    A1 = wft * tft;
    y1 = h - tft/2;
    x1 = wft / 2;
    I1x = tft * Math.pow(wft , 3) / 12
    I1y = wft * Math.pow(tft , 3) / 12

    // Segment 2
    A2 = hw * tw;
    y2 = hw / 2;
    x2 = wft / 2;
    I2x = hw * Math.pow(tw , 3) / 12
    I2y = tw * Math.pow(hw , 3) / 12

    // Area 
    area = A1 + A2;

    // Centroid
    ym = (A1 * y1 + A2 * y2) / (A1 + A2)
    xm = (A1 * x1 + A2 * x2) / (A1 + A2)

    // Distance to centroid

    // S1
    d1y = Math.abs((h - tft / 2) - ym);
    d1x = Math.abs(wft / 2 - xm);
    // S2
    d2y = Math.abs((hw / 2) - ym);
    d2x = Math.abs(wft / 2 - xm);

    // Moment of Inertia
    momentofInartiaY = I1y + I2y + A1 * Math.pow(d1y , 2) + A2 * Math.pow(d2y , 2); 
    momentofInartiaX = I1x + I2x + A1 * Math.pow(d1x , 2) + A2 * Math.pow(d2x , 2); 
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
    welxt = momentofInartiaX / (wft- xm);
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

    return (
        <>
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

export default CalcTBeam;