import axiosUser from "./axiosUser";

const ProductService = {
    getAll() {
      const url = '/home';
      return axiosUser.get(url);
    },
  
    get(id) {
      const url = `/home/${id}`;
      return axiosUser.get(url);
    },
    finby(name){
        const url = `/home/seacrh/${name}`;
      return axiosUser.get(url);

    }
  
  };
  
  export default ProductService;
  