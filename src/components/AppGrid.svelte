<script lang="ts">
    import { AppName } from "src/interfaces/AppName";
    import { showApp } from "src/utils/open";

    async function loadComponent() {
        return (await import(`../apps/FileManager.svelte`)).default;
    }
</script>

<div class="wrap-app-grid">
    <button
        class="flex flex-col justify-start items-center"
        on:click={async (e) => {
            const component = await loadComponent();
            showApp(AppName.filemanager, component, "/img/apps/filemanager-app.png");
        }}
    >
        <img src="/img/apps/user-home.png" alt="home-folder" class="app-item" />
        <span class="text-white text-base">Home</span>
    </button>
</div>

<style>
    .wrap-app-grid {
        position: absolute;
        top: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        /* margin-top: 1.7rem; */
        margin-top: 1.7rem; /* Panel */
        padding-left: 72px; /* Dock */
        height: calc(100% - 1.7rem);
        width: calc(100% - 72px);
    }

    .app-item {
        /* position: absolute;
        top: 1.7rem;
        left: 5rem; */
        width: 70px;
    }

    @media screen and (max-width: 1440px) {
        .wrap-app-grid {
            grid-template-columns: repeat(9, 1fr);
        }
    }
    @media screen and (max-height: 762px) {
        .wrap-app-grid {
            grid-template-rows: repeat(8, 1fr);
        }
    }
</style>
