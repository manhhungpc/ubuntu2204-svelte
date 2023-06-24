<script lang="ts">
    import { flip } from "svelte/animate";
    import { quintOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";
    let hovering = 0,
        dragId = "";

    let apps = [
        {
            id: crypto.randomUUID(),
            name: "gg-chrome",
            imgSrc: "/img/apps/google-chrome.png",
        },
        {
            id: crypto.randomUUID(),
            name: "file-manager",
            imgSrc: "/img/apps/filemanager-app.png",
        },
        {
            id: crypto.randomUUID(),
            name: "vscode",
            imgSrc: "/img/apps/vscode.png",
        },
        {
            id: crypto.randomUUID(),
            name: "terminal",
            imgSrc: "/img/apps/terminal-app.png",
        },
        {
            id: crypto.randomUUID(),
            name: "setting",
            imgSrc: "/img/apps/system-settings.png",
        },
    ];

    const dragStart = (event: DragEvent, target: any) => {
        const sourceElement = event.target as HTMLElement;
        dragId = sourceElement.id;
        console.log("🚀 ~ file: Dock.svelte:54 ~ element:", sourceElement);
        sourceElement.style.cursor = "grabbing";

        const childImg = sourceElement.children[0];
        childImg.style.backgroundColor = "transparent";

        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text/plain", JSON.stringify({ sourceId: sourceElement.id, start: target }));
    };

    const dragging = (e: DragEvent) => {
        e.target.style.cursor = "grabbing";
    };

    const drop = (event: DragEvent, targetIndex: any) => {
        //event.target is a TARGET element, not the SOURCE element
        const targetElement = event.target as HTMLElement;

        event.dataTransfer.dropEffect = "move";
        const { sourceId, start } = JSON.parse(event.dataTransfer.getData("text/plain"));
        document.getElementById(
            sourceId
        ).children[0].style.cssText = `#${sourceId}:hover {background-color: var(--bg-light-white)}`;
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
</script>

<div class="wrap-dock">
    <div class="grid-apps">
        {#each apps as app, i (app.id)}
            <button
                class="btn-app"
                id={String(app.id)}
                animate:flip={{ duration: 300 }}
                draggable="true"
                on:dragstart={(event) => dragStart(event, i)}
                on:drag={(e) => dragging(e)}
                on:dragenter={() => (hovering = i)}
                on:dragover|preventDefault={(e) => {
                    // const placeholder = document.createElement("div");
                    // placeholder.style.cssText = `
                    //     height: 50px
                    // `;
                    // e.target.append(placeholder);
                    e.dataTransfer.dropEffect = "move";
                    return false;
                }}
                on:drop|preventDefault={(event) => drop(event, i)}
            >
                <img src={app.imgSrc} id={String(app.id)} alt={app.name} class="app-icon" />
            </button>
        {/each}
        <hr class="w-12 my-2" style="border-color: var(--warm-grey); border-width: 1px 0 0 0;" />
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
        z-index: 1;
        -webkit-user-drag: none;
    }

    .btn-app {
        margin: 1px 0.3rem;
        /* cursor: grabbing; */
    }

    .app-icon:hover {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }

    [draggable="true"] {
        z-index: 1;
    }
</style>
