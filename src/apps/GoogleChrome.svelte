<script lang="ts">
    import WindowBar from "src/components/common/WindowBar.svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import { AppName } from "src/interfaces/AppName";
</script>

<SkelentonApp appName={AppName.ggchrome}>
    <WindowBar name="gg-chrome" />
    <div class="main-app">
        <iframe src="https://www.google.com/?igu=1" title="gg-chrome" frameborder="0" id="iframe-gg-chrome" />
    </div>
</SkelentonApp>

<style>
    .main-app {
        height: 100%;
        width: 100%;
        background-color: var(--bg-window-bar);
    }

    iframe {
        width: 100%;
        height: 100%;
    }
</style>
