<script lang="ts">
    import { openApps, topApp } from "src/store";
    export let name = "";

    function onClose() {
        $openApps = $openApps.filter((e) => e.name != name);
        if ($openApps.length == 0) topApp.set("");
    }
</script>

<div class="window-bar">
    <div class="flex items-center w-full">
        <slot />
    </div>
    <div class="flex justify-end items-center h-[48px]">
        <button class="bar-button">
            <img src="/img/icons/window-minimize-symbolic.svg" alt="minimize" class="window-icon" />
        </button>
        <button class="bar-button">
            <img src="/img/icons/window-maximize-symbolic.svg" alt="minimize" class="window-icon" />
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
