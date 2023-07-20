<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { topApp } from "src/store";
    import { execute } from "src/utils/execute";

    const prefix = "user@user-administrator";
    const cd = "~";
    let lines = [],
        isDone = false;

    // Make iframe on top the others if clicked/selected
    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-terminal") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set("terminal");
        focusOnLine();
    }

    function focusOnLine() {
        const line = document.getElementById("cmdline");
        line.focus();
        window.getSelection().selectAllChildren(line);
        window.getSelection().collapseToEnd();
    }

    async function onExecuteCommand(event) {
        isDone = false;
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault();
            event.target.contentEditable = false;

            const fileContent = await execute(event.target.textContent);
            console.log(event.target.textContent);
            let i = 0;
            function displayLine() {
                if (i >= fileContent.length) {
                    isDone = true;
                    return;
                }

                lines = [...lines, fileContent[i]];
                i++;

                setTimeout(displayLine, Math.floor(Math.random() * (400 - 10 + 1)) + 10);
            }
            displayLine();
        }
    }

    $: isTopApp = $topApp == "terminal";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="terminal"
    use:draggable={{ handle: ".window-bar", bounds: { top: 25 } }}
    on:click={setTopApp}
    class:top-app={isTopApp}
>
    <WindowBar name="terminal" classStyle="justify-between">
        <button class="ml-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
            <img src="/img/icons/tab-new-symbolic.svg" alt="newtab-btn" width="15" height="15" class="img-icon" />
        </button>
        <span>{prefix}</span>
        <div class="flex flex-row">
            <button class="ml-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
                <img
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search-btn"
                    width="15"
                    class="img-icon"
                />
            </button>
            <button class="ml-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
                <img src="/img/icons/open-menu-symbolic.svg" alt="openmenu-btn" width="15" class="img-icon" />
            </button>
        </div>
    </WindowBar>
    <div class="main-app">
        <div class="cmd-content">
            <div class="absolute -z-10">
                <span class="text-[#269D64] font-bold">{prefix}</span>:<span class="text-[#1A3D72] font-bold">{cd}</span
                >$
            </div>
            <div
                contenteditable="true"
                on:keydown={(e) => onExecuteCommand(e)}
                id="cmdline"
                class="outline-none indent-[14.2rem]"
            />
            <div class="show-progress">
                {#each lines as line}
                    <p class="my-0">{line}</p>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .terminal {
        color: var(--white);
        font-family: "Ubuntu Mono", monospace;
        background-color: var(--dark-purple);
        border-radius: 12px 12px 0 0;
        position: absolute;
        inset: 10% 50% 30% 10%;
        resize: both;
        overflow: hidden;
        border: 1px solid #000;
        border-top: none;
    }

    #cmdline {
        caret-color: var(--white);
    }

    .main-app {
        /* minus the height of window-bar */
        height: calc(100% - 48px);
        width: 100%;
    }

    .cmd-content {
        @apply overflow-y-scroll h-full relative;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .cmd-content::-webkit-scrollbar {
        display: none;
    }
</style>
