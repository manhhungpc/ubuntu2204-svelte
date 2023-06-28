<script lang="ts">
    import { Range } from "flowbite-svelte";
    export let percent: number;
</script>

<Range bind:value={percent} size="sm" class="w-full accent-white bg-transparent" id="slider" />
<div class="bottom-slider">
    <div class="bg-soft-white" style="height: 5px; border-radius: 3px; width: 100%;" />
</div>
<div class="overlay">
    <div class="bg-main-orange" style="height: 5px; border-radius: 3px; width: {percent}%;" />
</div>

<style>
    .overlay {
        width: 78%;
        position: absolute !important;
        margin: 0 auto !important;
        left: 9%;
        right: 0;
        z-index: -1;
    }
    .bottom-slider {
        width: 78%;
        position: absolute !important;
        margin: 0 auto !important;
        left: 9%;
        right: 0;
        z-index: -1;
    }
</style>
