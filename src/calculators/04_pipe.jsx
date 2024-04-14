// import React, {useState, useEffect} from 'react';
function CalcPipe (D, t) {
    area = PI() * (Math.pow(D , 2) - Math.pow((D - t),2)) / 4;
    momentofInartiaX = PI() * (Math.pow(D , 4) - Math.pow((D - t),4)) / 64;
    momentofInartiaY = PI() * (Math.pow(D , 4) - Math.pow((D - t),4)) / 64;

    // Radii of gyration
    ix = Math.sqrt(momentofInartiaX / area);
    iy = Math.sqrt(momentofInartiaY / area);
    
    // Section Modulus 
     welxb = welxt = momentofInartiaX / (D/2);
     welyb = welyt = momentofInartiaY / (D/2); 
}

export default CalcPipe;