<script lang="ts">
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { Listgroup, ListgroupItem } from "flowbite-svelte";
    import WiFi from "src/components/settings-app/WiFi.svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import { AppName } from "src/interfaces/AppName";

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

    const backgrounds = [
        "/img/Wallpaper/Mirror_by_Uday_Nakade.jpg",
        "/img/Wallpaper/Blue_flower_by_Elena_Stravoravdi.jpg",
        "/img/Wallpaper/canvas_by_roytanck.jpg",
        "/img/Wallpaper/Cherry_Tree_in_Lakones_by_elenastravoravdi.jpg",
        "/img/Wallpaper/DSC2943_by_kcpru.jpg",
        "/img/Wallpaper/jj_dark_by_Hiking93.jpg",
        "/img/Wallpaper/jj_light_by_Hiking93.jpg",
        "/img/Wallpaper/Optical_Fibers_in_Dark_by_Elena_Stravoravdi.jpg",
        "/img/Wallpaper/ubuntu2_by_arman1992.jpg",
        "/img/Wallpaper/ubuntu_by_arman1992.jpg",
        "/img/Wallpaper/Jammy-Jellyfish_WP_1920x1080.webp",
        "/img/Wallpaper/Jammy-Jellyfish_WP_4096x2304_Grey.png",
    ];

    let selectSetting = { name: "Wi-Fi", component: WiFi };

    async function loadSettings(name: string) {
        switch (name) {
            case "Wi-Fi":
                selectSetting = {
                    name: "Wi-Fi",
                    component: (await import(`src/components/settings-app/WiFi.svelte`)).default,
                };
                break;
            case "Network":
                selectSetting = {
                    name: "Network",
                    component: (await import(`src/components/settings-app/Network.svelte`)).default,
                };
                break;
            case "Bluetooth":
                selectSetting = {
                    name: "Bluetooth",
                    component: (await import(`src/components/settings-app/Bluetooth.svelte`)).default,
                };
                break;
            case "Background":
                selectSetting = {
                    name: "Background",
                    component: (await import(`src/components/settings-app/Background.svelte`)).default,
                };
                break;
            case "Appearance":
                selectSetting = {
                    name: "Appearance",
                    component: (await import(`src/components/settings-app/Appearance.svelte`)).default,
                };
                break;
            case "Notifications":
                selectSetting = {
                    name: "Notifications",
                    component: (await import(`src/components/settings-app/Notifications.svelte`)).default,
                };
                break;
            case "Search":
                selectSetting = {
                    name: "Search",
                    component: (await import(`src/components/settings-app/Search.svelte`)).default,
                };
                break;
            case "Multitasking":
                selectSetting = {
                    name: "Multitasking",
                    component: (await import(`src/components/settings-app/Multitasking.svelte`)).default,
                };
                break;
            case "Online Accounts":
                selectSetting = {
                    name: "Online Accounts",
                    component: (await import(`src/components/settings-app/OnlineAccounts.svelte`)).default,
                };
                break;
            case "Sharing":
                selectSetting = {
                    name: "Sharing",
                    component: (await import(`src/components/settings-app/Sharing.svelte`)).default,
                };
                break;
            case "Sound":
                selectSetting = {
                    name: "Sound",
                    component: (await import(`src/components/settings-app/Sound.svelte`)).default,
                };
                break;
            case "Power":
                selectSetting = {
                    name: "Power",
                    component: (await import(`src/components/settings-app/Power.svelte`)).default,
                };
                break;
            case "Displays":
                selectSetting = {
                    name: "Displays",
                    component: (await import(`src/components/settings-app/Displays.svelte`)).default,
                };
                break;
            case "Mouse & Touchpad":
                selectSetting = {
                    name: "Mouse & Touchpad",
                    component: (await import(`src/components/settings-app/Mouse.svelte`)).default,
                };
                break;
            case "Keyboard":
                selectSetting = {
                    name: "Keyboard",
                    component: (await import(`src/components/settings-app/Keyboard.svelte`)).default,
                };
                break;
            case "Printers":
                selectSetting = {
                    name: "Printers",
                    component: (await import(`src/components/settings-app/Printer.svelte`)).default,
                };
                break;
            case "Color":
                selectSetting = {
                    name: "Color",
                    component: (await import(`src/components/settings-app/Color.svelte`)).default,
                };
                break;
            case "Default Applications":
                selectSetting = {
                    name: "Default Applications",
                    component: (await import(`src/components/settings-app/DefaultApplication.svelte`)).default,
                };
                break;
            case "Date & Time":
                selectSetting = {
                    name: "Date & Time",
                    component: (await import(`src/components/settings-app/DateTime.svelte`)).default,
                };
                break;
            case "About":
                selectSetting = {
                    name: "About",
                    component: (await import(`src/components/settings-app/About.svelte`)).default,
                };
                break;
            default:
                selectSetting = {
                    name: name,
                    component: (await import(`src/components/WIP.svelte`)).default,
                };
                break;
        }
    }
</script>

<svelte:head>
    {#each backgrounds as background}
        <link rel="preload" as="image" href={background} />
    {/each}
</svelte:head>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<SkelentonApp appName={AppName.settings} addStyles="height: 85vh; width: 55vw;">
    <WindowBar name={AppName.settings}>
        <div class="flex justify-between items-center min-w-[15rem] w-52 h-full" style="border-right: 1px solid #000;">
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
                <img src="/img/icons/open-menu-symbolic.svg" alt="search-btn" width="15" height="15" class="img-icon" />
            </button>
        </div>
        <div class="w-[200px]" />
        <div class="text-white text-sm font-bold w-full flex justify-center">{selectSetting.name}</div>
    </WindowBar>
    <div class="main-app">
        <div class="list-setting">
            <Listgroup
                active
                class="w-60 h-full overflow-hidden hover:overflow-y-scroll scrollbar-thin bg-dark-3 rounded-none"
            >
                {#each settings as setting}
                    <ListgroupItem
                        hoverClass=""
                        on:focus={(e) => (selectSetting.name = setting.name)}
                        on:click={(e) => loadSettings(setting.name)}
                        class="text-white h-[45px] hover:bg-dark-hover hover:rounded-none 
                        {setting.name === selectSetting.name &&
                            'hover:bg-main-orange bg-main-orange focus:text-white !rounded-none'}"
                    >
                        <img src={setting.icon} alt={setting.name} width="15" class="img-icon" />
                        <span class="setting-name">
                            {setting.name}
                        </span>
                        {#if setting.name == "Applications" || setting.name == "Privacy"}
                            <img
                                src="/img/icons/pan-end-symbolic.svg"
                                alt={setting.name}
                                width="20"
                                class="absolute left-52 img-icon"
                            />
                        {/if}
                    </ListgroupItem>
                {/each}
            </Listgroup>
        </div>
        <div class="setting-info">
            <svelte:component this={selectSetting.component} />
        </div>
    </div>
</SkelentonApp>

<style>
    * {
        letter-spacing: 0px !important;
    }

    .main-app {
        height: calc(100% - 48px);
        width: 100%;
        background-color: var(--bg-grey-1);
        display: flex;
    }

    .list-setting {
        height: 100%;
        border-right: 1px solid #000;
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
        margin-left: 12px;
        font-size: 15px;
        font-weight: 100;
    }

    .setting-info {
        width: 100%;
        background-color: var(--bg-dark-app);
    }
</style>
