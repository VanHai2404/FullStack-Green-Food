import axiosAdmin from './axiosAdmin';

const ProductService = {
  getAll() {
    const url = '/products';
    return axiosAdmin.get(url);
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosAdmin.get(url);
  },

  add(data) {
    const url = '/products';
    return axiosAdmin.post(url, data);
  },

  update(data) {
    const url = `/products/${data.Id}`;
    return axiosAdmin.put(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosAdmin.delete(url);
  },
};

export default ProductService;
