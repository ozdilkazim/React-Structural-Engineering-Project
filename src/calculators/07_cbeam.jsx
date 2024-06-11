// import React, {useState, useEffect} from 'react';
import { JSXGraph } from "jsxgraph";
import { useEffect } from 'react'
function CalcCBeam (props) {
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
    x1 = wft / 2;
    I1x = tft * Math.pow(wft , 3) / 12
    I1y = wft * Math.pow(tft , 3) / 12

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
    area = A1 + A2 + A3;

    // Centroid
    ym = (A1 * y1 + A2 * y2 + A3 * y3) / (A1 + A2 + A3)
    xm = (A1 * x1 + A2 * x2 + A3 * x3) / (A1 + A2 + A3)

    // Distance to centroid

    // S1
    d1y = y1 - ym;
    d1x = x1 - xm;
    // S2
    d2y = y2 - ym;
    d2x = x2 - xm;
    // S3
    d3y = y3 - ym;
    d3x = x3 - xm;

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
    
    const BOARDID = 'board-0';
 
    // input data from LMS
    useEffect(() => {
        let input = [
            0, 0,               // point A(x, y)
            0, h,               // point B(x, y)
            wft, h,             // point C(x, y)
            wft, h-tft,         // point E(x, y)
            tw, h-tft,          // point F(x, y)
            tw, tfb,            // point G(x, y)
            wfb, tfb,           // point H(x, y)
            wfb, 0,             // point J(x, y)
        ];    
        
        if (wft > wfb) {
            const plus = (wft - wfb) / 2;
            for (let i= 0; i <input.length; i+=2) {
                input[i] =  input[i] + plus
            }
        } 
        
        // JSXGraph board
        const board = JXG.JSXGraph.initBoard(BOARDID, {
            boundingbox: [-50, wfb + 150, h + 150, -50],
            axis: true,
            resize:{enabled: false},
            pan: {enabled: true, needTwoFingers: true,},
            browserPan: true,
            zoom: {enabled: true}
        });

        let A = board.create('point', [input[0], input[1]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let B = board.create('point', [input[2], input[3]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let C = board.create('point', [input[4], input[5]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let E = board.create('point', [input[6], input[7]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let F = board.create('point', [input[8], input[9]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let G = board.create('point', [input[10], input[11]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let H = board.create('point', [input[12], input[13]], {name: '',snapToGrid:true,fixed: true,size: 0});
        let J = board.create('point', [input[14], input[15]], {name: '',snapToGrid:true,fixed: true,size: 0});
        
        let cBeam = board.create('polygon', [A, B, C,E, F, G, H, J], {
            borders: {
                label: { offset: [-10, 10] },
                withLabel: true,
            }
        });
        // Overwrite the labels of the borders:
        for (let i = 0; i < cBeam.borders.length; i++) {
            cBeam.borders[i].label.setText( () => cBeam.borders[i].L().toFixed(0) );
        }
    }, []); 

    const boardstyle = {
        width: wfb + 100 + "px",
        height: h + 100 + "px"
    }

    return (
        <>
        <div id="board-0-wrapper" className="jxgbox-wrapper">
            <div id="board-0" className="jxgbox" data-ar="1 / 1" style={boardstyle}></div>
        </div>
        <br />
        <p>I-Beam Calculation</p>
        <p>Area = {area}</p>
        <p>Centoid  = ym:{ym}, x:{xm}</p>
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

export default CalcCBeam;