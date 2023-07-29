import commands from "src/data/commands.json";

export const execute = async (cmd: string, file: string) => {
    let lines = [];
    const sudoCommand = cmd.includes("sudo") ? cmd : "sudo" + cmd;

    // check if type wrong command or exceed "sudo" wrong command
    if (!commands[cmd] && !commands[sudoCommand]) {
        return [
            `${cmd}: command not found`,
            "Type `help` to see available commands",
            "Or type `sudo apt-get` if you want it look cool!",
        ];
    }

    // checkdo command
    if (commands[sudoCommand] && !cmd.includes("sudo")) {
        return [`${cmd}: cannot execute: Permission denied`];
    }

    if (cmd === "help" || sudoCommand === "sudo help") {
        for (let i in commands) {
            lines.push([i, commands[i]]);
        }
        return lines;
    }

    const fileContent = await fetch(file).then((res) => res.text());

    lines = fileContent.split("\n");
    return lines;
};
