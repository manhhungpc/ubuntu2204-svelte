<script lang="ts">
    import { flip } from "svelte/animate";
    import { quintOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";
    let hovering = 0;

    const [send, receive] = crossfade({
        duration: (d) => Math.sqrt(d * 200),

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === "none" ? "" : style.transform;

            return {
                duration: 600,
                easing: quintOut,
                css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
            };
        },
    });
    let apps = [
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

    const dragStart = (event: DragEvent, target: any) => {
        const element = event.target as HTMLElement;
        const childImg = element.children[0];
        childImg.style.backgroundColor = "transparent";
        // childImg.style.opacity = "0.2";
        // element.style.backgroundColor = "transparent";
        // element.style.pointerEvents = "none";
        // element.style.position = "relative";
        // element.style.zIndex = "1";
        // element.style.transform = "translate(0, 0)";
        // element.style.pointerEvents = "none";

        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text/plain", target);
    };

    const dragging = (event: DragEvent) => {
        const element = event.target as HTMLElement;
        const childImg = element.children[0];
        childImg.style.backgroundColor = "transparent";
        childImg.style.opacity = "0.2";
        element.style.backgroundColor = "transparent";
    };

    const drop = (event: DragEvent, target: any) => {
        const element = event.target as HTMLElement;
        // element.style.border = "2px solid blue";
        element.style.backgroundColor = "transparent";

        event.dataTransfer.dropEffect = "move";
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = apps;

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
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
                in:receive={{ key: app.id }}
                out:send={{ key: app.id }}
                animate:flip
                draggable="true"
                on:dragstart={(event) => dragStart(event, i)}
                on:drag={(event) => dragging(event)}
                on:drop|preventDefault={(event) => drop(event, i)}
                ondragover="return false"
                on:dragenter={() => (hovering = i)}
                class:is-active={hovering === i}
            >
                <img src={app.imgSrc} alt={app.name} class="app-icon" />
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
        margin: 0.05rem 0.3rem;
        -webkit-user-drag: none;
    }

    .app-icon:hover {
        border-radius: 10px;
        background-color: var(--bg-light-white);
    }
</style>
