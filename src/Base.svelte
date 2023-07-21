<script lang="ts">
    import { Input } from "flowbite-svelte";
    import Carousel from "svelte-carousel";
    import { fly } from "svelte/transition";
    import { showApplication } from "src/store";

    let carousel; // for calling methods of the carousel instance
    const apps_first = [
        { name: "Additional Drivers", icon: "/img/apps/cpu-x.png" },
        { name: "AisleRiot Solitaire", icon: "/img/apps/gnome-aisleriot.png" },
        { name: "Calendar", icon: "/img/apps/calendar-app.png" },
        { name: "Language Support", icon: "/img/apps/preferences-desktop-locale.png" },
        { name: "Videos", icon: "/img/apps/applications-multimedia.png" },
        { name: "Text Editor", icon: "/img/apps/text-editor.png" },
        { name: "Document Scanner", icon: "/img/apps/scanner.png" },
        { name: "Disks", icon: "/img/apps/disk-utility-app.png" },
        { name: "Help", icon: "/img/apps/system-help.png" },
        { name: "Mines", icon: "/img/apps/gnome-mines.png" },
        { name: "Cheese", icon: "/img/apps/cheese.png" },
        { name: "Settings", icon: "/img/apps/system-settings.png" },
        { name: "Shotwell", icon: "/img/apps/shotwell.png" },
        { name: "Power Statistics", icon: "/img/apps/power-statistics.png" },
        { name: "Sudoku", icon: "/img/apps/sudoku-app.png" },
        { name: "Ubuntu Software", icon: "/img/apps/software-center.png" },
        { name: "Rhythmbox", icon: "/img/apps/rhythmbox.png" },
    ];
    const apps_second = [
        { name: "Softwares & Updates", icon: "/img/apps/software-properties.png" },
        { name: "Software Updater", icon: "/img/apps/software-updater.png" },
        { name: "Startup Disk Creator", icon: "/img/apps/usb-creator-gtk.png" },
        { name: "To Do", icon: "/img/apps/to-do-app.png" },
    ];

    const swipingHorizontal = (e: WheelEvent) => {
        let directionX = e.deltaX;

        if (directionX > 0) {
            // swipe right
            carousel.goToNext();
        } else {
            // swipe left
            carousel.goToPrev();
        }
    };
</script>

<div class="base">
    <main class="main-screen">
        <div class="h-[31vh]">
            <Input
                placeholder="Type to search"
                size="lg"
                class="bg-dark-1 w-[18rem] py-2 rounded-full border-none placeholder-white text-white"
            >
                <img
                    slot="left"
                    aria-hidden="true"
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search"
                    class="w-5 h-5"
                />
            </Input>
        </div>

        {#if $showApplication}
            <div class="all-apps" on:wheel={(e) => swipingHorizontal(e)} transition:fly={{ y: 500, duration: 300 }}>
                <Carousel
                    infinite={false}
                    arrows={false}
                    swiping={true}
                    duration={400}
                    bind:this={carousel}
                    let:currentPageIndex
                    let:pagesCount
                    let:showPage
                >
                    <div class="grid grid-cols-8 h-full gap-x-8 gap-y-6">
                        {#each apps_first as app}
                            <button class="button-app">
                                <div class="rounded-xl">
                                    <img src={app.icon} alt={app.name} width="90" />
                                    <div class="text-base leading-tight">
                                        {app.name}
                                    </div>
                                </div>
                            </button>
                        {/each}
                    </div>
                    <div class="grid grid-cols-8 h-full gap-x-8 gap-y-6" style="grid-auto-rows: 1fr;">
                        {#each apps_second as app}
                            <button class="button-app">
                                <div class="rounded-xl">
                                    <img src={app.icon} alt={app.name} width="90" />
                                    <div class="text-base leading-tight">
                                        {app.name}
                                    </div>
                                </div>
                            </button>
                        {/each}
                        {#each { length: 14 } as _, i}
                            <div class="h-full" />
                        {/each}
                    </div>
                    <div slot="dots" class="flex gap-6 absolute bottom-3">
                        {#each { length: 2 } as _, i}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <button
                                class:active-dot={currentPageIndex == i}
                                class="dots"
                                on:click={() => showPage(i)}
                            />
                        {/each}
                    </div>
                </Carousel>
            </div>
        {/if}
    </main>
</div>

<style>
    .base {
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        background-color: #222222;
    }

    .main-screen {
        margin-left: 72px;
        margin-top: calc(1.7rem + 1.7rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .all-apps {
        height: calc(70vh - 3.4rem);
        width: calc(80vw - 72px);
    }

    .button-app {
        @apply flex flex-col justify-center items-center text-white;
        /* grid-column: span 1;
        grid-row: span 1; */
        /* white-space: normal;
        overflow: hidden; */
    }

    .button-app:hover {
        white-space: normal;
        overflow: visible;
        background-color: var(--bg-darker-white);
        border-radius: 12px;
    }

    .dots {
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background-color: var(--bg-soft-white);
        transition: all 0.2s ease-in-out;
    }

    .active-dot {
        transform: scale(1.3);
        background-color: var(--white);
    }
</style>
