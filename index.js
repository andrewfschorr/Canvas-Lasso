const ANONYMOUS = 'Anonymous';

class CanvasLasso {
    constructor(imgSrc) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.crossOrigin = ANONYMOUS;
        return new Promise((resolve) => {
            img.onload = (e) => {
                this.width = e.target.width;
                this.height = e.target.height;
                c.width = this.width;
                c.height = this.height;
                ctx.drawImage(e.target, 0, 0, this.width, this.height);
                const base64Str = c.toDataURL();
                resolve(this.makeCanvas(base64Str));
            };
            img.src = imgSrc;
        });
    }

    makeCanvas(base64Str) {
        const c = document.createElement('canvas');
        c.width = this.width;
        c.height = this.height;
        const ctx = c.getContext('2d');
        const img = new Image();
        img.crossOrigin = ANONYMOUS;
        return new Promise((resolve) => {
            img.onload = () => {
                ctx.drawImage(img, 0, 0, this.width, this.height);
                resolve(c);
                console.log(this);
            };
            img.src = base64Str;
        });
    }
}

export default CanvasLasso;

