<script lang="ts">
    import { draggable } from "@neodrag/svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { topApp } from "src/store";
    import { Listgroup, ListgroupItem } from "flowbite-svelte";

    const settings = [
        { name: "Wi-Fi", icon: "/img/icons/network-wireless-symbolic.svg" },
        { name: "Network", icon: "/img/icons/network-workgroup-symbolic.svg" },
        { name: "Bluetooth", icon: "/img/icons/bluetooth-active-symbolic.svg" },
        { name: "Background", icon: "/img/icons/preferences-desktop-wallpaper-symbolic.svg" },
        { name: "Appearance", icon: "/img/icons/preferences-ubuntu-panel-symbolic.svg" },
        { name: "Notifications", icon: "/img/icons/preferences-system-notifications-symbolic.svg" },
        { name: "Search", icon: "/img/icons/preferences-system-search-symbolic.svg" },
        { name: "Multitasking", icon: "/img/icons/multitasking-symbolic.svg" },
        { name: "Applications", icon: "/img/icons/view-app-grid-symbolic.svg" },
        { name: "Privacy", icon: "/img/icons/preferences-system-privacy-symbolic.svg" },
        { name: "Online Accounts", icon: "/img/icons/weather-cloudy-symbolic.svg" },
        { name: "Sharing", icon: "/img/icons/preferences-system-sharing-symbolic.svg" },
        { name: "Sound", icon: "/img/icons/folder-music-symbolic.svg" },
        { name: "Power", icon: "/img/icons/preferences-system-power-symbolic.svg" },
        { name: "Displays", icon: "/img/icons/preferences-desktop-display-symbolic.svg" },
        { name: "Mouse & Touchpad", icon: "/img/icons/input-mouse-symbolic.svg" },
        { name: "Keyboard", icon: "/img/icons/preferences-desktop-keyboard-symbolic.svg" },
        { name: "Printers", icon: "/img/icons/printer-symbolic.svg" },
        { name: "Removable Media", icon: "/img/icons/media-removable-symbolic.svg" },
        { name: "Color", icon: "/img/icons/preferences-color-symbolic.svg" },
        { name: "Region & Language", icon: "/img/icons/preferences-desktop-locale-symbolic.svg" },
        { name: "Accessibility", icon: "/img/icons/preferences-desktop-accessibility-symbolic.svg" },
        { name: "Users", icon: "/img/icons/system-users-symbolic.svg" },
        { name: "Default Applications", icon: "/img/icons/starred-symbolic.svg" },
        { name: "Date & Time", icon: "/img/icons/preferences-system-time-symbolic.svg" },
        { name: "About", icon: "/img/icons/dialog-information-symbolic.svg" },
    ];

    let selectSetting = "Wi-Fi";

    setInterval(function () {
        let elem = document.activeElement;
        if (elem && elem.id == "iframe-setting") {
            setTopApp();
        }
    }, 100);

    function setTopApp() {
        topApp.set("setting");
    }

    $: isTopApp = $topApp == "setting";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="setting"
    use:draggable={{ handle: ".window-bar", bounds: { top: 25 } }}
    on:click={setTopApp}
    class:top-app={isTopApp}
>
    <WindowBar name="setting">
        <div class="flex justify-between items-center min-w-[13rem] w-52 h-full" style="border-right: 1px solid #000;">
            <button class="ml-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
                <img
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search-btn"
                    width="15"
                    height="15"
                    class="img-icon"
                />
            </button>
            <span class="text-white text-sm">Settings</span>
            <button class="mr-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
                <img
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search-btn"
                    width="15"
                    height="15"
                    class="img-icon"
                />
            </button>
        </div>
        <div class="w-[200px]" />
        <div class="text-white w-full flex justify-center">{selectSetting}</div>
    </WindowBar>
    <div class="main-app">
        <div class="list-setting">
            <Listgroup
                active
                class="w-52 h-full overflow-hidden hover:overflow-y-scroll scrollbar-thin bg-dark-3 rounded-none"
                on:click={console.log}
            >
                {#each settings as setting}
                    <ListgroupItem
                        hoverClass=""
                        on:click={(e) => (selectSetting = setting.name)}
                        class="text-white hover:bg-dark-hover focus:bg-main-orange focus:text-white"
                    >
                        <img src={setting.icon} alt={setting.name} width="15" class="img-icon" />
                        <span class="setting-name">
                            {setting.name}
                        </span>
                        {#if setting.name == "Applications" || setting.name == "Privacy"}
                            <img
                                src="/img/icons/pan-end-symbolic.svg"
                                alt={setting.name}
                                width="15"
                                class="absolute left-44 img-icon"
                            />
                        {/if}
                    </ListgroupItem>
                {/each}
            </Listgroup>
        </div>
        <div class="setting-info" />
    </div>
</div>

<style>
    .setting {
        position: absolute;
        inset: 10% 40% 20% 10%;
        resize: both;
        overflow: hidden;
        border-radius: 12px;
        /* height: 100px; */
        /* height: max-content; */
    }

    .top-app {
        z-index: 9;
    }

    .main-app {
        /* display: flex; */
        /* position: absolute; */
        height: calc(100% - 48px);
        width: 100%;
        background-color: bisque;
        display: flex;

        /* display: grid;
        grid-template-columns: 1fr 1fr; */
    }

    .list-setting {
        height: 100%;
    }

    .list-setting::-webkit-scrollbar {
        width: 10px;
    }

    .list-setting::-webkit-scrollbar-track {
        background: #888;
        border-radius: 5px;
    }

    .list-setting::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 5px;
    }

    .list-setting::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .setting-name {
        margin-left: 8px;
        font-size: 13px;
        font-weight: 100;
    }
</style>
