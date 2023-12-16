import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import { Table, Space, Pagination ,Modal  } from 'antd';
import CategoryService from '../../services/CategoryService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';

const TableListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); // Set your desired page size
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const response = await CategoryService.getAll();
      console.log('Danh sách các danh mục:', response.data);
      setCategories(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách danh mục:', error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      // await CategoryService.remove(id);
      loadCategory();
      toast.success('Xóa Danh Mục Thành Công', { position: toast.POSITION.TOP_RIGHT });
    } catch (error) {
      toast.error('Xảy ra lỗi khi Xóa Danh Mục', { position: toast.POSITION.TOP_RIGHT });
    }
  };
  const showDeleteModal = (categoryId, categoryName) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);
    setDeleteModalVisible(true);
  };

  const hideDeleteModal = () => {
    setSelectedCategoryId(null);
    setSelectedCategoryName('');
    setDeleteModalVisible(false);
  };

  const columns = [
    {
      title: 'Tên Danh Mục',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'Số Sản Phẩm',
      dataIndex: 'productCount',
      key: 'productCount',
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`${config.routes.EditCatrgory.replace(':categoryId', record.categoryId)}`}>
            <MdEdit />
          </Link>
          <a href="#">
            <GrView />
          </a>
          <a href="#" onClick={() => showDeleteModal(record.categoryId, record.name)}>
            <AiFillDelete />
          </a>
        </Space>
      ),
    },
  ];

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={categories}
        pagination={{
          total: categories.length,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: pageSize,
          pageSizeOptions: ['3', '5', '10', '20'], // Các tùy chọn cho số lượng items trên mỗi trang
          showSizeChanger: true,
          onChange: onPageChange,
        }}
        rowKey="categoryId"
      />


        {/* Delete Confirmation Modal */}
        <Modal
        title="Xác nhận xóa"
        visible={deleteModalVisible}
        onOk={() => deleteCategory(selectedCategoryId)}
        onCancel={hideDeleteModal}
      >
        <p>Bạn có chắc chắn muốn xóa danh mục " <strong style={{color:'red'}}>{selectedCategoryName} </strong>"?</p>
      </Modal>
    </div>
  );
};

export default TableListCategory;
