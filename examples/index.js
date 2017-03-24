import CanvasLasso from '../index';

const imgUrl = 'https://68.media.tumblr.com/ba9e20215390de65cb58c2a96cb84c34/tumblr_og4y1hCaCc1r89gcuo1_1280.jpg';
const canvasImg = new CanvasLasso(imgUrl);

canvasImg.then(base64String => base64String).then((canvas) => {
    document.body.appendChild(canvas);
});
