<script lang="ts">
    import { openApps, topApp, maximize } from "src/store";
    export let name: string,
        classStyle = "";

    function onClose() {
        $openApps = $openApps.filter((e) => e.name != name);
        if ($openApps.length == 0) topApp.set("");
    }

    function onMaximize() {
        if ($maximize.find((m) => m == name)) {
            $maximize = $maximize.filter((m) => m != name);
        } else {
            $maximize = [...$maximize, name];
        }
    }

    $: console.log($maximize);
</script>

<div class="window-bar">
    <div class="flex items-center w-full {classStyle}">
        <slot />
    </div>
    <div class="flex justify-end items-center h-[48px]">
        <button class="bar-button">
            <img src="/img/icons/window-minimize-symbolic.svg" alt="minimize" class="window-icon" />
        </button>
        <button class="bar-button" on:click={onMaximize}>
            {#if $maximize.find((m) => m == name)}
                <img src="/img/icons/window-restore-symbolic.svg" alt="minimize" class="window-icon" />
            {:else}
                <img src="/img/icons/window-maximize-symbolic.svg" alt="maximize" class="window-icon" />
            {/if}
        </button>
        <button class="bar-button" on:click={onClose}>
            <img src="/img/icons/window-close-symbolic.svg" alt="minimize" class="window-icon" />
        </button>
    </div>
</div>

<style>
    .window-bar {
        display: flex;
        justify-content: space-between;
        height: 48px;
        background-color: var(--bg-window-bar);
    }

    .bar-button {
        @apply rounded-[50%] p-[4px] mx-2 flex items-center;
        background-color: #373737;
    }

    .window-icon {
        height: 16px;
        filter: brightness(0) invert(1);
        border-radius: 50%;
    }
</style>
