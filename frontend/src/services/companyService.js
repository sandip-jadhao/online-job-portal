
export const getAllCompanies = () => {
  return new Promise((resolve, reject) => {
    fetch("https://job-portal-dm6d.onrender.com/jobs/viewAllCompanies") // 
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          // extract unique company names
          const uniqueCompanies = [
            ...new Set(data.data.map((job) => job.company_name)),
          ];
          resolve(uniqueCompanies);
        } else {
          resolve([]); 
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
