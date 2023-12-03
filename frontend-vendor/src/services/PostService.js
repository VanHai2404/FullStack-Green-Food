import axiosAdmin from './axiosAdmin';

const PostService = {
  getAll() {
    const url = '/posts';
    return axiosAdmin.get(url);
  },

  get(id) {
    const url = `/posts/${id}`;
    return axiosAdmin.get(url);
  },

  add(data) {
    const url = '/posts';
    return axiosAdmin.post(url, data);
  },

  addImage(id, imageFile) {
    console.log("RES Image", imageFile);
    const formData = new FormData();
    formData.append('productId', id);
    for (let i = 0; i < imageFile.length; i++) {
        formData.append('imageFile', imageFile[i]);
    }

    const url = '/posts/upload-image';
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    console.log("formData---------",formData);
    return axiosAdmin.post(url, formData, { headers });
},


  update(data) {
    const url = `/posts/${data.Id}`;
    return axiosAdmin.put(url, data);
  },

  remove(id) {
    const url = `/posts/${id}`;
    return axiosAdmin.delete(url);
  },
};

export default PostService;
