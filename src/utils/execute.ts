import commands from "src/data/commands.json";
export const execute = async (cmd: string, file: string) => {
    console.log(commands);
    // check if type wrong command or exceed "sudo" wrong command
    const actualCommand = cmd.split(" ")[1];
    if (!commands[cmd] && !commands[actualCommand]) {
        return [`${cmd}: command not found`];
    }

    // check command need "sudo"
    if (commands[cmd]?.includes("sudo") && commands[actualCommand]?.includes("sudo")) {
        if (!cmd.includes("sudo")) return [`${cmd}: cannot execute: Permission denied`];
    }

    const fileContent = await fetch(file).then((res) => res.text());

    const lines = fileContent.split("\n");
    return lines;
};
