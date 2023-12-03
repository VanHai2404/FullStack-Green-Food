import axiosAdmin from './axiosAdmin';

const OrderService = {
  getAll() {
    const url = '/orders/page';
    return axiosAdmin.get(url);
  },

  get(id) {
    const url = `/orders/${id}`;
    return axiosAdmin.get(url);
  },

  add(data) {
    const url = '/orders';
    return axiosAdmin.post(url, data);
  },

  confirm(orderId, newStatus) {
    const url = '/confirm';
    return axiosAdmin.post(url, orderId, newStatus);
  },


  update(data) {
    const url = `/orders/${data.Id}`;
    return axiosAdmin.put(url, data);
  },

  remove(id) {
    const url = `/orders/${id}`;
    return axiosAdmin.delete(url);
  },
};

export default OrderService;
