<script lang="ts">
    import { Range } from "flowbite-svelte";
    import { brightness, audio } from "src/store";
    export let percent: number,
        isBrightness = false,
        isAudio = false;

    $: isBrightness && brightness.set(percent < 10 ? 10 : percent);
    $: isAudio && audio.set(percent);
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
