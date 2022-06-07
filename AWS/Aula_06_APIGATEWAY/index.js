const httpProxy = require('express-http-proxy')
const express = require('express')
const app = express();

const BASE_URL_DB = 'http://localhost:3000/posts';

const selectProxyHost = (req) => {
    if(req.path.startsWith('/posts')){
        return BASE_URL_DB;
    }
}

app.use((req, res, next) => httpProxy(selectProxyHost(req)) (req, res, next))

app.listen(8080, () => {
    console.log('Gateway está rodando');
})