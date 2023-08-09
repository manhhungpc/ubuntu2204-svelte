<script lang="ts">
    import { Button, Listgroup, Popover } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import Slider from "../common/Slider.svelte";
    import { fade } from "svelte/transition";

    const colorThemes = [
        "--main-orange",
        "--bark",
        "--sage",
        "--olive",
        "--viridian",
        "--prussian-green",
        "--blue",
        "--purple",
        "--magenta",
        "--red-theme",
    ];
    let isDarkTheme = true;

    let chooseColorTheme = "--main-orange",
        percent = (2 / 3) * 100;

    /**
     * The current iconSize is 48 - with max = 64 and min = 16
     * The below convert from percent (66.6) to iconSize (48) to display
     */
    $: iconSize = Math.round((percent / 100) * 48 + 16);
    $: console.log(`!border${chooseColorTheme.substring(1)}`);
</script>

<div class="wrap-appearance scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="wrap-styles">
        <div class="text-white text-sm font-bold mb-3">Style</div>
        <div class="styles">
            <div class="themes">
                <div class="grid grid-cols-2 gap-3">
                    <div class="w-full flex justify-center">
                        <button
                            class="w-max"
                            on:click={(e) => (isDarkTheme = false)}
                            class:choose-theme={!isDarkTheme}
                            style:border-color="var({chooseColorTheme})"
                        >
                            <img
                                src="/img/icons/ui/light-theme.png"
                                alt="light-theme"
                                class="rounded-md"
                                width="245"
                                height="145"
                            />
                        </button>
                    </div>
                    <div class="w-full flex justify-center">
                        <button
                            class="w-max"
                            on:click={(e) => (isDarkTheme = true)}
                            class:choose-theme={isDarkTheme}
                            style:border-color="var({chooseColorTheme})"
                        >
                            <img
                                src="/img/icons/ui/dark-theme.png"
                                alt="dark-theme"
                                class="rounded-sm"
                                width="245"
                                height="145"
                            />
                        </button>
                    </div>
                    <span class="text-center text-sm">Light</span>
                    <span class="text-center text-sm">Dark</span>
                </div>
            </div>
            <hr color="#000" class="border-none h-[1px] m-0" />
            <div class="flex items-center px-4 py-2">
                <span class="text-sm mr-3">Color</span>
                {#each colorThemes as theme}
                    {#if theme == chooseColorTheme}
                        <div style:border="3px solid var({theme})" class="rounded-[50%] ml-[20px]">
                            <button class="selected-btn-theme" style:background-color="var({theme})" />
                        </div>
                    {:else}
                        <button
                            class="btn-theme"
                            style:background-color="var({theme})"
                            on:click={(e) => (chooseColorTheme = theme)}
                        />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    <div class="desktop-icons">
        <div class="text-white text-sm font-bold mb-3">Desktop Icons</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button
                class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white"
                id="desktop-icons-1"
            >
                <span>Size</span>
                <div class="flex items-center gap-2">
                    Normal <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="bottom-end"
                triggeredBy="#desktop-icons-1"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Small</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Normal
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Large</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Tiny</button>
            </Popover>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button
                class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white"
                id="desktop-icons-2"
            >
                <span>Position of New Icons</span>
                <div class="flex items-center gap-2">
                    Top Left <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="bottom-end"
                triggeredBy="#desktop-icons-2"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Top Left
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Top Right</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Bottom Left</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Bottom Right</button>
            </Popover>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <span>Show Personal folder</span>
                <ToggleSwitch />
            </Button>
        </Listgroup>
    </div>
    <div class="dock">
        <div class="text-white text-sm font-bold mb-3">Dock</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <div>Auto-hide the Dock</div>
                    <div class="text-xs text-warm-grey">The dock hide when any windows overlap it.</div>
                </span>
                <ToggleSwitch />
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <span>Panel mode</span>
                    <div class="text-xs text-warm-grey">The dock extends to the screen edge.</div>
                </span>
                <ToggleSwitch />
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span>Icon size</span>
                <div class="w-60 z-0 flex flex-row items-center gap-3">
                    <span class="text-warm-grey">{iconSize % 2 === 0 ? iconSize : iconSize + 1}</span>
                    <Slider bind:percent step={4} />
                </div>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white" id="dock-1">
                <span>Show on</span>
                <div class="flex items-center gap-2">
                    Primary Display (1) <img
                        src="/img/icons/pan-down-symbolic.svg"
                        alt="dropdown"
                        width="20"
                        class="img-icon"
                    />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="top-end"
                triggeredBy="#dock-1"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">All displays</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Primary Display (1)
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
            </Popover>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white" id="dock-2">
                <span>Position on screen</span>
                <div class="flex items-center gap-2">
                    Left <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="top-end"
                triggeredBy="#dock-2"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Left
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Bottom</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Right</button>
            </Popover>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span>Congifure dock behavior</span>
                <img src="/img/icons/pan-end-symbolic.svg" alt="tick" width="20" class="img-icon ml-2" />
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-appearance {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 22px;
    }

    .wrap-styles,
    .desktop-icons,
    .dock {
        @apply w-[38rem] mb-10;
    }

    .styles {
        background-color: var(--bg-window-bar);
        color: #fff;
        border-radius: 12px;
    }

    .themes {
        padding: 15px;
    }

    .btn-theme {
        padding: 14px;
        margin-left: 20px;
        border-radius: 50%;
    }
    .selected-btn-theme {
        padding: 14px;
        border-radius: 50%;
        margin: 3px;
    }

    .choose-theme {
        @apply p-1 pb-[1px] rounded-lg border-4 border-solid border-main-orange;
    }

    @media screen and (max-height: 762px) {
        .btn-theme {
            padding: 12px;
            margin-left: 20px;
        }

        .selected-btn-theme {
            padding: 12px;
        }
    }
</style>
