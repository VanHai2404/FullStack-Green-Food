import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CKEditorComponent from '../CKEditor/CKEditor';
import { addCategory } from '../../redux/actions/category-action'; 
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormCategory = () => {
    const dispatch = useDispatch();
    const [categoryDto, setCategoryDto] = useState({
        name: "",
        slug: "",
        description: "",

    });

    const {
        name,
        slug,
        description,
      } = categoryDto;

      const handleChange = (e) => {
        if (e.target && e.target.name !== undefined && e.target.value !== undefined) {
          setCategoryDto({
            ...categoryDto,
            [e.target.name]: e.target.value,
          });
        } else {
          // Handle CKEditor change
          setCategoryDto({
            ...categoryDto,
            description: e.target.value,
          });
        }
      };
      
    const handleSaveCategory = async (e) => {
        e.preventDefault();
        dispatch(addCategory(categoryDto));
         // Reset form after successful submission
     setCategoryDto({
        name: "",
        slug: "",
        description: "",
      });

      
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
                                <input type="text" name="name" className="form-control form-add" placeholder="Tiêu đề danh mục" value={name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Slug</span>
                                <input type="text" name="slug" className="form-control form-add" placeholder="Slug danh mục" value={slug} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="form-outline mb-4">
                            <span className='form-label'>Mô tả Danh mục</span>
                            <CKEditorComponent name="description" value={description} onChange={handleChange} />
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
                    type="submit" onClick={handleSaveCategory}
                >
                    <font >
                        <font >Tạo Danh Mục</font>
                    </font>
                </button>
            </div>

        </form>
    );
};

export default FormCategory;
