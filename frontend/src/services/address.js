import axios from 'axios';

export const fetchCityData = () => {
  return axios.get('https://provinces.open-api.vn/api/?depth=3')
    .then(response => {
      return response;
      
    })
    .catch(error => {
      console.error('Error fetching city data:', error);
    });
};