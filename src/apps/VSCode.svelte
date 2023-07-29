<script lang="ts">
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<SkelentonApp appName={AppName.vscode}>
    <WindowBar name="vscode" />
    <div class="main-app">
        <iframe
            src="https://stackblitz.com/github/manhhungpc/ubuntu2204-svelte?embed=1&file=README.md"
            title="vscode"
            frameborder="0"
            id="iframe-vscode"
        />
    </div>
</SkelentonApp>

<style>
    .main-app {
        background-color: var(--bg-window-bar);
        height: 100%;
        width: 100%;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>
