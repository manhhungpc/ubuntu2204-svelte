<script lang="ts">
    const apps = [
        {
            id: 0,
            name: "gg-chrome",
            imgSrc: "/img/apps/google-chrome.png",
        },
        {
            id: 1,
            name: "file-manager",
            imgSrc: "/img/apps/filemanager-app.png",
        },
        {
            id: 2,
            name: "vscode",
            imgSrc: "/img/apps/vscode.png",
        },
        {
            id: 3,
            name: "terminal",
            imgSrc: "/img/apps/terminal-app.png",
        },
        {
            id: 4,
            name: "setting",
            imgSrc: "/img/apps/system-settings.png",
        },
    ];
</script>

<div class="wrap-dock">
    <div class="grid-apps">
        {#each apps as app, i}
            <button class="btn-app">
                <img src={app.imgSrc} alt={app.name} class="app-icon" />
            </button>
            {#if i === 3}
                <hr class="w-12 my-2" style="border-color: var(--warm-grey); border-width: 1px 0 0 0;" />
            {/if}
        {/each}
    </div>
    <button class="mb-1">
        <img src="/img/icons/view-app-grid-symbolic.svg" alt="show-app" class="icon-show-app" />
    </button>
</div>

<style>
    .wrap-dock {
        @apply absolute flex flex-col justify-between;
        left: 0;
        top: 1.7rem;
        width: 72px;
        height: calc(100vh - 1.7rem); /* minus the panel height*/
        background-color: var(--bg-dark-trans);
    }

    .grid-apps {
        display: flex;
        flex-direction: column;
        margin-top: 0.75rem;
    }

    .icon-show-app {
        filter: brightness(0) invert(1);
        width: 50px;
        padding: 0.4rem;
    }

    .icon-show-app:hover {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }

    /* find way to style active apps with dots*/
    .app-active:before {
        content: "\A";
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #b83b3b;
        margin: 0 12px;
        display: block;
        position: absolute;
        top: 2.5rem;
        right: 50px;
    }

    .app-icon {
        width: 50px;
        padding: 0.4rem;
        margin: 0.08rem 0.3rem;
    }

    .app-icon:hover {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }
</style>
