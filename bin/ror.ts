#!/usr/bin/env node
import {Command} from "commander";
const program = new Command()

function createApp(name: string){
    console.log("create an application:", name)
}

function createController(){
    console.log("crerate controller")
}

program.command("create-app")
    .description('Creates an application')
    .argument("[name]", 'Application name')
    .action(createApp);

program.command("create-controller")
    .description("Creates a controller")
    .argument('[name]', 'Controller name')
    .action(createController);

program.parse();


