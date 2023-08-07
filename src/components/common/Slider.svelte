<script lang="ts">
    import { Range } from "flowbite-svelte";
    import { brightness, audio } from "src/store";
    export let percent: number,
        isBrightness = false,
        isAudio = false,
        min = 0,
        max = 100,
        step = 1;

    $: isBrightness && brightness.set(percent < 10 ? 10 : percent);
    $: isAudio && audio.set(percent);
</script>

<div class="flex flex-col items-centerh-min w-full">
    <Range bind:value={percent} {min} {max} {step} size="sm" class="w-full !accent-white bg-soft-white" id="slider" />
    <div class="overlay">
        <div class="bg-main-orange" style="height: 4px; border-radius: 3px; width: {percent}%;" />
    </div>
</div>

<style>
    .overlay {
        /* margin: 0 auto !important; */
        position: relative;
        top: -5px;
        left: 1px;
        z-index: -1;
    }
</style>
