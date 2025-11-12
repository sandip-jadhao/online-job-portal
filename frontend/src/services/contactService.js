// src/services/contactService.js
import axios from 'axios'

const API_BASE_URL = "https://job-portal-dm6d.onrender.com";

export const sendContactMessage = (formData) => {
  return axios.post(`${API_BASE_URL}/contact/contactUs`, formData)
  .then((res)=>  
       res.data); 
};
