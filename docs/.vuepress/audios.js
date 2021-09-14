const { readdirSync } = require("fs")
const { join, basename } = require("path")
const unplugged = join(__dirname, 'public', '2016unplugged')
const files = readdirSync(unplugged)

const audio = {
    name: '장가갈 수 있을까',
    artist: '咖啡少年',
    url: '/bgm/1.mp3',
    cover: '/images/cover.jpg'
}

const getUrl = file => join(unplugged, file)

exports.audios = files.map(item => {
    const desc = basename(item, '.flac')
    const arr = desc.split('-')

    audio.name = arr[1].trim()
    audio.artist = arr[0].trim()
    audio.url = getUrl(item)

    return Object.assign({}, audio)
})