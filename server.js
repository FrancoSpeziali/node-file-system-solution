const fs = require('fs');

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, data, 'utf8', (error) => {
            if (error) {
                reject(error);
            }

            resolve();
        })
    });
}

function appendFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, data, 'utf8', (error) => {
            if (error) {
                reject(error);
            }

            resolve();
        })
    })
}

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data) => {
            if(error) {
                reject(error);
            }

            resolve(data);
        });
    });
}

function createServer() {
    const dummyData = JSON.stringify({
        name: 'some name',
        age: 33
    });

    // log of server status
    writeFile('test.txt', dummyData)
        .then(() => {
            console.log('well done!')
            // run another function
            // or
            // send a different response (200)
        })
        .catch(((error) => {
            console.log('it failed');
            // send a different response (500)
        }));

    appendFile('test.txt', 'a random sentence')
        .then(() => {
            console.log('well done!')
        })
        .catch(() => {
            console.log('it failed');
        });

    readFile('test.txt')
        .then((data) => {
            console.log('file contents:')
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

createServer();
