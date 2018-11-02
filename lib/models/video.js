

class Video {
    constructor(url, c) {
        this.url = url;
        this.c = c;
    }

    getRealUrl() {
        return "https://youtube.com/watch?v=" + this.url;
    }
}

module.exports = {
    Video
}