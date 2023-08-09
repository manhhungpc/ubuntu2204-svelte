<script lang="ts">
    import AppGrid from "./components/AppGrid.svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { locked, openApps, prompts, showApplication, background } from "src/store";
    import { AppName } from "./interfaces/AppName";
    import LockScreen from "./components/LockScreen.svelte";
    import { fade } from "svelte/transition";

    const scale = tweened(1, { duration: 300, easing: cubicOut });
    const xPos = tweened(0, { duration: 300, easing: cubicOut });
    const yPos = tweened(0, { duration: 300, easing: cubicOut });

    $: {
        scale.set($showApplication ? 0.15 : 1);
        xPos.set($showApplication ? 2 : 0);
        yPos.set($showApplication ? -28 : 0);
    }

    $: if (!$openApps.some((app) => app.name == AppName.terminal)) {
        prompts.set([{ done: false, file: "" }]);
    }
</script>

{#if $locked}
    <LockScreen />
{/if}
<main class="desktop" style:transform="translate({$xPos}vw, {$yPos}vh) scale({$scale})">
    {#key $background}
        <div class="background-img" style:background-image="url({$background})" transition:fade />
    {/key}
    <AppGrid />
    {#each $openApps as app}
        <svelte:component this={app.component} />
    {/each}
</main>

<style>
    .desktop {
        width: 100vw;
        height: 100vh;
        /* background-image: url(/img/Wallpaper/Jammy-Jellyfish_WP_1920x1080.webp); */
    }
    .background-img {
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
</style>
