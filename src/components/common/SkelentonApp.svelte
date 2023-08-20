<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import { maximize, openApps, topApp } from "src/store";
    import { fly, scale } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { AppName } from "src/interfaces/AppName";

    export let appName: string,
        addStyles = "",
        focusOnLine = () => {};
    let xPos: number,
        yPos: number,
        opened = false;

    // Make iframe on top the others if clicked/selected
    window.addEventListener("blur", function () {
        window.setTimeout(function () {
            if (document.activeElement == document.getElementById(`iframe-${appName}`)) {
                setTopApp();
            }
        }, 0);
    });

    function setTopApp() {
        if ($openApps.length == 0) topApp.set("");
        else topApp.set(appName);
        if (appName == AppName.terminal) focusOnLine();
    }

    function scaleInOut(node, { duration, scale }) {
        return {
            duration,
            css: (t, u) => {
                const eased = cubicOut(t);

                return `transform: scale(${1 - (1 - scale) * u}) translate(${xPos}px, ${yPos}px);
                        opacity: ${eased};`;
            },
        };
    }

    $: isTopApp = $topApp == appName;
    $: opened = $openApps.some((app) => app.name == appName);
</script>

{#if opened}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="skelenton"
        use:draggable={{
            handle: ".window-bar",
            bounds: { top: 24, left: -2000, right: -2000, bottom: -2000 },
            onDragEnd: ({ offsetX, offsetY }) => {
                xPos = offsetX;
                yPos = offsetY;
            },
        }}
        on:click={setTopApp}
        class:top-app={isTopApp}
        class:maximize={$maximize.find((m) => m == appName)}
        style={addStyles}
        in:scale={{ duration: 200, opacity: 0, start: 0.8, easing: cubicOut }}
        out:scaleInOut={{ duration: 200, scale: 0.8 }}
    >
        <slot />
    </div>
{/if}

<style>
    .skelenton {
        position: absolute;
        /* inset: 10%; */
        top: 10%;
        left: 10%;
        height: 85vh;
        width: 85vw;
        resize: both;
        overflow: hidden;
        border-radius: 12px;
        border: 1px solid #000;
        /* transition-property: top, left;
        transition-duration: 0.3s; */
    }

    .maximize {
        transform: translate3d(0px, 0px, 0px) !important;
        transition: all 0.3s;
        height: calc(100vh - 1.7rem) !important;
        width: calc(100vw - 72px) !important;
        top: 1.65rem !important;
        left: 72px !important;
        border-radius: 0;
        /* animation: entrance 0.2s forwards; */
    }

    .top-app {
        z-index: 9;
    }
</style>
