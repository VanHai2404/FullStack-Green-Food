import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes.jsx';
import DefaultLayout from './layouts/Vendor/DefaultLayout/DefaultLayout'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute.js';
import DashboardPage from './pages/Vendor/DashboardPage/DashboardPage.jsx';



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
                Layout = Fragment;
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
            <Route path="/admin/*" element={<PrivateRoute element={<DefaultLayout><DashboardPage /></DefaultLayout>} />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    );
        };

export default App;