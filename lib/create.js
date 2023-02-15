const inquirer = require("inquirer");
const fs = require("fs");
const logs = require("../utils/log");

const ElementPlus_PROJECT = "element";
const AntDesign_PROJECT = "ant";

// 创建项目选项
const createQuestions = [
  {
    type: "list",
    name: "projectType",
    message: "Please choose the project type?",
    choices: [
      {
        key: ElementPlus_PROJECT,
        name: "Vue3 ElementPlus项目（vite4 + vue3 + typescript + vue router + pinia + element plus）",
        value: ElementPlus_PROJECT,
      },
      {
        key: AntDesign_PROJECT,
        name: "Vue3 AntDesign项目（vite4 + vue3 + typescript + vue router + pinia + Ant Design for vue）",
        value: AntDesign_PROJECT,
      },
    ],
  },
];

// 创建项目
const create = (projectName) => {
  if (fs.existsSync(projectName)) {
    logs.r("The project has exist");
    return;
  }
  inquirer.prompt(createQuestions).then(({ projectType }) => {
    if (projectType === ElementPlus_PROJECT) {
      const createElementPlus = require("./create-elementPlus");
      createElementPlus(projectName);
    } else if (projectType === AntDesign_PROJECT) {
      const createAntDesign = require("./create-antDesign");
      createAntDesign(projectName);
    }
  });
};

module.exports = create;
