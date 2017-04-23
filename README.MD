# REST API Twitter Client

Simple REST Server for building Twitter Client Apps

### Installation

Make sure you have Node Js and npm installed. [Doc](https://docs.npmjs.com/getting-started/installing-node)

do this command on project root directory

```
npm install
```

### Running tests

To run a test just type a simple command on project directory

```
npm test
```

## Deployment

To deploy a system just follow this step :

* Go to app/ directory

```
cd app/
```

* Type a command to start a server


```
node server.js
```

* If there is no error, apps ready to use and running on port 14045

## How To Use

* Install a HTTP CLIENT software such as postman to test and make a request to server

### URI Endpoint

To use and make a request, just following this step

Timeline : http://{{url}}:14045/timeline
* Method : Get
* Response : Json

Post Tweet : http://{{url}}:14045/update
* Method        : POST
* Body Type     : Application/JSON
* Body Content  : { "status" : "Tweet something" }
* Response      : Json

## Authors

* **Atmaji Haryo Wiryawan** - *Initial work* - [AtmaBoy](https://github.com/atmaboy)

My personal website [www.atmaji.id](http://www.atmaji.id/)