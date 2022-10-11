const axios = require('axios');
const fs = require('fs');
const { data } = require('jquery');

let httpUrl = 'https://fm.douban.com/j/v2/songlist/6452331/?kbps=123';
async function getMusic() {
    let res = await axios.get(httpUrl);
    res.data.songs.forEach((item, i) => {
        let musicUrl = item.url;
        let title = item.title;
        let ws = fs.createWriteStream('./music/' + title + '.mp3', { flags: 'a' });
        axios.get(musicUrl, { responseType: 'stream' }).then(res => {
            // res.data 保存的是歌曲的所有信息
            // console.log(res.data);
            res.data.pipe(ws);
            console.log('歌曲下载完成:' + title);
            res.data.on('close', function () {
                ws.close();
            })
        })
    })
}

getMusic();