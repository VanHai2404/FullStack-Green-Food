// DashboardPage.js

import React, { useEffect } from 'react';
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
            <h4 className="card-title mb-4">Sales Analytics</h4>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card bg-primary">
          <div
            className="card-body"
            style={{ backgroundColor: "rgb(100, 102, 250)" }}
          >
            <div className="row align-items-center">
              <div className="col-sm-8">
                <p className="text-white font-size-18">
                  {" "}
                  Enhance your <b>Campaign</b>
                  for better outreach{" "}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="btn btn-success waves-effect waves-light"
                  >
                    Upgrade Account!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Top Selling Products</h4>
            <div className="row align-items-center no-gutters mt-3">
              <div className="col-sm-3">
                <p className="text-truncate mt-1 mb-0">Desktops </p>
              </div>
              <div className="col-sm-9">
                <div className="progress mt-1" style={{ height: 6 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={52}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "52%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center no-gutters mt-3">
              <div className="col-sm-3">
                <p className="text-truncate mt-1 mb-0">iPhones </p>
              </div>
              <div className="col-sm-9">
                <div className="progress mt-1" style={{ height: 6 }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center no-gutters mt-3">
              <div className="col-sm-3">
                <p className="text-truncate mt-1 mb-0">Android </p>
              </div>
              <div className="col-sm-9">
                <div className="progress mt-1" style={{ height: 6 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow={48}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "48%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center no-gutters mt-3">
              <div className="col-sm-3">
                <p className="text-truncate mt-1 mb-0">Tablets </p>
              </div>
              <div className="col-sm-9">
                <div className="progress mt-1" style={{ height: 6 }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow={78}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center no-gutters mt-3">
              <div className="col-sm-3">
                <p className="text-truncate mt-1 mb-0">Cables </p>
              </div>
              <div className="col-sm-9">
                <div className="progress mt-1" style={{ height: 6 }}>
                  <div
                    className="progress-bar bg-purple"
                    role="progressbar"
                    aria-valuenow={63}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "63%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Top Users</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DashboardPage;
