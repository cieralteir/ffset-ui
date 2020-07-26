import api from "@/utils/api.util";

export class OrderService {
  static RESOURCE = "/orders/";

  static all(params = {}) {
    return api.get(this.RESOURCE, { params });
  }
}
