import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
const AddSupplierForm = () => {



    const [selectedImages, setSelectedImages] = useState([]);



    const handleFileChange = (event) => {
        const files = event.target.files;
        const selectedImagesArray = Array.from(files);

        // Add newly selected images to the existing array
        setSelectedImages((prevImages) => [...prevImages, ...selectedImagesArray]);
    };

    const handleImageDelete = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };


    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    const hasSelectedImages = selectedImages.length > 0;

    return (
        <form action="">
            <div className="row">
                {/* Nội dung grid */}
                <div className="col-span-full col-sm-4">
                    <h4 className="text-base font-medium">Bản tóm tắt</h4>
                    <p className="mt-2">
                        Chỉnh sửa mô tả Nhà cung cấp của bạn và thông tin cần thiết từ đây
                    </p>
                </div>
                <div className="col-sm-8">

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Tên sản xuất</span>
                                <input type="text" id="form6Example1" className="form-control form-add" placeholder="Tên sản xuất" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Quốc gia</span>
                                <input type="text" id="form6Example2" className="form-control form-add" placeholder="Quốc gia" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Email</span>
                                <input type="text" id="form6Example1" className="form-control form-add" placeholder="Nhập email công việc" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Địa Chỉ</span>
                                <input type="text" id="form6Example2" className="form-control form-add" placeholder="Nhập Địa Chỉ nhà sản xuất" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="boder-top"></div>
                <div className="col-span-full col-sm-4" style={{ paddingTop: '10px' }}>
                    <h4 className="text-base font-medium">Tải lên hình ảnh sản phẩm mới</h4>
                    <p className="mt-2">
                        Tải lên thư viện hình ảnh sản phẩm của bạn tại đây
                    </p>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                        {hasSelectedImages ? (
                            // Nếu đã chọn ảnh, hiển thị phần này
                            <div className="rounded-md border">
                                <div className="flex cursor-pointer items-center px-6  transition-all duration-300 justify-center">
                                    <div className="sticky bottom-0 left-0 right-0 -mb-8 flex items-center justify-end gap-4 border-t bg-white">
                                        <button
                                            className="rizzui-button inline-flex font-medium items-center justify-center  duration-200 px-4 py-2 text-sm  rounded-md bg-transparent "
                                            type="">
                                            <font >
                                                <font >Clear files</font>
                                            </font>
                                        </button>
                                        <input
                                            className="rizzui-button inline-flex font-medium items-center justify-center  duration-200 px-4 py-2 text-sm  rounded-md border border-transparent"
                                            type="file"
                                            accept="application/pdf,image/*,video/*"
                                            multiple
                                            tabIndex={-1}
                                            onChange={handleFileChange} >
                                        </input>
                                    </div>
                                </div>
                                <div className="row" style={{ display: "flex" }}>
                                    {selectedImages.map((image, index) => (
                                        <div key={index} className="col-ms-3 col-image" style={{ position: "relative" }}>
                                            <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover", }} />
                                            <button onClick={() => handleImageDelete(index)}
                                                style={{ position: "absolute", top: "5px", right: "5px", background: "transparent", border: "none" }}> Xóa
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-md border" onClick={handleUploadClick} >
                                <div className="flex cursor-pointer items-center gap-4 px-6 py-5 transition-all duration-300 justify-center">
                                    <input
                                        ref={fileInputRef}
                                        accept="application/pdf,image/*,video/*"
                                        tabIndex={-1}
                                        type="file"
                                        multiple
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />

                                    <FaCloudUploadAlt style={{ fontSize: "30px" }} />

                                    <div className="text-base font-medium">
                                        <font style={{ verticalAlign: "inherit" }}>

                                            <font style={{ verticalAlign: "inherit" }}>Thả hoặc chọn tập tin</font>
                                        </font>
                                    </div>
                                </div>


                            </div>


                        )}
                    </div>

                </div>

            </div>
            <div className="row mt-4" >
                <div className="boder-top"></div>
                <div className="col-span-full col-sm-4" style={{ paddingTop: '10px' }}>
                    <h4 className="text-base font-medium">Mô Tả </h4>
                    <p className="mt-2">
                        Điền đầy đủ thông tin bên dưới
                    </p>
                </div>
                <div className="col-sm-8">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <span className='form-label'>Mô tả Nhà Cung Cấp</span>
                                <textarea className="form-control" id="metadescription" rows="4" placeholder="Nhập mô tả Meta của bạn" ></textarea>
                            </div>
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
                    type="submit">
                    <font >
                        <font >Tạo sản phẩm</font>
                    </font>
                </button>
            </div>

        </form>

    );
};

export default AddSupplierForm;
