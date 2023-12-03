import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateCustomer, addImageCustomer, fetchByCustomer } from '../../redux/actions/customer-action';

const EditCustomerForm = ({ customer, loading, error, fetchByCustomer , updateCustomer,addImageCustomer}) => {
    const { customerId } = useParams();

    const [customerDto, setCustomerDto] = useState({
        username: "",
        fullname: "",
        email: "",
        gender: "",
        password: "",
        phone: "",
        imageFile: "",
        image: null,
        dateOfBirth: "",
        registeredDate: "",
        status: ""
    });

    const { username, fullname, email, gender, password, phone, imageFile, image, dateOfBirth, registeredDate, status } = customerDto;

    useEffect(() => {
        fetchByCustomer(customerId);
    }, [fetchByCustomer]);

    useEffect(() => {
        if (customer) {
            setCustomerDto(customer);
        }
    }, [customer]);

    if (loading) {
        console.log(customer);
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    // 
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        // Xử lý trường input là file hoặc các trường thông tin khác
        const newValue = type === 'file' ? files[0] : value;

        setCustomerDto((prevDto) => ({
            ...prevDto,
            [name]: newValue,
        }));

    };
    const validGenders = ['Male', 'Female', 'Different'];
    const handleCheckboxChange = (value) => {
        setCustomerDto((prevDto) => ({
            ...prevDto,
            gender: value,
        }));
    };
    //   


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("FROM --",customerDto);

        try {
            updateCustomer(customerDto);
            // Thêm bất kỳ hành động nào khác sau khi thêm khách hàng thành công
            console.log('Thêm khách hàng thành công, ID:', customerId);

            // Nếu có hình ảnh, gửi hình ảnh sau khi đã lưu thông tin khách hàng
            if (customerDto.imageFile) {
                addImageCustomer(customerId, imageFile);
                console.log('Lưu ảnh thành công');
            }
        } catch (error) {
            console.error('Lỗi khi thêm khách hàng:', error);
        }
    };



    return (
        <>
            {/* Multi Columns Form */}
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate="">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control form-add form-add"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                required=""
                            />
                        </div>
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                className="form-control form-add form-add"
                                name="fullname"
                                value={fullname}
                                onChange={handleChange}
                                required=""
                            />
                        </div>
                        <div className="col pt-4">
                            <label htmlFor="inputEmail5" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control form-add form-add"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="pr">
                            {imageFile && (
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Preview"
                                    height="250px"
                                    width="200px"
                                />
                            )}
                            {!imageFile && (
                                <img
                                    src={`http://localhost:8080/api/admin/customers/${image}`}
                                    alt="Preview"
                                    height="250px"
                                    width="200px"
                                />
                            )}
                        </div>
                        <label htmlFor="inputEmail5" className="form-label">
                            Image File
                        </label>{" "}
                        <br />
                        <input
                            type="file"
                            name="imageFile"
                            onChange={handleChange}
                            required=""
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control form-add form-add"
                        name="password"
                        value={password}
                        onChange={handleChange}
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

                    />
                </div>
                {/*  */}
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                        SĐT
                    </label>
                    <input
                        type="number"
                        className="form-control form-add form-add"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        required=""
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                        Ngày sinh
                    </label>
                    <input
                        type="date"
                        className="form-control form-add form-add"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={handleChange}
                        required=""

                    />
                </div>
                <div className="col-12" style={{ display: "flex" }}>
                    {validGenders.map((validGender) => (
                        <div key={validGender} className="form-check form-check-inline" style={{ paddingRight: "40px" }}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`${validGender}Checkbox`}
                                checked={gender === validGender}
                                onChange={() => handleCheckboxChange(validGender)}
                                required=""
                            />
                            <label className="form-check-label" htmlFor={`${validGender}Checkbox`}>
                                {validGender.charAt(0).toUpperCase() + validGender.slice(1)}
                            </label>
                        </div>
                    ))}
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

const mapStateToProps = (state) => ({
    customer: state.customers.customer,
    loading: state.customers.loading,
    error: state.customers.error,
});

const mapDispatchToProps = (dispatch) => ({
    fetchByCustomer: (customerId) => dispatch(fetchByCustomer(customerId)),
    updateCustomer:(customerDto) => dispatch(updateCustomer(customerDto)),
    addImageCustomer:(customerId, imageFile) => dispatch(addImageCustomer(customerId, imageFile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerForm);


