import * as dotenv from 'dotenv'
dotenv.config()
import { readInput, inquireMenu, pause } from "./utils/inquirer.js";
import Searchers from "./models/searches.js";

const main = async () => {
  let opt;

  do {
    opt = await inquireMenu();
    console.log({ opt });
const cities = new Searchers
    switch (opt) {
      case 1:
        const city = await readInput("City: ");
        await cities.fetchCity( city )
            
        
        console.log("\nCity info\n".green);
        console.log(` City: `);
        console.log(` Lat:`);
        console.log(` Lng:`);
        console.log(` Temp:`);
        console.log(` Min Temp:`);
        console.log(` Max Temp:`);

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
