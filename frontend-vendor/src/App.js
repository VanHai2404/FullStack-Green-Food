import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes/routes.jsx';
import DefaultLayout from './layouts/Vendor/DefaultLayout/DefaultLayout'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute.js';

import AuthService from './services/AuthService.js';
import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
  // Check the authentication status using your logic
  // For example, you can check if the user is logged in by examining the token in localStorage
  return localStorage.getItem('account') !== null;
};

const hasPermission = () => {
  // Check the user's roles or permissions using your logic
  const currentUser = AuthService.getCurrentUser();
  if (!currentUser || !currentUser.accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(currentUser.accessToken);
  if (!decodedToken || !(decodedToken.roles.includes('ROLE_STAFF') || decodedToken.roles.includes('ROLE_ADMIN'))) {
    return false;
  }

  return true;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = React.Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {/* Private routes */}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout; // You may customize the layout for private routes

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isAuthenticated() && hasPermission() ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/alogin" />
                  )
                }
              />
            );
          })}
           {/* Redirect to admin if authenticated */}
           <Route
            path="/"
            element={
              isAuthenticated() && hasPermission() ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/alogin" />
              )
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
