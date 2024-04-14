// import React, {useState, useEffect} from 'react';
function CalcLBeam (h, tw, wfb, tfb) {
    hw = h - tfb;

    // Lets calculate centroid of section 

    // Segment 2
    A2 = hw * tw;
    y2 = tfb + hw / 2;
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
    d2y = Math.abs((tfb + hw / 2) - ym);
    d2x = tw / 2 - xm;
    // S3
    d3y = Math.abs((tfb / 2) - ym);
    d3x = wfb / 2 - xm;

    // Moment of Inertia
    momentofInartiaY = I2y + I3y + A2 * Math.pow(d2y , 2) + A3 * Math.pow(d3y , 2); 
    momentofInartiaX = I2x + I3x + A2 * Math.pow(d2x , 2) + A3 * Math.pow(d3x , 2); 
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
}

export default CalcLBeam;