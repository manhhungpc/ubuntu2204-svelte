<script lang="ts">
    import AppGrid from "./components/AppGrid.svelte";
    import Panel from "./components/Panel.svelte";
    // import VsCode from "./apps/VSCode.svelte";
    import { openApps } from "src/store";

    $: console.log($openApps);
</script>

<main class="desktop">
    <Panel />
    <AppGrid />
    {#each $openApps as app}
        <svelte:component this={app.component} />
    {/each}
</main>

<style>
    .desktop {
        width: 100vw;
        height: 100vh;
        background-image: url(/img/Wallpaper/Jammy-Jellyfish_WP_2560x1440.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
</style>
