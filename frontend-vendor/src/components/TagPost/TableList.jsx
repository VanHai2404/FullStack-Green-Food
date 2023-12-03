import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import PaginationRounded from '../Pagination/PaginationRounded';
import { fetchTags ,deleteTag } from '../../redux/actions/tag-action';
import EditModal from '../common/Modal/EditModalPost';
import '../Table/TableList.css';


const TableListTag = () => {
    const [tags, setTags] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedTagId, setSelectedTagId] = useState(null);
    const dispatch = useDispatch();
    const tagsData = useSelector((state) => state.tags); // 
    const fetchedTags = tagsData.tags || []; // Change the name here

    // ...
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchTags());
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        setTags(fetchedTags); // Update the state with the fetchedTags
        console.log("Data : ",tags)
    }, [fetchedTags]);

    const handleDelete = async (tagId) => {
        await dispatch(deleteTag(tagId));
        dispatch(fetchTags());
    };
    // 
    const handleEditClick = (tagId) => {
        // Khi nhấp vào nút chỉnh sửa, lưu ID của tag được chọn vào state và mở modal
        setSelectedTagId(tagId);
        setShowEditModal(true);
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
                        <th className='rc-table-cell' scope="col">
                            <div className="flex items-center">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>TÊN TAG</font>
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
                    {tags.map(tag => (
                        <tr key={tag.tag_id} tag={tag}>  
                            <td className="td-table-cell">
                                <div className="inline-flex ps-3 5">
                                    <input type="checkbox" name="" id="" className="bg-transparent check-input" />
                                </div>
                            </td>
                            <td className="td-table-cell">
                                <p className="text-sm">{tag.name}</p>
                            </td>
                            <div className="flex items-center">

                            <a href="#" style={{ paddingLeft: "10px" }} onClick={() => handleEditClick(tag.tag_id)}>
                                <button className="borderBTN inline-flex h-7 w-7 items-center"> <MdEdit /> </button>
                             </a>
                                <a href="#" style={{ paddingLeft: "10px" }}>
                                    <button className="borderBTN inline-flex h-7 w-7 items-center"> <GrView /> </button>
                                </a>
                                <a href="#" style={{ paddingLeft: "10px" }}>
                                    <button
                                    onClick={() => handleDelete(tag.tag_id)}
                                    className="borderBTN inline-flex h-7 w-7 items-center" > 
                                    <AiFillDelete /> 
                                    </button>
                                </a>
                            </div>
                        </tr>
                    ))}

                </tbody>
            </table>
            {/* Phần hiển thị phân trang */}
            <div className="table-pagination flex items-center ustify-center justify-between mt-5 xs:mt-6 sm:mt-7">
                <PaginationRounded />
            </div>

            <EditModal show={showEditModal} handleClose={() => setShowEditModal(false)} tagId={selectedTagId} />

        </div>
    );
};

export default TableListTag;
