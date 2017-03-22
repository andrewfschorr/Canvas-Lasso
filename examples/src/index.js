// import CanvasLasso from 'index';
// const CanvasLasso = require('../../index');

function prepend(elToInsert, parentEl) {
    if (!parentEl.firstChild) { // don matter
        parentEl.appendChild(elToInsert);
    } else {
        parentEl.insertBefore(elToInsert, parentEl.firstChild);
    }
    return elToInsert;
}

// prepend(new CanvasLasso(), document.body);
console.log('yolo!poop');

