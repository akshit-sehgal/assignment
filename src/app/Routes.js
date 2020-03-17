import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./flow/homepage";
import ProductDetailsPage from "./flow/productdetailspage";
import { fetchProductDetailsSSR } from "./flow/productdetailspage";
import { fetchProductsSSR } from "./flow/homepage";
import { ROUTE_NAMES } from "./RouteConstants";

export const routes = [
    {
        path: `${ROUTE_NAMES.PRODUCT_DETAILS_PAGE}/:id`,
        component: ProductDetailsPage,
        loadData: fetchProductDetailsSSR

    },
    {
        path: ROUTE_NAMES.HOME_PAGE,
        component: HomePage,
        loadData: fetchProductsSSR
    }
];
const Routes = () => {
    return (
        <div className="main">
            <Switch>
                {routes.map((route) => (<Route key={route.path} {...route} exact />))}
            </Switch>
        </div>
    );
};
export default Routes;