import * as dotenv from "dotenv";
dotenv.config();
import { readInput, inquireMenu, pause, listPlaces } from "./utils/inquirer.js";
import Searchers from "./models/searches.js";

const main = async () => {
  let opt;

  do {
    opt = await inquireMenu();
    const cities = new Searchers();
    switch (opt) {
      case 1:
        const query = await readInput("City: ");
        const results = await cities.fetchCity(query);
        const idPlace = await listPlaces(results);
        const selectedPlace = results.find((place) => place.id === idPlace);
        const { lat, lng, name } = selectedPlace;
        const weather = await cities.getWeather(lat, lng);
        const { temp, min, max, desc } = weather;
        console.clear()
        console.log("\nCity info\n".green);
        console.log(` City: ${name}`);
        console.log(` Lat: ${lat}`);
        console.log(` Lng: ${lng}`);
        console.log(` Temp: ${temp}`);
        console.log(` Min Temp:${min}`);
        console.log(` Max Temp:${max}`);
        console.log(` How is the Weather: ${desc}`.cyan);
        break;

      case 2:
        console.log("the historial");

        break;
    }

    if (opt !== 0) {
      await pause();
    }
  } while (opt);
};

main();
