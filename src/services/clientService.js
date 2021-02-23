import http from "./httpService";

const apiEndPoint = "/";

export function getClients() {
  return http.get(apiEndPoint);
}
