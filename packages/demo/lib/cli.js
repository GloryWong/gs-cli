"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const demo_1 = require("./demo");
const program = new commander_1.Command();
program
    .version('1.0.0')
    .action(function () {
    demo_1.listDemos();
    demo_1.selectDemo();
})
    .parse();
//# sourceMappingURL=cli.js.map