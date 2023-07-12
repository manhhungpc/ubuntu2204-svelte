<script lang="ts">
    import Base from "./Base.svelte";
    import Desktop from "./Desktop.svelte";
    import Dock from "./Dock.svelte";
    import Panel from "./components/Panel.svelte";
    import { brightness } from "./store";
</script>

<main style:filter="brightness({$brightness}%)">
    <Panel />
    <Base />
    <Desktop />
    <Dock />
</main>
