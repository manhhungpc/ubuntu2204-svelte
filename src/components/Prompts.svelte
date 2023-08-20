<script lang="ts">
    import { execute } from "src/utils/execute";
    import { cmdRunning, prompts } from "src/store";

    const prefix = "user@user-administrator";
    const cd = "~";
    export let index = -1,
        isDone: boolean;
    let lines = [],
        waitConfirm = false,
        confirm: string,
        fileContent: string[];

    function getRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        // return 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let count = 0;
    async function onExecuteCommand(event) {
        if (isDone) {
            /**
             * Immediate display if the command is already executed
             */
            lines = await execute("", $prompts[index].file);
            return;
        } else if (event.key === "Enter" || event.keyCode === 13) {
            const command = event.target.textContent;

            event.preventDefault();
            event.target.contentEditable = false;

            if (confirm && confirm.toLowerCase() == "y") {
                $cmdRunning = true;
                lines[count] = lines[count].replace("---WaitingConfirm()---", "");
                displayLine(++count, fileContent);
                return;
            } else if (confirm && confirm.toLowerCase() != "y") {
                lines[count] = lines[count].replace("---WaitingConfirm()---", "");
                lines = [...lines, "Abort"];
                postExecute();
                return;
            }

            $cmdRunning = true;
            $prompts[index].file = `/cmd/sudo-apt-install-${getRandomNumber(1, 3)}.txt`;
            fileContent = await execute(command, $prompts[index].file);

            if (command === "help" || command === "sudo help") {
                lines = fileContent;
                postExecute();
                return;
            } else {
                displayLine(count, fileContent);
            }
        }
    }

    function displayLine(i: number, fileContent: string[]) {
        if (i >= fileContent.length) {
            postExecute();
            return;
        }

        if (fileContent[i].includes("---WaitingConfirm()---")) {
            lines = [...lines, fileContent[i]];
            $cmdRunning = false;
            waitConfirm = true;
            count = i;
            return;
        }

        lines = [...lines, fileContent[i]];
        i++;

        setTimeout(() => displayLine(i, fileContent), Math.floor(Math.random() * (400 - 10 + 1)) + 10);
    }

    function postExecute() {
        $prompts[index].done = true;
        $prompts = [...$prompts, { done: false, file: "" }];
        $cmdRunning = false;
        isDone = true;
    }

    $: console.log(lines);
</script>

<div class="absolute -z-10">
    <span class="text-[#269D64] font-bold">{prefix}</span>:<span class="text-[#1A3D72] font-bold">{cd}</span>$
</div>
<div
    contenteditable="true"
    on:keydown={(e) => onExecuteCommand(e)}
    id="cmdline-{index}"
    class="outline-none indent-[14.2rem] mb-[2px]"
/>
<div class="show-progress">
    {#each lines as line}
        {#if line.includes("---WaitingConfirm()---") && !isDone}
            <span class="my-0">{line.replace("---WaitingConfirm()---", "")}</span>
            <input
                type="text"
                id="wait-confirm"
                autofocus
                on:keydown={(e) => onExecuteCommand(e)}
                bind:value={confirm}
                class="text-white border-none bg-transparent focus:outline-none"
            />
        {:else}
            <p class="my-[2px]">{line}</p>
        {/if}
    {/each}
</div>

<style>
    #cmdline {
        caret-color: var(--white);
    }
</style>
