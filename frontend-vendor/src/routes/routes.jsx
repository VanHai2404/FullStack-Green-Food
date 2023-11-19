import config from '../config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import DashboardPage from '../pages/Vendor/DashboardPage/DashboardPage';
import AddProducts from '../pages/Vendor/ProductPage/AddProducts';
import ListProducts from '../pages/Vendor/ProductPage/Listproducts';
import AddCategory from '../pages/Vendor/CategoryPage/AddCategory';
import ListCategory from '../pages/Vendor/CategoryPage/ListCategory';
import AddCustomer from '../pages/Vendor/CustomerPage/AddCustomer';
import ListCustomer from '../pages/Vendor/CustomerPage/ListCustomer';
import Login from '../pages/Vendor/LoginPage/LoginPage';
import EditCategory from '../pages/Vendor/CategoryPage/EditCategory';
import AddSupplier from '../pages/Vendor/SupplierPage/AddSupplier';
import ListSupplier from '../pages/Vendor/SupplierPage/ListSupplier';


// Public routes
const publicRoutes = [
    { path: config.routes.Login, component: Login, layout: null },
    { path: config.routes.Dashboard, component: DashboardPage },
    { path: config.routes.AddProduct, component: AddProducts },
    { path: config.routes.ListProduct, component: ListProducts },
    { path: config.routes.AddCatrgory, component: AddCategory },
    { path: config.routes.EditCatrgory, component: EditCategory },
    { path: config.routes.ListCategory, component: ListCategory },
    { path: config.routes.AddCustomer, component: AddCustomer },
    { path: config.routes.ListCustomer, component: ListCustomer },

    { path: config.routes.AddSupplier, component: AddSupplier },
    { path: config.routes.ListSupplier, component: ListSupplier },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };