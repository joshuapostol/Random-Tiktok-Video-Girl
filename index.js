const app = require('express')();
const port = process.env.PORT || 8080; 
const axios = require('axios');

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/random', async function (req, res) {
    const links = [
        "https://i.imgur.com/O4pN3G9.mp4",
        "https://i.imgur.com/F9OZfHQ.mp4",
        "https://i.imgur.com/u8qJJJq.mp4",
        "https://i.imgur.com/V9fA83W.mp4",
        "https://i.imgur.com/0o6VlOq.mp4",
        "https://i.imgur.com/sbKnSM6.mp4",
        "https://i.imgur.com/PTo579G.mp4",
        "https://i.imgur.com/Kjpw4go.mp4",
        "https://i.imgur.com/Q22yWMj.mp4",
        "https://i.imgur.com/cpZX0EZ.mp4",
        "https://i.imgur.com/ZyJeT0l.mp4",
        "https://i.imgur.com/Pb4YZUs.mp4",
        "https://i.imgur.com/mAyhfgz.mp4",
        "https://i.imgur.com/GDXuMba.mp4",
    ];  
    const url = links[Math.floor(Math.random() * links.length)];

    const video = (await axios.get(url, {
        responseType: "arraybuffer"
    })).data;
    res.writeHead(200, {
        'Content-Type': 'video/mp4'
    });
    res.end(video);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
