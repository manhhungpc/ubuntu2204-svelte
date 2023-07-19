<script lang="ts">
    import { flip } from "svelte/animate";
    import { openApps, showApplication, topApp } from "src/store";
    let hovering = 0,
        drag = false,
        dragId = "";

    // change to dynamic import
    let apps = [
        {
            id: crypto.randomUUID(),
            name: "gg-chrome",
            imgSrc: "/img/apps/google-chrome.png",
            componentPath: "./apps/GoogleChrome.svelte",
        },
        {
            id: crypto.randomUUID(),
            name: "file-manager",
            imgSrc: "/img/apps/filemanager-app.png",
            componentPath: null,
        },
        {
            id: crypto.randomUUID(),
            name: "vscode",
            imgSrc: "/img/apps/vscode.png",
            componentPath: "./apps/VSCode.svelte",
        },
        {
            id: crypto.randomUUID(),
            name: "terminal",
            imgSrc: "/img/apps/terminal-app.png",
            componentPath: null,
        },
        {
            id: crypto.randomUUID(),
            name: "setting",
            imgSrc: "/img/apps/system-settings.png",
            componentPath: "./apps/Setting.svelte",
        },
    ];

    async function loadComponent(path: string) {
        return (await import(/* @vite-ignore */ path)).default;
    }

    function open(name: string, component: any, img: string) {
        if ($openApps.find((app) => app.name === name)) return;
        openApps.update((opens) => (opens = [...opens, { name, component, img }]));
        topApp.set(name);
    }

    const dragStart = (event: DragEvent, target: any) => {
        const sourceElement = event.target as HTMLElement;
        dragId = sourceElement.id;
        drag = true;

        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text/plain", JSON.stringify({ sourceId: sourceElement.id, start: target }));
    };

    const dragging = (e: DragEvent) => {
        drag = true;
    };

    const dragEnd = (e: any) => {
        drag = false;
    };

    const drop = (event: DragEvent, targetIndex: any) => {
        drag = false;
        //event.target is a TARGET element, not the SOURCE element
        const targetElement = event.target as HTMLElement;

        event.dataTransfer.dropEffect = "move";
        const { sourceId, start } = JSON.parse(event.dataTransfer.getData("text/plain"));
        const newTracklist = apps;

        if (start < targetIndex) {
            newTracklist.splice(targetIndex + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(targetIndex, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        apps = newTracklist;
        hovering = null;
    };

    $: console.log($topApp);
</script>

<div class="wrap-dock" class:show-app-bg={$showApplication}>
    <div class="grid-apps">
        {#each apps as app, i (app.id)}
            <button
                class="btn-app"
                id={String(app.id)}
                animate:flip={{ duration: 300 }}
                draggable="true"
                on:click={async (e) => {
                    const component = await loadComponent(app.componentPath);
                    open(app.name, component, app.imgSrc);
                }}
                on:dragstart={(event) => dragStart(event, i)}
                on:drag={(e) => dragging(e)}
                on:dragend={(e) => dragEnd(e)}
                on:dragenter={(e) => (hovering = i)}
                on:dragover|preventDefault={(e) => {
                    e.dataTransfer.dropEffect = "move";
                    return false;
                }}
                on:drop|preventDefault={(event) => drop(event, i)}
                class:drag={drag && app.id == dragId}
                class:end-drag={!drag}
            >
                {#if $topApp === app.name}
                    <div class="top-app" />
                {/if}
                <img
                    src={app.imgSrc}
                    id={String(app.id)}
                    alt={app.name}
                    class="app-icon"
                    class:top-app={$topApp === app.name}
                />
            </button>
        {/each}
        <hr class="w-12 my-2" style="border-color: var(--warm-grey); border-width: 1px 0 0 0;" />
    </div>
    <button class="mb-1" on:click={(e) => showApplication.update((curr) => !curr)}>
        <img
            src="/img/icons/view-app-grid-symbolic.svg"
            alt="show-app"
            class="icon-show-app"
            class:show-app-active={$showApplication}
        />
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
        z-index: 98;
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

    .show-app-bg {
        background-color: var(--bg-dark-1);
    }
    .show-app-active {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }

    /* find way to style active apps with dots*/
    .top-app {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }
    .top-app::before {
        content: "\A";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #b83b3b;
        margin-top: 40%;
        position: absolute;
        left: 5px;
    }

    .app-icon {
        width: 50px;
        padding: 0.4rem;
        z-index: 1;
        -webkit-user-drag: none;
    }

    .app-icon:hover {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }

    .btn-app {
        margin: 1px 0.3rem;
    }

    [draggable="true"] {
        z-index: 1;
    }

    .drag,
    .drag img {
        background-color: transparent !important;
        cursor: -webkit-grabbing !important;
        cursor: url("/cursor/dnd-none-24x24.png") grabbing !important;
        /* border: 1px solid red; */
    }

    .drag {
        margin: 1px 0.3rem;
    }

    .end-drag {
        margin: 1px 0.3rem;
    }
</style>
