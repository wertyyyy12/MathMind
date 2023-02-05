import axios from "axios";

import { SITE_URL } from ".././App";
const url = SITE_URL + "/api/login";
// const url = 'http://169.233.206.193:3001/api/login'

const loginUser = async (loginForm) => {
  try {
    const { data } = await axios.post(url, loginForm);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const loginServices = {
  loginUser,
};

export default loginServices;
