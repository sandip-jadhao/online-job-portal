import axios from 'axios';

export const registerEmployer=(formData)=>{
    let promise= axios
    .post("https://job-portal-dm6d.onrender.com/hr/hrRegister",formData)
    return promise;
}

export const loginEmployee=(formData)=>{
    let promise = axios.post('https://job-portal-dm6d.onrender.com/auth/hrLogin',formData)
    return promise;
};

export const getEmployerProfile=(token)=>{
    let promise = axios.get("https://job-portal-dm6d.onrender.com/hr/hrProfile",{
        headers:{Authorization:`Bearer ${token}`},
    })
    return promise;
};

export const createJob = (jobData, token) => {
  return axios.post(`https://job-portal-dm6d.onrender.com/hr/createJob`, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getEmployerJobs =(token)=>{
  return axios.get("https://job-portal-dm6d.onrender.com/hr/viewJob",{
    headers:{Authorization:`Bearer ${token}`},  
  })
};

export const deleteJob =(j_id,token)=>{
  return axios.delete(`https://job-portal-dm6d.onrender.com/hr/deleteJob/${j_id}`,{
     headers:{ Authorization:`Bearer ${token}`},
});
};

export const updateJob = (j_id, formData, token) => {
  return axios.put(
    `https://job-portal-dm6d.onrender.com/hr/updateJobById/${j_id}`,
    formData,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
};

export const getApplicants =(token)=>{
  let promise=axios.get("https://job-portal-dm6d.onrender.com/hr/getApplicants",{
    headers:{ Authorization:`Bearer ${token}`},
  })
  return promise;
};

export const getScheduledInterviews = (token) => {
  return axios.get("https://job-portal-dm6d.onrender.com/schedules/getScheduledInterviews", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const searchJobsByName = (j_name, token) => {
  return axios.post(
    `https://job-portal-dm6d.onrender.com/hr/searchJob`,
    { j_name },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

// New function for downloading resume
export const downloadResume = (filename, token) => {
  return axios.get(`https://job-portal-dm6d.onrender.com/hr/downloadResume/${filename}`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob', // Important for file download
  });
};
