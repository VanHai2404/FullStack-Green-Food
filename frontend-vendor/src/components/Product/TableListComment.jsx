import React, { useState, useEffect } from 'react';
import { Table, Space, Spin, Modal } from 'antd';
import { AiOutlineStar, AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios or your preferred HTTP client library

const TableListComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(3);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/product-comments');
      setComments(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(comments);
    fetchComments();
  }, []); // Empty dependency array ensures that this effect runs once on component mount

  const columns = [
    {
      title: 'Người đánh giá',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer) => (
        <Space size="middle">
          <img
            src={`http://localhost:8080/api/admin/customers/${customer.image}`}
            alt={customer.fullname}
            title={customer.fullname}
            loading="lazy"
            width={48}
            height={48}
            className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg"
            style={{ width: 48, height: 48, backgroundColor: 'rgb(255, 71, 148)' }}
          />
          <div className="grid gap-0.5">
            <p className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
              {customer.fullname}
            </p>
            <p className="text-[13px] text-gray-500">{customer.email}</p>
          </div>
        </Space>
      ),
    },
    {
        title: 'Đánh giá',
        dataIndex: 'starRating',
        key: 'starRating',
        render: (starRating) => (
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <AiOutlineStar
                key={index}
                style={{ color: index < starRating ? 'gold' : 'gray' }}
              />
            ))}
            <span className="ml-1 shrink-0">{starRating}</span>
          </div>
        ),
      },
      
    {
      title: 'Chi tiết',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Ngày đánh giá',
      dataIndex: 'createDate',
      key: 'createDate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <div className="flex items-center">
         
            <button className="borderBTN inline-flex h-7 w-7 items-center">
              <MdEdit />
            </button>
    
          <button
            className="borderBTN inline-flex h-7 w-7 items-center"
          >
            <AiFillDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={loading} size="large" tip="Loading...">
      <div>
        <Table
          columns={columns}
          dataSource={comments}
          pagination={{
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: pageSize,
            pageSizeOptions: ['3', '5', '10', '20'],
            showSizeChanger: true,
          }}
        />
      </div>
    </Spin>
  );
};

export default TableListComment;
