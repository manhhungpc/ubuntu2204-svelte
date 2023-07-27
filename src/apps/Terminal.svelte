<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import Prompts from "src/components/Prompts.svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";
    import { prompts, cmdRunning, topApp } from "src/store";

    const prefix = "user@user-administrator";
    const cd = "~";

    // Make iframe on top the others if clicked/selected
    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-terminal") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set(AppName.terminal);
        focusOnLine();
    }

    function focusOnLine() {
        const line = document.getElementById(`cmdline-${$prompts.length - 1}`);
        line.focus({ preventScroll: true });
        window.getSelection().selectAllChildren(line);
        window.getSelection().collapseToEnd();
    }

    $: scroll = setInterval(() => {
        const cmdContent = document.getElementById("cmd-content");
        if ($cmdRunning == false) {
            clearInterval(scroll);
            return;
        }
        cmdContent.scrollTop = cmdContent.scrollHeight;
    }, 100);

    $: isTopApp = $topApp == AppName.terminal;
</script>

<SkelentonApp
    {focusOnLine}
    appName={AppName.terminal}
    addStyles="inset: 10% 50% 30% 10%; 
            color: var(--white); 
            font-family: 'Ubuntu Mono', monospace;
            background-color: var(--dark-purple);"
>
    <WindowBar name={AppName.terminal} classStyle="justify-between">
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
    <div class="main-app" id="main-terminal">
        <div class="cmd-content" id="cmd-content">
            <!-- <div class="absolute -z-10">
                <span class="text-[#269D64] font-bold">{prefix}</span>:<span class="text-[#1A3D72] font-bold">{cd}</span
                >$
            </div> -->
            {#each $prompts as prompt, i}
                <Prompts isDone={prompt.done} index={i} />
            {/each}
        </div>
    </div>
</SkelentonApp>

<style>
    /* .terminal {
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
    } */

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
