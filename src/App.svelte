<script lang="ts">
    import Desktop from "./Desktop.svelte";
    import Dock from "./Dock.svelte";
    import { brightness } from "./store";
</script>

<main style:filter="brightness({$brightness}%)">
    <Desktop />
    <Dock />
</main>
