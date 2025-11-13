import axios from 'axios';

export const registerJobSeeker = (formData) => {
    let promise = axios.post("https://job-portal-dm6d.onrender.com/users/userRegister",formData)
    return promise;
}

export const loginJobSeeker = (formData) => {
    let promise = axios.post('https://job-portal-dm6d.onrender.com/auth/login', formData);
    return promise;

}

export const getJobSeekerProfile = (token) => {
    let promise = axios.get('https://job-portal-dm6d.onrender.com/users/profile', {
         headers: { Authorization: `Bearer ${token}` },
        })
    return promise;
};

export const getUpdatedJobSeekerProfile = (formData) => {
  let token = sessionStorage.getItem("jobSeekerToken");
  let promise = axios.put("https://job-portal-dm6d.onrender.com/users/updateUser", formData, {
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"   
    },
  });
    return promise;
};

export const getAllJobs = () => {
  let promise= axios.get(`https://job-portal-dm6d.onrender.com/jobs/listAllJobs`);
  return promise;
};



export const applyForJobs = ( token, hr_id, j_id) => {
    return axios.post(
        "https://job-portal-dm6d.onrender.com/users/applyJob",
         { hr_id, j_id },

        { headers: { Authorization: `Bearer ${token}` } }

     
    );
};


export const getAppliedJobs = (token) => {
    return axios.get(
        `https://job-portal-dm6d.onrender.com/users/viewApplicationsHistory`,
        { headers: { Authorization:`Bearer ${token}` } }
    );
};
    
// export const searchJobsByName = (j_name) => {
//   return axios.post(
//     `https://job-portal-dm6d.onrender.com/users/searchJob`,
//     { j_name },
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );
// };

export const getScheduledInterview=(token)=>{
    return axios.get(`https://job-portal-dm6d.onrender.com/users/myScheduleInterview`,
        { headers: { Authorization:`Bearer ${token}` } }
    )
}
