// import React, {useState, useEffect} from 'react';
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

export default CalcCircular;