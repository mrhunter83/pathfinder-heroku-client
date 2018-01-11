import axios from "axios";
export default {
  // Saves new control group data to the database
  newData: function(data) {
    return axios.post("https://pathfinder-server.herokuapp.com/api/new_data", data);
  },
  // Saves new treatment group data to the database
  // newTreatment: function(data) {
  //   return axios.post("/api/treatment", data);
  // },
  newExperiment: function(data) {
  	return axios.post("https://pathfinder-server.herokuapp.com/api/experiments", data);
  },
  // Get data
  getExperiments: function(data) {
  	return axios.get("https://pathfinder-server.herokuapp.com/api/experiments/"+data);
  },
  // getTreatmentData: function(data) {
  // 	return axios.get("/api/treatment", data);
  // },
  // User Login
  loginUser: function(data) {
  	return axios.get("https://pathfinder-server.herokuapp.com/api/login", data);
  },
  registerUser: function(data) {
  	return axios.post("https://pathfinder-server.herokuapp.com/api/register", data);
  }
};