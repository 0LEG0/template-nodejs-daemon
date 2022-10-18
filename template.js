/**
 * @description Template of NodeJS daemon application
 * @author 0LEG0 <a.i.s@gmx.com>
 * @version 1.0.0
 */
"use strict";

import CONF from "./.template.js";

let timeout;

async function main() {
    console.log(new Date(), "Template started.")
    try {
        await schedule();
    } catch(err) {
        console.error(new Date(), "Template", err);
        exit(-1);
    }
}

async function schedule() {
    console.log(new Date(), "Scheduled task.");
    timeout = setTimeout(schedule, CONF.interval ?? 5000);
}

function exit(exitCode = 0) {
    if (timeout) clearTimeout(timeout);
    console.log(new Date(), "Template stopped.");
    process.exit(exitCode);
}

process.on("SIGTERM", exit);
process.on("SIGINT", exit);

main().catch(console.error);