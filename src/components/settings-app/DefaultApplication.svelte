<script lang="ts">
    import { Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";

    let defaultApp = [
        {
            title: "Web",
            icon: "/img/apps/google-chrome.png",
            name: "Google Chrome",
        },
        {
            title: "Mail",
            disabled: true,
        },
        {
            title: "Calendar",
            icon: "/img/apps/calendar-app.png",
            name: "Calendar",
        },
        {
            title: "Music",
            icon: "/img/apps/applications-multimedia.png",
            name: "Videos",
        },
        {
            title: "Video",
            icon: "/img/apps/applications-multimedia.png",
            name: "Videos",
        },
        {
            title: "Photos",
            icon: "/img/apps/shotwell.png",
            name: "Shotwell Viewer",
        },
    ];
</script>

<div class="wrap-defapp" in:fade={{ duration: 150 }}>
    <div class="default-apps">
        {#each defaultApp as app, i}
            <div class="flex items-center justify-center gap-3 text-warm-grey">
                <div class="w-28 text-end text-sm">{app.title}</div>
                {#if app.disabled}
                    <div class="w-full mb-2 rounded-md" style="border: 1px solid #000;" id="defapp-{i}">
                        <Button class="flex justify-end w-full py-2 bg-dark-3 hover:bg-dark-3 text-white">
                            <div class="flex items-center justify-end gap-2 w-full">
                                <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" />
                            </div>
                        </Button>
                    </div>
                {:else}
                    <div class="w-full mb-2 rounded-lg" style="border: 1px solid #000;">
                        <Button
                            class="flex justify-between w-full py-2 bg-darker-white hover:bg-light-white text-white"
                            id="defapp-{i}"
                        >
                            <div class="flex items-center justify-between w-full">
                                <div class="flex items-center gap-2">
                                    <img src={app.icon} alt="dropdown" width="20" />
                                    {app.name}
                                </div>
                                <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" />
                            </div>
                        </Button>
                    </div>
                {/if}
                <Popover
                    class="flex flex-col w-max z-40 bg-dark-1"
                    trigger="click"
                    placement="bottom-end"
                    triggeredBy="#defapp-{i}"
                    defaultClass={app.disabled && ""}
                >
                    {#if app.disabled}
                        <div />
                    {:else}
                        <button class="flex items-center gap-3 w-full text-start text-white p-3 hover:bg-dark-2">
                            <img src={app.icon} alt="dropdown" width="20" />

                            {app.name}
                        </button>
                    {/if}
                </Popover>
            </div>
        {/each}
    </div>
</div>

<style>
    .wrap-defapp {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 22px;
        /* width: 18rem; */
    }

    .default-apps {
        width: 19rem;
        margin-bottom: 10px;
    }
</style>
