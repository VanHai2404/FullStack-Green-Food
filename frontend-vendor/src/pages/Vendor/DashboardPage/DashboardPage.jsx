// DashboardPage.js

import React, { useEffect } from 'react';
import ColumnPlot from './ColumnPlot';
import PieChart from './PieChart';
import './DashboardPage.css'

const DashboardPage = () => {


  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Dashboard</h4>
          <div className="page-title-right">
            <nav aria-label="breadcrumb" className="m-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="" href="#">
                    Minible
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  <span>Dashboard</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <img src="images/h7.png" alt="" />
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                {" "}
                {" "}
                <span data-plugin="counterup">
                  <span>400.000 VND</span>
                </span>
              </h4>
              <p className="text-muted mb-0">Total Revenue</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <i className="bi bi-arrow-up" style={{ color: "#28a745" }} />
              &nbsp;<span className="text-success me-1">2.65%</span> since
              last week
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <img src="images/h6.png" alt="" />
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">
                  <span>1</span>
                </span>
              </h4>
              <p className="text-muted mb-0">Orders</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <i className="bi bi-arrow-down" style={{ color: "#dc3545" }} />
              &nbsp;
              <span className="text-danger me-1">0.82%</span> since last week
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <img src="images/h5.png" alt="" />
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">
                  <span>1</span>
                </span>
              </h4>
              <p className="text-muted mb-0">Customers</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <i className="bi bi-arrow-down" style={{ color: "#dc3545" }} />
              &nbsp;<span className="text-danger me-1">6.24%</span> since last
              week
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <img src="images/h8.png" alt="" />
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                {" "}
                 <span data-plugin="counterup">12</span>
              </h4>
              <p className="text-muted mb-0">Products</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <i className="bi bi-arrow-up" style={{ color: "#28a745" }} />
              &nbsp;<span className="text-success me-1">10.51%</span> since
              last week
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-8">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Doanh thu trong năm</h4>
            <ColumnPlot/>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Top Loại sản phẩm</h4>
            <PieChart/>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Đơn Hàng Chở Xác Nhận</h4>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DashboardPage;
