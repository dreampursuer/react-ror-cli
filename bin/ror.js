#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
function createApp(name) {
    console.log("create an application:", name);
}
function createController() {
    console.log("crerate controller");
}
program.command("create-app")
    .description('Creates an application')
    .argument("[name]", 'Application name')
    .action(createApp);
program.command("create-controller")
    .description("Create a controller")
    .argument('[name]', 'Controller name')
    .action(createController);
program.parse();
