// jobService.js
export const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    fetch("https://job-portal-dm6d.onrender.com/jobs/listAllJobs") 
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          resolve(data.data);
        } else {
          resolve([]); 
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
