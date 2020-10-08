const fs = require('fs').promises;

function createServer() {
    const dummyData = JSON.stringify({
        name: 'some name',
        age: 33
    });

    // log of server status
    fs.writeFile('test.txt', dummyData, 'utf8')
        .then(() => {
            console.log('well done!')
            // run another function
            // or
            // send a different response (200)
        })
        .catch(((error) => {
            console.log('it failed');
            console.log(error)
            // send a different response (500)
        }));

    fs.appendFile('test.txt', 'a random sentence', 'utf8')
        .then(() => {
            console.log('well done!')
        })
        .catch(() => {
            console.log('it failed');
        });

    fs.readFile('tessdsfssdft.txt', 'utf8')
        .then((data) => {
            console.log('file contents:')
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

createServer();
