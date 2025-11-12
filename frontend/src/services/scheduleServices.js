// services/scheduleService.js
import axios from "axios";
export const scheduleInterview = (token, data) => {
  return axios.post(`https://job-portal-dm6d.onrender.com/schedules/scheduleInterview`, data, {
    headers: { Authorization: `Bearer ${token}`,
                 "Content-Type": "application/json",
     },
  });
};

export const rejectApplication = (uid, j_id) => {
  let token = sessionStorage.getItem("employerToken"); // if HR is authenticated
  return axios.delete("https://job-portal-dm6d.onrender.com/hr/rejectApplication", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    data: { uid, j_id } // DELETE must use `data` field
  });
};
/*
export const getScheduledInterviews = (token, hr_id) => {
  return axios.get("/api/getScheduledInterviews", {
    headers: { Authorization: `Bearer ${token}` },
    params: { hr_id }  
  });
};*/
