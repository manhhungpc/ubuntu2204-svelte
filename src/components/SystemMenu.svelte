<script lang="ts">
    import { AccordionItem, Accordion } from "flowbite-svelte";
    import Slider from "./common/Slider.svelte";
    import { onMount } from "svelte";
    import { brightness, audio } from "src/store";

    let audioLevel = $audio,
        brightnessLevel = $brightness,
        audioImg = "";

    let menuDropdown = [],
        battery: any;
    onMount(async () => {
        //@ts-ignore
        battery = navigator.getBattery ? await navigator.getBattery() : {};
        menuDropdown = [
            {
                name: "WiFi",
                icon: "/img/icons/network-signal-good-symbolic.svg",
                subOptions: ["Select Network", "Turn Off", "Wi-Fi Settings"],
            },
            {
                name: "Bluetooth",
                icon: "/img/icons/bluetooth-active-symbolic.svg",
                subOptions: ["Turn Off", "Bluetooth Settings"],
            },
            {
                name: battery.charging ? "Charging" : "Not Charging",
                icon: "/img/icons/battery-80-symbolic.svg",
                subOptions: ["Power Settings"],
            },
            {
                name: "Balanced",
                icon: "/img/icons/power-profile-balanced-symbolic.svg",
                subOptions: ["Balanced", "Power Saver", "Power Settings"],
            },
        ];
    });

    $: {
        if ($audio === 0) {
            audioImg = "/img/icons/audio-volume-muted-symbolic.svg";
        } else if ($audio < 33) {
            audioImg = "/img/icons/audio-volume-low-symbolic.svg";
        } else if ($audio < 66) {
            audioImg = "/img/icons/audio-volume-medium-symbolic.svg";
        } else {
            audioImg = "/img/icons/audio-volume-high-symbolic.svg";
        }
    }
</script>

<div class="cont-menu">
    <div class="flex items-center menu-item">
        <img src={audioImg} alt="audio" class="menu-icon" />
        <Slider percent={audioLevel} isAudio={true} />
    </div>
    <div class="flex items-center menu-item">
        <img src="/img/icons/display-brightness-symbolic.svg" alt="brightness" class="menu-icon" />
        <Slider percent={brightnessLevel} isBrightness={true} />
    </div>
    <hr class="bg-soft-white border-none h-[1px] w-[96%]" />

    <Accordion flush>
        {#each menuDropdown as item}
            <AccordionItem
                paddingFlush=""
                transitionParams={{ duration: 250 }}
                class="px-[10px] h-[35px] hover:bg-light-white !rounded-[5px]"
            >
                <span slot="header" class="flex items-center text-sm">
                    <img src={item.icon} alt={item.name} class="menu-icon" />{item.name}
                </span>
                <div slot="arrowdown">
                    <img src="/img/icons/pan-end-symbolic.svg" alt="arrow-end" class="menu-icon !m-0" />
                </div>
                <div slot="arrowup">
                    <img src="/img/icons/pan-down-symbolic.svg" alt="arrow-end" class="menu-icon !m-0" />
                </div>
                <div class="dropdown">
                    {#each item.subOptions as subOption}
                        <button class="dropdown-item">{subOption}</button>
                    {/each}
                    <!-- <button class="dropdown-item">Turn Off</button>
                <button class="dropdown-item">Wi-Fi Settings</button> -->
                </div>
            </AccordionItem>
        {/each}
    </Accordion>
    <hr class="bg-soft-white border-none h-[1px] w-[96%]" />

    <button class="flex items-center w-full menu-item">
        <img src="/img/icons/system-settings-symbolic.svg" alt="setting" class="menu-icon" />
        <div class="flex justify-between items-center w-full">
            <span class="text-sm">Settings</span>
        </div>
    </button>
    <button class="flex items-center w-full menu-item">
        <img src="/img/icons/lock-symbolic.svg" alt="setting" class="menu-icon" />
        <div class="flex justify-between items-center w-full">
            <span class="text-sm">Lock</span>
        </div>
    </button>

    <Accordion flush>
        <AccordionItem
            paddingFlush=""
            transitionParams={{ duration: 250 }}
            class="px-[10px] h-[35px] hover:bg-light-white !rounded-[5px]"
        >
            <span slot="header" class="flex items-center text-sm">
                <img src="/img/icons/system-shutdown-symbolic.svg" alt="shutdown" class="menu-icon" />
                Power Off / Log Out
            </span>
            <div slot="arrowdown">
                <img src="/img/icons/pan-end-symbolic.svg" alt="arrow-end" class="menu-icon !m-0" />
            </div>
            <div slot="arrowup">
                <img src="/img/icons/pan-down-symbolic.svg" alt="arrow-end" class="menu-icon !m-0" />
            </div>
            <div class="dropdown">
                <button class="dropdown-item">Suspend</button>
                <button class="dropdown-item">Restart...</button>
                <button class="dropdown-item">Power Off...</button>
                <hr class="bg-soft-white border-none h-[1px] w-[80%]" />

                <button class="dropdown-item">Log Out</button>

                <!-- <button class="dropdown-item">Turn Off</button>
                <button class="dropdown-item">Wi-Fi Settings</button> -->
            </div>
        </AccordionItem>
    </Accordion>
</div>

<style>
    .cont-menu {
        /* width: 300px; */
        width: 19rem;
        padding: 5px 7px;

        /* height: 50vh; */
    }
    .cont-menu * {
        color: #fff;
        font-family: "Ubuntu", sans-serif;
    }

    .menu-item {
        padding: 0 10px;
        height: 35px;
    }
    .menu-item:hover {
        background-color: var(--bg-light-white);
        border-radius: 5px;
    }
    .menu-icon {
        height: 1rem;
        margin-right: 15px;
        filter: brightness(0) invert(1);
    }

    .dropdown {
        background-color: var(--bg-darker-white);
        border-radius: 0 0 5px 5px;
        /* display: grid; */
    }

    .dropdown-item {
        @apply text-sm;
        padding: 8px 10px;
        display: block;
        padding-left: 40px;
        width: 100%;
        text-align: start;
    }

    .dropdown-item:hover {
        background-color: var(--bg-light-white);
    }
</style>
