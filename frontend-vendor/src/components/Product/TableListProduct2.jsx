// TableListProduct.js

import React, { useState, useEffect } from 'react';

import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import PaginationRounded from '../Pagination/PaginationRounded';
import Logo from '../../assets/images/Logo/LogoUser.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product-action';

const TableListProduct = () => {
    const dispatch = useDispatch();
    const { products = [], loading } = useSelector((state) => state.products);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProducts());
        };
        fetchData();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <table style={{ marginBottom: "10px" }}>
                <thead className="thead-cell">
                    <tr>
                        <th className='rc-table-cell' scope="col">
                            <div className="ps-3.5">
                                <input type="checkbox" name="" id="" className="bg-transparent check-input" />

                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Sản phẩm</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Lướt Xem</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Số Lượng</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>GIÁ</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Thường Hiểu</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>XẾP HẠNG</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>TRẠNG THÁI</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center opacity-0">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>HÀNH ĐỘNG</font>
                                </font>
                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.productId}>
                            <td className="td-table-cell">
                                <div className="inline-flex ps-3 5">
                                    <input type="checkbox" name="" id="" className="bg-transparent check-input" />
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`http://localhost:8080/api/admin/customers/${product.image}`}
                                        alt={product.name}
                                        title={product.name}
                                        loading="lazy"
                                        width={48}
                                        height={48}
                                        className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg"
                                        style={{ width: 48, height: 48, backgroundColor: "rgb(255, 71, 148)" }}
                                    />
                                    <div className="grid gap-0.5">
                                        <p className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
                                            {product.name}
                                        </p>
                                        <p className="text-[13px] text-gray-500"> {product.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">{product.viewCount
                                    !== null ? product.viewCount : "0"}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm"> {product.quantity}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm"> {product.salePrice}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm"> {product.supplier.nation}</p>
                            </td>
                            <td className="td-table-cell">
                                <div className="flex items-center">
                                    <span className="me-1 shrink-0">0</span>
                                    <AiOutlineStar style={{ color: "gold" }} />
                                    <AiOutlineStar style={{ color: "gold" }} />
                                    <AiOutlineStar style={{ color: "gold" }} />
                                    <AiOutlineStar style={{ color: "gold" }} />
                                    <AiOutlineStar style={{ color: "gold" }} />

                                    <span className="ms-1 shrink-0">(0)</span>
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm"> {product.status}</p>
                            </td>
                            <td className="td-table-cell">
                                <div className="flex items-center">
                                    <a href="#" style={{ paddingLeft: "10px" }}>
                                        <button className="borderBTN inline-flex h-7 w-7 items-center"> <MdEdit /> </button>
                                    </a>
                                    <a href="#" style={{ paddingLeft: "10px" }}>
                                        <button className="borderBTN inline-flex h-7 w-7 items-center"> <GrView /> </button>
                                    </a>
                                    <a href="#" style={{ paddingLeft: "10px" }}>
                                        <button className="borderBTN inline-flex h-7 w-7 items-center"> <AiFillDelete /> </button>
                                    </a>
                                </div>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-pagination flex items-center ustify-center justify-between mt-5 xs:mt-6 sm:mt-7">
                <div className="hidden items-center sm:flex">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Hàng trên mỗi trang</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>
                <div >
                    <PaginationRounded />
                </div>

            </div>

        </div>
    );
};

export default TableListProduct;
