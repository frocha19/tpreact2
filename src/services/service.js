import http from "../http-common";

class Service {
    getAll() {
        return http.get("/instrumentos");
    }

    get(id) {
        return http.get(`/instrumentos/${id}`);
    }

    create(data) {
        return http.post("/instrumentos", data);
    }

    update(id, data) {
        return http.put(`/instrumentos/${id}`, data);
    }

    delete(id) {
        return http.delete(`/instrumentos/${id}`);
    }
}

export default new Service();