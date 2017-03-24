const ANONYMOUS = 'Anonymous';

class CanvasLasso {
    constructor(imgSrc) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.crossOrigin = ANONYMOUS;
        return new Promise((resolve) => {
            img.onload = (e) => {
                console.log(e.target.src);
                this.imageWidth = e.target.width;
                this.imageHeight = e.target.height;

                console.log(this.imageWidth);
                console.log(this.imageHeight);

                ctx.drawImage(e.target, 0, 0);
                const base64Str = c.toDataURL();
                resolve(this.makeCanvas(base64Str));
            };
            img.src = imgSrc;
        });
    }

    makeCanvas(base64Str) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.crossOrigin = ANONYMOUS;
        return new Promise((resolve) => {
            console.log(this.imageWidth);
            console.log(this.imageHeight);
            c.width = this.imageWidth;
            c.height = this.imageHeight;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, this.imageWidth, this.imageHeight);
                resolve(c);
            };
            img.src = base64Str;
        });
    }
}

export default CanvasLasso;


// console.log(cWidth, cHeight);
// var newWindow = window.open();
// var c = document.createElement('canvas');
// c.id = 'mycanvas';
// c.width = cWidth;
// c.height = cHeight;
// var ctx = c.getContext('2d');
// var image = new Image();
// image.onload = function() {
//     ctx.drawImage(image, 0, 0, cWidth, cHeight);
// };
// image.src = base64Img;
// newWindow.document.body.appendChild(c);
