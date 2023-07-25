<script lang="ts">
    import { execute } from "src/utils/execute";
    import { cmdRunning, prompts } from "src/store";

    const prefix = "user@user-administrator";
    const cd = "~";
    export let index = -1,
        isDone: boolean;
    let lines = [];

    function getRandomNumber(min: number, max: number) {
        // return value include min and max
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function onExecuteCommand(event) {
        lines = [];
        if (isDone) {
            lines = await execute("", $prompts[index].file);
            return;
        }
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault();
            event.target.contentEditable = false;

            $cmdRunning = true;
            $prompts[index].file = `/cmd/sudo-apt-install-${getRandomNumber(1, 3)}.txt`;
            const fileContent = await execute(event.target.textContent, $prompts[index].file);

            let i = 0;
            function displayLine() {
                if (i >= fileContent.length) {
                    $prompts[index].done = true;
                    $prompts = [...$prompts, { done: false, file: "" }];
                    $cmdRunning = false;
                    return;
                }

                lines = [...lines, fileContent[i]];
                i++;

                setTimeout(displayLine, Math.floor(Math.random() * (400 - 10 + 1)) + 10);
            }
            displayLine();
        }
    }
</script>

<div class="absolute -z-10">
    <span class="text-[#269D64] font-bold">{prefix}</span>:<span class="text-[#1A3D72] font-bold">{cd}</span>$
</div>
<div
    contenteditable="true"
    on:keydown={(e) => onExecuteCommand(e)}
    id="cmdline-{index}"
    class="outline-none indent-[14.2rem]"
/>
<div class="show-progress">
    {#each lines as line}
        <p class="my-0">{line}</p>
    {/each}
</div>

<style>
    #cmdline {
        caret-color: var(--white);
    }
</style>
