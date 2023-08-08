<script lang="ts">
    import { onMount } from "svelte";
    import Base from "./Base.svelte";
    import Desktop from "./Desktop.svelte";
    import Panel from "./components/Panel.svelte";
    import Dock from "./Dock.svelte";
    import { brightness, locked } from "./store";
    import BootScreen from "./components/BootScreen.svelte";

    let booting = true;

    onMount(() => {
        booting = false;
    });
</script>

{#if booting}
    <BootScreen />
{/if}
<main style:filter="brightness({$brightness}%)">
    <Panel />
    <Base />
    <Desktop />
    {#if !$locked}
        <Dock />
    {/if}
</main>
