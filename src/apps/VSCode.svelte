<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
</script>

<div class="vscode" use:draggable={{ handle: ".window-bar" }}>
    <WindowBar />
    <div class="main-app">
        <iframe
            src="https://stackblitz.com/github/manhhungpc/ubuntu2204-svelte?file=README.md"
            title="vscode"
            frameborder="0"
        />
    </div>
</div>

<style>
    .vscode {
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
