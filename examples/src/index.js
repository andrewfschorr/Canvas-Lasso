function createCanvasElement() {
    const c = document.createElement('canvas');
    // http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg
    return c;
}

function prepend(elToInsert, parentEl) {
    if (!parentEl.firstChild) { // don matter
        parentEl.appendChild(elToInsert);
    } else {
        parentEl.insertBefore(elToInsert, parentEl.firstChild);
    }
    return elToInsert;
}

prepend(createCanvasElement(), document.body);

