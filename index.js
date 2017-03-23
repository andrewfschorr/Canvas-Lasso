const ANONYMOUS = 'Anonymous';

class CanvasLasso {
    constructor(imgOrBase64) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        this.img = new Image();
        this.img.crossOrigin = ANONYMOUS;

        if (this.isBase64String(imgOrBase64)) {

        } else {
            const p = this.loadImage(imgOrBase64);
            p.then(() => {
                c.height = this.img.height;
                c.width = this.img.width;
                ctx.drawImage(this.img, 0, 0);
                const base64Bg = c.toDataURL();
                this.img.src = base64Bg;
                console.log(c);
                return c;
            }, function(e) {
                throw new Error(e);
            });
        }
        return c;
    }

    isBase64String(str) {
        try {
            return btoa(atob(str)) === str;
        } catch (err) {
            return false;
        }
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            this.img.src = src;
            this.img.onload = resolve;
            this.img.onerror = reject;
        });
    }
}

export default CanvasLasso;
