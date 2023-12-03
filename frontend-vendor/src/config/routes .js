const routes = {
    Dashboard: '/admin',
    Login: '/alogin',
    AddProduct:'/admin/products/create',
    ListProduct:'/admin/products',
    AddCatrgory:'/admin/categories/create',
    EditCatrgory: '/admin/categories/edit/:categoryId',
    ListCategory:'/admin/categories',
    AddCustomer:'/admin/customer/create',
    EditCustomer:'/admin/customers/edit/:customerId',
    ListCustomer:'/admin/customers',
    AddSupplier:'/admin/supplier/create',
    ListSupplier:'/admin/suppliers',
    EditSupplier:'/admin/customer/edit/:supplierId',
    TagPost :'/admin/post',
    ListOrder:'/order/list',
    Forbidden:'/403',

};
export default routes;