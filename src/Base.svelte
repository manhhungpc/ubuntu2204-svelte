<script lang="ts">
    import { Input } from "flowbite-svelte";
    import Carousel from "svelte-carousel";
    import { fly } from "svelte/transition";
    import { openApps, showApplication, topApp } from "src/store";
    import { AppName } from "./interfaces/AppName";

    let carousel; // for calling methods of the carousel instance
    const apps_first = [
        { name: AppName.calculator, displayName: "Calculator", icon: "/img/apps/accessories-calculator.png" },
        { displayName: "Text Editor", icon: "/img/apps/text-editor.png" },
        { displayName: "Additional Drivers", icon: "/img/apps/cpu-x.png" },
        { displayName: "AisleRiot Solitaire", icon: "/img/apps/gnome-aisleriot.png" },
        { displayName: "Calendar", icon: "/img/apps/calendar-app.png" },
        { displayName: "Language Support", icon: "/img/apps/preferences-desktop-locale.png" },
        { displayName: "Videos", icon: "/img/apps/applications-multimedia.png" },
        { displayName: "Document Scanner", icon: "/img/apps/scanner.png" },
        { displayName: "Disks", icon: "/img/apps/disk-utility-app.png" },
        { displayName: "Help", icon: "/img/apps/system-help.png" },
        { displayName: "Mines", icon: "/img/apps/gnome-mines.png" },
        { displayName: "Cheese", icon: "/img/apps/cheese.png" },
        { displayName: "Settings", icon: "/img/apps/system-settings.png" },
        { displayName: "Shotwell", icon: "/img/apps/shotwell.png" },
        { displayName: "Power Statistics", icon: "/img/apps/power-statistics.png" },
        { displayName: "Sudoku", icon: "/img/apps/sudoku-app.png" },
        { displayName: "Ubuntu Software", icon: "/img/apps/software-center.png" },
        { displayName: "Rhythmbox", icon: "/img/apps/rhythmbox.png" },
    ];
    const apps_second = [
        { displayName: "Softwares & Updates", icon: "/img/apps/software-properties.png" },
        { displayName: "Software Updater", icon: "/img/apps/software-updater.png" },
        { displayName: "Startup Disk Creator", icon: "/img/apps/usb-creator-gtk.png" },
        { displayName: "To Do", icon: "/img/apps/to-do-app.png" },
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

    async function loadComponent(name: string) {
        if (name === AppName.calculator) {
            return (await import(`./apps/Calculator.svelte`)).default;
        }
        return null;
    }

    async function open(name: string, img: string) {
        $showApplication = false;
        const component = await loadComponent(name);
        if (!component) return;

        // if app already open, return
        if ($openApps.find((app) => app.name === name)) return;
        openApps.update((opens) => [...opens, { name, component, img }]);
        topApp.set(name);
    }
</script>

<div class="base">
    <main class="main-screen">
        <div class="h-[40vh]">
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
                            <button class="button-app" on:click={async () => await open(app.name, app.icon)}>
                                <div class="rounded-xl">
                                    <img src={app.icon} alt={app.displayName} width="90" />
                                    <div class="text-base leading-tight">
                                        {app.displayName}
                                    </div>
                                </div>
                            </button>
                        {/each}
                    </div>
                    <div class="grid grid-cols-8 h-full gap-x-8 gap-y-6" style="grid-auto-rows: 1fr;">
                        {#each apps_second as app}
                            <button class="button-app">
                                <div class="rounded-xl">
                                    <img src={app.icon} alt={app.displayName} width="90" />
                                    <div class="text-base leading-tight">
                                        {app.displayName}
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
        height: calc(100vh - 1.7rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .all-apps {
        height: 100%;
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
