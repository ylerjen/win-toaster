function helloWorld (name) {
    if (!name) {
        name = 'World';
    }
    return 'Hello ' + name;
}

module.exports = helloWorld;