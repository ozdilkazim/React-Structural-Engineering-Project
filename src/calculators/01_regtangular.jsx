function CalcRect(props) {
    
    let area;
    let momentofInartiaX;
    let momentofInartiaY;
    let ix;
    let iy;
    let welxt;
    let welyt;
    let welxb;
    let welyb;
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

export default CalcRect;