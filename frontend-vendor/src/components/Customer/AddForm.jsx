import React from 'react';

const AddCustomerForm = () => {


    return (
        <>
            {/* Multi Columns Form */}
            <form className="row g-3 needs-validation" noValidate="">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Tên đăng nhập
                            </label>
                            <input
                                type="email"
                                className="form-control form-add form-add"
                                id="inputEmail5"
                                required=""
                            />
                        </div>
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Họ và tên
                            </label>
                            <input
                                type="email"
                                className="form-control form-add"
                                id="inputEmail5"
                                required=""
                            />
                            <div className="invalid-feedback">Name Not Null</div>
                        </div>
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control form-add"
                                id="inputEmail5"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="pr">
                            <img
                                src="/img/product/SANPHAM2.jpeg"
                                alt=""
                                height="250px"
                                width="200px"
                            />
                        </div>
                        <label htmlFor="inputEmail5" className="form-label">
                            lmage File
                        </label>{" "}
                        <br />
                        <input type="file" required="" />
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control form-add form-add"
                        id="inputEmail5"
                        required=""
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                        Nhập lại Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control form-add form-add"
                        id="inputEmail5"
                        required=""
                    />
                </div>
                <div className="col-12 " style={{display:"flex"}}>
                    <div className="form-check form-check-inline" style={{paddingRight:"40px"}}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                        Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline" style={{paddingRight:"40px"}}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                        Female
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                        Different
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-floating mb-3">
                  
                        <textarea
                            className="form-control form-add"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            style={{ height: 100 }}
                            required=""
                            defaultValue={""}
                        />
                        <label htmlFor="floatingTextarea">Nhập mô Tả</label>
                    </div>
                </div>

                {/* End Multi Columns Form */}



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

            </form >
        </>

    );
};

export default AddCustomerForm;
