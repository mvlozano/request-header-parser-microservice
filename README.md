
# API Project: Request Header Parser Microservice for FCC
[![Run on Repl.it](https://request-header-parser-microservice.mvlozano.repl.co/)]

## About
My solution for the [Request Header Parser Microservice challenge](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice) for the freeCodeCamp API and Microservice certification. It was built based on the boilerplate available [here](https://github.com/freeCodeCamp/boilerplate-project-headerparser/).

## Technologies
- **Node.js** and **Express** to create the server and handle routes, requests and responses.

## Endpoints:

Endpoints | Description | Params
----------|-------------|-------------
GET `/api/whoami` | Returns JSON with the ip, language and software values from request | none

#### Example output:
* GET `/api/whoami` output:`{"ipaddress":"172.31.128.1","language":"es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0"}`

## How to use:
```
npm install
npm start
```
