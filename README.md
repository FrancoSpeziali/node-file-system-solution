# Node.js working with the node.js filesystem

This project will show you how to use the Node.js filesystem

## What you will be doing

This project test your knowledge on:

- the filesystem (fs) in Node.js

This project assumes you've already had experience with:

- JavaScript

## Assignments

For this assignment, you are expected to write your code in the file `server.js`

## Assignment 1 - Importing the 'fs' module

For this assignment, we will be using the Node.js module, `fs`. Look over your notes regarding the Node.js file system.

Before you can use the `fs` module, we should import it:

```js
const fs = require('fs');
```

## Assignment 2 - Writing data

```
fs.writeFile(filename, data, callback);
```
Research: [fs.writeFile()](https://www.geeksforgeeks.org/node-js-fs-writefile-method/?ref=lbp)

1. Create a function which will write data to the server

    - The function should use the `fs.writeFile()` function
    
    - The function should take 2 arguments, `filename` and `data`
    
    - Use the callback argument to return a `Promise`
    
    - The `Promise` should only resolve if there is no error. If there is an error, you should `reject()` with the error

2. Test your function by trying to write some data

## Assignment 3 - Appending data

```
fs.appendFile(filename, data, callback);
```
Research: [fs.appendFile()](https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_appendfile_path_data_options_callback)

1. Create a function which will append data to a file on the server

    - The function should use the `fs.appendFile()` function
    
    - The function should take 2 arguments, `filename` and `data`
    
    - Use the callback argument to return a `Promise`
    
    - The `Promise` should only resolve if there is no error. If there is an error, you should `reject()` with the error
    
2. Test your function by trying to write some data


## Assignment 4 - Reading data

```
fs.readFile(filename, callback);
```
Research: [fs.appendFile()](https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_appendfile_path_data_options_callback)

1. Create a function which will read data from a file on the server

    - The function should use the `fs.readFile()` function
    
    - The function should take 1 arguments, `filename`
    
    - Use the callback argument to return a `Promise`
    
    - The `Promise` should only resolve if there is no error. If there is an error, you should `reject()` with the error
    
    - If there is no error, the `Promise` should resolve with the data from the file
    
2. Test your function by trying to read some data
