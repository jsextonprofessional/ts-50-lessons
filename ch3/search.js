function search(query, tags) {
    var queryString = "?query=".concat(query);
    if (tags && tags.length) {
        queryString += "&tags=".concat(tags.join());
    }
    return fetch("/search".concat(queryString))
        .then(function (response) { return response.json(); });
}
