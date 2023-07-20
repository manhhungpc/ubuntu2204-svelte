export const execute = async (cmd: string) => {
    const fileContent = await fetch(`/cmd/sudo-apt-install-${getRandomNumber(1, 3)}.txt`).then((res) => res.text());

    const lines = fileContent.split("\n");
    return lines;
};

function getRandomNumber(min: number, max: number) {
    // return value include min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
