#! /usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const create = require("../lib/create");

const logs = require("../utils/log");

logs.g("Thank you for use llx cli !");

// 创建项目
program
  .command("create [projectName]")
  .description("create a new project")
  // .option("-f,--force", "overwrite target directory if it exist")
  .action((projectName) => {
    create(projectName);
  });

// 查看版本
program
  .version(`v${require("../package.json").version}`)
  .usage("<command> [option]");

// 解析用户执行命令参数
program.parse(process.argv);

// 如果用户没有输入执行命令参数，显示命令帮助
if (!program.args.length) {
  program.help();
}
