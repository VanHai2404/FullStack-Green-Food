import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { jwtDecode } from 'jwt-decode';


const PrivateRoute = ({ element }) => {
  const CurrentUser = AuthService.getCurrentUser();

  if (!CurrentUser || !CurrentUser.accessToken) {
    return <Navigate to="/alogin" />;
  }

  const decodedToken = jwtDecode(CurrentUser.accessToken);
  if (!decodedToken || !(decodedToken.roles.includes('ROLE_STAFF') || decodedToken.roles.includes('ROLE_ADMIN'))) {
    return <Navigate to="/403" />;
  }

  return (
    <Routes>
      {/* Define all admin routes here */}
      <Route path="/" element={element} />
    </Routes>
  );
};

export default PrivateRoute;
