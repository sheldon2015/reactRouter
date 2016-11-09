var express = require('express')
var path = require('path')

import router from './src/router.jsx';

const compression = require('compression')


import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';


var app = express()
// must be first!
app.use(compression())


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'prod/dist')))



app.get('*', (req, res) => {
    // match the routes to the url
    match({ routes: router, location: req.url }, (err, redirect, props) => {
        if (err) {
            // there was an error somewhere during route matching
            res.status(500).send(err.message)
        } else if (redirect) {
            // we haven't talked about `onEnter` hooks on routes, but before a
            // route is entered, it can redirect. Here we handle on the server.
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // if we got props then we matched a route and can render
            const appHtml = renderToString(<RouterContext {...props} />)
            res.send(renderPage(appHtml))
        } else {
            // no errors, no redirect, we just didn't match anything
            res.status(404).send('Not Found')
        }
    })



})

function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <body>
       <div id=root>${appHtml}</div>
       <script src="/bundle.js"></script>
    </body>`

}

var PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})

















