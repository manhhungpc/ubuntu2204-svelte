<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { topApp } from "src/store";

    const promptUser = "user@user-administrator:";
    const prefix = "~$";

    // Make iframe on top the others if clicked/selected
    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-terminal") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set("terminal");
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
    <WindowBar name="terminal" />
    <div class="main-app">
        <div>
            <div>someline ...</div>
            <div>
                <div>{promptUser}<span>{prefix}</span></div>
                <textarea />
            </div>
        </div>
    </div>
</div>

<style>
    .terminal {
        height: 20vh;
        width: 20vw;
        background-color: var(--dark-purple);
    }
</style>
