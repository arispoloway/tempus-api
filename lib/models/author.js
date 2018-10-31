

class AuthorList {
    constructor(json) {
        this.authors = json.map((x) => new Author(x));
    }
}

class Author {
    constructor(json) {
        this.map_id = json.map_id;
        this.name = json.name;
        this.id = json.id;
    }
}

module.exports = {
    Author,
    AuthorList
}