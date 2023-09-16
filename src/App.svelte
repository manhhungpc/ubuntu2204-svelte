<script lang="ts">
    import { onMount } from "svelte";
    import Base from "./Base.svelte";
    import Desktop from "./Desktop.svelte";
    import Panel from "./components/Panel.svelte";
    import Dock from "./Dock.svelte";
    import { brightness, locked } from "./store";
</script>

<svelte:head>
    <link rel="preload" as="image" href="/img/Wallpaper/Jammy-Jellyfish_WP_2560x1440.png" />
</svelte:head>
<main style:filter="brightness({$brightness}%)">
    <Panel />
    <Base />
    <Desktop />
    {#if !$locked}
        <Dock />
    {/if}
</main>
