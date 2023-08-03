<script lang="ts">
    import { onMount } from "svelte";
    import Base from "./Base.svelte";
    import Desktop from "./Desktop.svelte";
    import Panel from "./components/Panel.svelte";
    import { brightness } from "./store";
    import BootScreen from "./components/BootScreen.svelte";

    let booting = true;

    onMount(() => {
        setTimeout(() => {
            booting = false;
        }, 1500);
    });
</script>

<main style:filter="brightness({$brightness}%)">
    {#if booting}
        <BootScreen />
    {/if}
    <Panel />
    <Base />
    <Desktop />
</main>
