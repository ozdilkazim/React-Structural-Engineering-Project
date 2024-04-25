import { JSXGraph } from "jsxgraph";

function JSXBoard () { 
    const BOARDID = 'board-0';
 
    // input data from LMS
    
    let input = [
        2, 4,   // point A(x, y)
        12, 6,  // point B(x, y)
        8, 12,  // point C(x, y)
        2       // unit
    ];
    
    // JSXGraph board
    
    const board = JXG.JSXGraph.initBoard(BOARDID, {
        boundingbox: [0, 15, 15, 0],
        axis: true,
    showCopyright:true,
    showNavigation:true,
    });

    let A = board.create('point', [input[0], input[1]], {
        name: '\\(A\\)',
        snapToGrid: true,
        label: {offset: [-25, -10], fontSize: 16}
    });
    let B = board.create('point', [input[2], input[3]], {
        name: '\\(B\\)',
        snapToGrid: true,
        label: {offset: [10, -5], fontSize: 16}
    });
    let C = board.create('point', [input[4], input[5]], {
        name: '\\(C\\)',
        snapToGrid: true,
        label: {offset: [0, 15], fontSize: 16}
    });
    let ABC = board.create('polygon', [A, B, C], {
        borders: {strokeWidth: 2}
    });
    
    return (  
        <>
        </>
    )
}

export default JSXBoard;