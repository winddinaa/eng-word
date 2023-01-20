import { requestHandler } from "middleware";

const fetchPersonal = () =>
  requestHandler({
    method: "get",
    withCredentials: false,
    url: `${process.env.NEXT_PUBLIC_API_URL}/personal`,
  });

const requestUpdatePersonal = (body, params) =>
  requestHandler({
    method: "patch",
    withCredentials: false,
    url: `${process.env.NEXT_PUBLIC_API_URL}/personal/${params}`,
    data: body,
  });

const requestAddPersonal = (body) =>
  requestHandler({
    method: "post",
    withCredentials: false,
    url: `${process.env.NEXT_PUBLIC_API_URL}/personal`,
    data: body,
  });

const requestDeletePersonal = (params) => {
  return requestHandler({
    method: "delete",
    withCredentials: false,
    url: `${process.env.NEXT_PUBLIC_API_URL}/personal/${params}`,
  });
};

export {
  fetchPersonal,
  requestUpdatePersonal,
  requestAddPersonal,
  requestDeletePersonal,
};
