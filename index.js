import { readInput, inquireMenu, pause } from "./utils/inquirer.js";

const main = async () => {
  let opt;

  do {
    opt = await inquireMenu();
    console.log({opt});

    // switch (opt) {
    //   case 1:
    //     const city = await readInput("choose a city");
    //     console.log( city );

    //     break;

    //   case 2:
    //     console.log("the historial");

    //     break;
    // }

  if ( opt !== 0) { await pause()}
  } while (opt);
};

main();
