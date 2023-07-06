<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
</script>

<div class="gg-chrome" use:draggable={{ handle: ".window-bar" }}>
    <WindowBar name="gg-chrome" />
    <div class="main-app">
        <iframe src="https://www.google.com/?igu=1" title="gg-chrome" frameborder="0" />
    </div>
</div>

<style>
    .gg-chrome {
        position: absolute;
        inset: 10%;
        resize: both;
        overflow: hidden;
        border-radius: 12px;
    }

    .main-app {
        /* display: flex; */
        /* position: absolute; */
        height: 100%;
        width: 100%;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>
