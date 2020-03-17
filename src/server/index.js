import express from 'express';
import { matchPath } from "react-router-dom";
import createStore from './createStore';
import template from './template';
import { routes } from '../app/Routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get(['/','/pdp/:id'], (req, res) => {
    const store = createStore();

    const promises = [];

    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match && route.loadData) {
            promises.push(route.loadData(store, match));
        }
        return match;
    });
    Promise.all(promises).then((_resp) => {
        const context = {};
        const content = template(req, store, context);
        if (context.url) {
            res.status(404);
        }
        res.send(content);
    });

});

app.listen(port, () => {
    console.log(`\nListening on port: ${port}\nOpen your broswer at http://localhost:${3000}/`);
});