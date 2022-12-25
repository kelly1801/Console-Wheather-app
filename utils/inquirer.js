import inquirer from "inquirer";
import colors from "colors";

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?\n",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Search for a City`,
      },
      {
        value: 2,
        name: `${"2.".green} Historial`,
      },
      {
        value: 0,
        name: `${"0.".green} exit`,
      }
    ],
  },
];

export const inquireMenu = async () => {
  console.clear();
  console.log("===============================================".cyan);
  console.log("                Choose an option               ".magenta);
  console.log("===============================================\n".cyan);

  const { option } = await inquirer.prompt(questions);

  return option;
};

export const pause = async () => {
  const pauseQuestion = [
    {
      type: "input",
      name: "pauseOpt",
      message: `Press ${"Enter".cyan} to continue`,
    },
  ];

  console.log("\n");
  const { pauseOpt } = await inquirer.prompt(pauseQuestion);

  return pauseOpt;
};

export const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,

      validate(value) {
        if (!value.length) return "Please enter a value";

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};

export const listPlaces = async (places = [], type = "list", message = "Choose a place") => {
  console.clear();
  const choices = places.map((place, index) => {
    return {
      value: `${place.id}`,
      name: `${colors.green(index + 1 + ".")} ${place.name}`,  
    };
  });

  if (type === "list") {
    choices.unshift({
      value: "0",
      name: `${"0".green} Cancel`,
    });
  }

  const question = [
    {
      type,
      name: "id",
      message,
      choices,
    },
  ];

  const { id } = await inquirer.prompt(question);
  return id;
};
export const confirmDeletion = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};
