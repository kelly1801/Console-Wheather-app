import axios from "axios";
export default class Searchers {
  historial = ["Cali", "Rome", "Dubai", "Rio de Janeiro"];

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "en",
    };
  }
  constructor() {}

  async fetchCity(place = "") {
    try {
      const instace = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?`,
        params: this.paramsMapbox,
      });

      const { data } = await instace.get();

      console.log(data.features);

      return [];
    } catch (err) {
      return [];
    }

    return [];
  }
}
