export const execute = async (cmd: string, file: string) => {
    const fileContent = await fetch(file).then((res) => res.text());

    const lines = fileContent.split("\n");
    return lines;
};
