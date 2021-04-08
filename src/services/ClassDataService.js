import http from "../http-common.js";

class ClassDataService {
  get(id) {
    return http.get(`/classes/${id}`);
  }

  delete(id) {
    return http.delete(`/classes/${id}`)
  }

  save(data) {
    return http.put('/classes', data)
  }
}

export default new ClassDataService();