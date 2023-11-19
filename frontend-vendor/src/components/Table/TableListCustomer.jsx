// TableListCustomer.js

import React, { useState } from 'react';
import './TableList.css';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import PaginationRounded from '../Pagination/PaginationRounded';
import Logo from '../../assets/images/Logo/LogoUser.png';

const TableListCustomer = () => {
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
                    <tr style={{width:"100%"}}>
                        <th className='rc-table-cell' scope="col">
                            <div className="ps-3.5">
                                <input type="checkbox" name="" id="" className="bg-transparent check-input" />

                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>	HÌNH ẢNH</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>TÊN KHÁCH HÀNG</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>SỰ MIÊU TẢ</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>GIỚI TINH</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>EMAIL</font>
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
                                <p className="text-sm"> Rau sạch với giá siêu ứu đại 2000$</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">rau-moi-nhap</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">200</p>
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
                    <select className="form-select" defaultValue="Hàng trên mỗi trang">
                        <option value="1">Hàng trên mỗi trang</option>
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

export default TableListCustomer;
