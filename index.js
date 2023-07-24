"use strict";
import message from "@euriklis/message";
import inquirer from "inquirer";
new message()
    .set_color_violet()
    .bold().italic().underline()
    .append("Hello this is a quiz for javascript developers.")
    .reset().log();
// inquirer.prompt()