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

  get weatherParams() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
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

      return data.features.map((query) => ({
        id: query.id,
        name: query.place_name,
        lng: query.center[0],
        lat: query.center[1],
      }));
    } catch (err) {
      return [];
    }

    return [];
  }

  async getWeather(lat, lon) {
    try {
      const instace = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: {
          ...this.weatherParams,
          lat,
          lon,
        },
      });

      const { data } = await instace.get();
      const { weather, main } = data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (err) {
      console.log(err);
    }
  }
}
