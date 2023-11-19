import axiosAdmin from './axiosAdmin';

const CategoryService = {
  getAll() {
    const url = '/categories';
    return axiosAdmin.get(url);
  },

  get(id) {
    const url = `/categories/${id}`;
    return axiosAdmin.get(url);
  },

  add(data) {
    const url = '/categories';
    return axiosAdmin.post(url, data);
  },

  update(data) {
    const url = `/categories/${data.categoryId}`;
    return axiosAdmin.put(url, data);
  },

  remove(id) {
    const url = `/categories/${id}`;
    return axiosAdmin.delete(url);
  },
};

export default CategoryService;
