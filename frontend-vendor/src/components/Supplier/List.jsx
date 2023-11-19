// TableListProduct.js

import React, { useState } from 'react';
import '../Table/TableList.css';
import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import PaginationRounded from '../Pagination/PaginationRounded';
import Logo from '../../assets/images/Logo/LogoUser.png';

const TableListSupplier = () => {
    // Giả sử danh sách sản phẩm của bạn là một mảng các đối tượng
    const [products, setProducts] = useState([
        { id: 1, name: 'Táo Nhập Khẩu Của Đà Nẵng', price: 20.99 },
        { id: 2, name: 'Prodfrgtthfhtrhrtuct 2', price: 30.99 },
        { id: 3, name: 'Product 3', price: 15.99 },
        // Thêm các sản phẩm khác nếu cần
    ]);

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
                                    <font style={{ verticalAlign: "inherit" }}>Tên Nhà SX</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Quốc gia</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Email</font>
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
                        <tr key={product.id}>
                            <td className="td-table-cell">
                                <div className="inline-flex ps-3 5">
                                    <input type="checkbox" name="" id="" className="bg-transparent check-input" />
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={Logo}
                                        alt="Tasty Metal Shirt"
                                        title="Tasty Metal Shirt"
                                        loading="lazy"
                                        width={48}
                                        height={48}
                                        className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg"
                                        style={{ width: 48, height: 48, backgroundColor: "rgb(255, 71, 148)" }}
                                    />
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">SKU-52442</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">Mỹ</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">Bản nháp</p>
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
                    <select class="form-select" aria-label="Default select example">
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

export default TableListSupplier;
