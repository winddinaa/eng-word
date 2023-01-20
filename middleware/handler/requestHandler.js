import axios from "axios";

// Default axios fetch options
const defaultOptions = {
  delay: 0,
  method: "get",
  url: "",
  params: {},
  data: {},
  timeout: 30000, //ms
  headers: {},
  withCredentials: false,
};
const axiosPublic = axios.create({});

const requestHandler = (options) => {
  const reqOptions = { ...defaultOptions, ...options };
  const { delay } = reqOptions;

  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(fetcher(reqOptions));
    }, delay * 1000);
  });
};

const fetcher = async (options) => {
  try {
    const res = await axiosPublic(options);

    return { data: res.data };
  } catch (error) {
    return error;
  }
};

export default requestHandler;
