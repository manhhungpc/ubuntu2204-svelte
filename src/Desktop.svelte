<script lang="ts">
    import AppGrid from "./components/AppGrid.svelte";
    import Panel from "./components/Panel.svelte";
</script>

<main class="desktop">
    <Panel />
    <AppGrid />
</main>

<style>
    .desktop {
        width: 100vw;
        height: 100vh;
    }
</style>
