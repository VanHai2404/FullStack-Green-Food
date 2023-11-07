import config from '../config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import Home from '../pages/Customer/HomePage/Home';
import Products_Listing from '../pages/Customer/Products-Listing/products-listing';
import Login from '../pages/Customer/LoginPage/Login';
import Register from '../pages/Customer/RegisterPage/Register';


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products_list, component: Products_Listing },
    { path: config.routes.Login,component:Login},
    { path: config.routes.Register,component:Register},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };