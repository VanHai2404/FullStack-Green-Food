import axiosAdmin from './axiosAdmin';

const SupplierService = {
  getAll() {
    const url = '/suppliers';
    return axiosAdmin.get(url);
  },

  get(id) {
    const url = `/suppliers/${id}`;
    return axiosAdmin.get(url);
  },

  add(data) {
    const url = '/suppliers';
    const headers = {
      'Content-Type': 'application/json',
    };
    return axiosAdmin.post(url, data, { headers });
  },

  update(data) {
    console.log("TAG_ID",data.supplier.supplierId);
    const url = `/suppliers/${data.supplier.supplierId}`;
    const headers = {
        'Content-Type': 'application/json',
      };
    return axiosAdmin.put(url, data.supplier,{ headers });
  },

  remove(id) {
    const url = `/suppliers/${id}`;
    return axiosAdmin.delete(url);
  },
};

export default SupplierService;
