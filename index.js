"use strict";
import validator from "@euriklis/validator";
import { questions } from "./questions.js";
import message from "@euriklis/message";
import inquirer from "inquirer";
import { deepCopy } from "./src/deepCopy.js";
new message()
    .set_color_violet()
    .bold().italic().underline()
    .append("Hello this is a quiz for javascript developers.")
    .reset().log();
