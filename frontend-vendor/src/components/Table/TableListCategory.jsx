// TableListCategory.js

import React, { useState, useEffect } from 'react';
import './TableList.css';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import CategoryService from '../../services/CategoryService';
import PaginationRounded from '../Pagination/PaginationRounded';
import { Link, useParams } from "react-router-dom";
import config from '../../config';
import Logo from '../../assets/images/Logo/LogoUser.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TableListCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        loadCategory();

    }, []); // Chạy chỉ một lần khi component được render

    const loadCategory = async () => {
        try {
            const response = await CategoryService.getAll();
            console.log('Danh sách các danh mục:', response.data);
            setCategories(response.data);
            // Xử lý dữ liệu tại đây
        } catch (error) {
            console.error('Lỗi khi lấy danh sách danh mục:', error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            // await CategoryService.remove(id);
            loadCategory();
            toast.success('Xóa Danh Muc Thanh Công', { position: toast.POSITION.TOP_RIGHT });

        } catch (error) {
            toast.error('Xảy ra lỗi khi Xóa Danh Muc', { position: toast.POSITION.TOP_RIGHT });
        }

    };

    return (
        <div>
            <table style={{ marginBottom: "10px" }}>
                <thead className="thead-cell">
                    <tr style={{ width: "100%" }}>
                        <th className='rc-table-cell' scope="col">
                            <div className="ps-3.5">
                                <input type="checkbox" name="" id="" className="bg-transparent check-input" />

                            </div>
                        </th>
                        {/* <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>	HÌNH ẢNH</font>
                                </font>
                            </div>
                        </th> */}
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>TÊN DANH MỤC</font>
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
                                    <font style={{ verticalAlign: "inherit" }}>Slug</font>
                                </font>
                            </div>
                        </th>
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Số Sản Phẩm</font>
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
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td className="td-table-cell">
                                <div className="inline-flex ps-3 5">
                                    <input type="checkbox" name="" id="" className="bg-transparent check-input" />
                                </div>
                            </td>
                            {/* <td className="td-table-cell">
                                <div className="flex items-center gap-3">
                                    <img
                                        src=""
                                        alt="Ảnh Category"
                                        title="Ảnh Category"
                                        loading="lazy"
                                        width={48}
                                        height={48}
                                        className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg"
                                        style={{ width: 48, height: 48, backgroundColor: "rgb(255, 71, 148)" }}
                                    />
                                </div>
                            </td> */}
                            <td className="td-table-cell">
                                <p className="text-sm">{category.name}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm"> {category.description}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">{category.slug}</p>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">null</p>
                            </td>

                            <td className="td-table-cell">
                                <div className="flex items-center">
                                    <Link to={`${config.routes.EditCatrgory.replace(':categoryId', category.categoryId)}`}>
                                        <button className="borderBTN inline-flex h-7 w-7 items-center"> <MdEdit /> </button>
                                    </Link>



                                    <a href="#" style={{ paddingLeft: "10px" }}>
                                        <button className="borderBTN inline-flex h-7 w-7 items-center"> <GrView /> </button>
                                    </a>
                                    <a href="#" style={{ paddingLeft: "10px" }} onClick={() => deleteCategory(category.categoryId)}>
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

export default TableListCategory;
