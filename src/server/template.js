import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../app/Routes';
const template = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <Routes />
            </StaticRouter>
        </Provider>
    );
    return `<!DOCTYPE html>
            <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Tokopedia</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="/vendors-main.css">
            <link rel="stylesheet" href="/main.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                window.__PRELOADED_STATE__= ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
                </script>
                <script type="text/javascript" src="/vendors-main.js"></script>
                <script type="text/javascript" src="/main.js"></script>
            </body>
    </html>`;
};
export default template;