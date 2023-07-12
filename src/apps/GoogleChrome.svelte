<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { topApp } from "src/store";

    // Make iframe on top the others if clicked/selected
    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-gg-chrome") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set("gg-chrome");
    }

    $: isTopApp = $topApp == "gg-chrome";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="gg-chrome"
    use:draggable={{ handle: ".window-bar", bounds: { top: 25 } }}
    on:click={setTopApp}
    class:top-app={isTopApp}
>
    <WindowBar name="gg-chrome" />
    <div class="main-app">
        <iframe src="https://www.google.com/?igu=1" title="gg-chrome" frameborder="0" id="iframe-gg-chrome" />
    </div>
</div>

<style>
    .gg-chrome {
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
        /* display: flex; */
        /* position: absolute; */
        height: 100%;
        width: 100%;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>
