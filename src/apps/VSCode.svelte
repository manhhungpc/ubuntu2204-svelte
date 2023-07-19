<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { topApp } from "src/store";

    // Make iframe on top the others if clicked/selected
    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-vscode") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set("vscode");
    }

    $: isTopApp = $topApp == "vscode";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="vscode"
    use:draggable={{ handle: ".window-bar", bounds: { top: 25 } }}
    on:click={setTopApp}
    class:top-app={isTopApp}
>
    <WindowBar name="vscode" />
    <div class="main-app">
        <iframe
            src="https://stackblitz.com/github/manhhungpc/ubuntu2204-svelte?file=README.md"
            title="vscode"
            frameborder="0"
            id="iframe-vscode"
        />
    </div>
</div>

<style>
    .vscode {
        position: absolute;
        inset: 10%;
        resize: both;
        overflow: hidden;
        border-radius: 12px;
    }

    .top-app {
        z-index: 9;
    }

    .main-app {
        background-color: var(--bg-window-bar);
        height: 100%;
        width: 100%;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>
