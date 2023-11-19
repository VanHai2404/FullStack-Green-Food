import React, { useState,useEffect  } from 'react';
import CKEditorComponent from '../CKEditor/CKEditor';
import CategoryService from '../../services/CategoryService';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
const FormEdit = () => {
    let navigate = useNavigate();


    const { categoryId } = useParams();

    const [category, setCategory] = useState({
        name: "",
        slug: "",
        description: "",
        
    });
    const {
        name,
        slug,
        description,
    } = category;


    const handleInputChange = (e) => {
        if (e.target && e.target.name !== undefined && e.target.value !== undefined) {
            setCategory({
                ...category,
                [e.target.name]: e.target.value,
            });
        } else {
            // Handle CKEditor change
            setCategory({
                ...category,
                description: e,
            });
        }
    };
    // lòad dữ liệu vào form 
    useEffect(() => {
        loadUser();
      }, []);


      
    

    const handleUpadteCategory = async (e) => {
        e.preventDefault();
        try {
            console.log("Mô Tả", category.categoryId);
             await CategoryService.update(category);
            toast.success('Chỉnh sửa Danh Muc Thanh Công', { position: toast.POSITION.TOP_RIGHT });
            navigate(config.routes.ListCategory);
            console.log("Chỉnh Sửa Danh Muc Thanh Công")

        } catch (error) {
            toast.error('Xảy ra lỗi khi Chỉnh sửa Danh Muc', { position: toast.POSITION.TOP_RIGHT });
            console.error('Error saving category:', error);
        }
    };


    const loadUser = async () => {
        const result =await CategoryService.get(categoryId)
        setCategory(result.data);
      };
    
    

    return (
        <form action="">
            <div className="row">
                {/* Nội dung grid */}
                <div className="col-span-full col-sm-4">
                    <h4 className="text-base font-medium">Thêm danh mục mới:</h4>
                    <p className="mt-2">
                        Chỉnh sửa thông tin danh mục của bạn từ đây
                    </p>
                </div>
                <div className="col-sm-8">

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Tiêu đề</span>
                                <input type="text" name="name" className="form-control form-add" placeholder="Tiêu đề danh mục" value={name} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Slug</span>
                                <input type="text" name="slug" className="form-control form-add" placeholder="Slug danh mục" value={slug} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="form-outline mb-4">
                            <span className='form-label'>Mô tả Danh mục</span>
                                <CKEditorComponent  name="description" value={description} onChange={handleInputChange} />

                        </div>


                    </div>
                </div>
            </div>
            {/* button */}
            <div className="sticky bottom-0 left-0 right-0 -mb-8 flex items-center justify-end gap-4 border-t bg-white px-4 py-4">
                <button
                    className="rizzui-button inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 w-full @xl:w-auto"
                    type="button"

                >
                    <font >
                        <font >Lưu dưới dạng bản nháp</font>
                    </font>
                </button>
                <button
                    className="rizzui-button inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                    type="submit" onClick={handleUpadteCategory}
                >
                    <font >
                        <font >Lưu Chỉnh Sửa</font>
                    </font>
                </button>
            </div>

        </form>
    );
};

export default FormEdit;
