import axios from "axios";

export const getAdminProfile=(token)=>{
    let promise = axios.get("https://job-portal-dm6d.onrender.com/admin/adminProfile",{
        headers:{Authorization:`Bearer ${token}`},
    })
    return promise;
};

export const getAdminStats = (token) => {
  return axios.get("https://job-portal-dm6d.onrender.com/admin/stats", {
    headers: { Authorization: `Bearer ${token}` }
  });
};
export const getHRs = (token) => {
  return axios.get("https://job-portal-dm6d.onrender.com/admin/viewHR", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addHR = (hrData) => {
  let promise= axios.post("https://job-portal-dm6d.onrender.com/admin/addHR", hrData);
  return promise;
};

export const deleteHR = (hr_id) => {
  return axios.post(`https://job-portal-dm6d.onrender.com/admin/deleteHR/${hr_id}`);
};

export const updateHR =(hrData)=>{
  return axios.put("https://job-portal-dm6d.onrender.com/admin/updateHR",hrData)
  
}

export const getEnquiries = (token) => {
  return axios.get("https://job-portal-dm6d.onrender.com/admin/viewEnquiry", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
