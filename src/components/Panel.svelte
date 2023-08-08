<script lang="ts">
    import { Dropdown, Popover } from "flowbite-svelte";
    import SystemMenu from "./SystemMenu.svelte";
    import { audio, datetime, doNotDisturb, locked, menuIcon, topApp } from "src/store";
    import CalendarView from "./CalendarView.svelte";
    import { AppName } from "src/interfaces/AppName";

    let currentAppIcon = "",
        currentAppName = "",
        isSvg = false;
    const formatDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        hourCycle: "h23",
        timeStyle: "short",
    });

    const apps = [
        {
            name: AppName.ggchrome,
            displayName: "Google Chrome",
            imgSrc: "/img/apps/google-chrome.png",
        },
        {
            name: AppName.filemanager,
            displayName: "Files",
            imgSrc: "/img/apps/filemanager-app.png",
        },
        {
            name: AppName.vscode,
            displayName: "Visual Studio Code",
            imgSrc: "/img/apps/vscode.png",
        },
        {
            name: AppName.terminal,
            displayName: "Terminal",
            imgSrc: "/img/icons/ui/terminal-app-symbolic.svg",
        },
        {
            name: AppName.settings,
            displayName: "Settings",
            imgSrc: "/img/icons/system-settings-symbolic.svg",
        },
        {
            name: AppName.calculator,
            displayName: "Calculator",
            imgSrc: "/img/apps/accessories-calculator.png",
        },
    ];

    let audioImg = "";

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

    $: console.log();
    $: if ($topApp != "") {
        const currentApp = apps.find((app) => app.name == $topApp);
        currentAppIcon = currentApp.imgSrc;
        currentAppName = currentApp.displayName;
    }
</script>

<div class="wrap-panel" style:background-color={$locked ? "var(--bg-grey-1)" : ""}>
    <div class="activity-info">
        <button class="activities">Activities</button>
        {#if $topApp != ""}
            <div class="current-app">
                <img
                    src={currentAppIcon}
                    alt="icon-current-app"
                    width="18"
                    height="18"
                    class:img-icon={currentAppIcon.split(".")[1] == "svg"}
                    class="icon-current-app"
                />
                <span class="name-current-app">{currentAppName}</span>
            </div>
        {/if}
    </div>
    <div class="flex items-center">
        <button class="calendar">
            {formatDate.format($datetime).split(",")[0]}&nbsp;{formatDate.format($datetime).split(",")[2]}
        </button>
        {#if $doNotDisturb}
            <img
                src="/img/icons/notifications-disabled-symbolic.svg"
                alt="dnd"
                style:filter="brightness(0) invert(1)"
            />
        {/if}
        <Dropdown class="p-0 m-0 rounded-full">
            <CalendarView />
        </Dropdown>
    </div>
    <div class="utils">
        <button class="lang">en</button>
        <button class="menu-btn" id="system-menu">
            {#each $menuIcon as icon}
                <img src={icon} alt="menu-icon" class="utils-icon" />
            {/each}
            <!-- <img src="/img/icons/bluetooth-active-symbolic.svg" alt="bluetooth" class="utils-icon" /> -->
            <img src={audioImg} alt="audio" class="utils-icon" />
            <!-- <img src="/img/icons/audio-volume-low-symbolic.svg" alt="audio" class="utils-icon" /> -->
            <span class="flex items-center utils-icon">
                <img src="/img/icons/battery-80-symbolic.svg" alt="battery" class="h-4" />
                &nbsp;80 %
            </span>
        </button>
        <div class="mr-2">
            <Popover
                trigger="click"
                triggeredBy="#system-menu"
                placement="bottom"
                defaultClass=""
                class="!-left-2 bg-dark-2"
            >
                <SystemMenu />
            </Popover>
        </div>
    </div>
</div>

<style>
    .wrap-panel {
        position: absolute;
        display: grid;
        grid-template-columns: 49% auto auto;
        background-color: var(--bg-dark-1);
        width: 100%;
        height: 1.7rem;
        color: var(--white);
        z-index: 99;
    }

    .activity-info {
        width: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .activities,
    .calendar,
    .menu-btn,
    .lang {
        background-color: transparent;
        border: none;
        color: var(--white);
        font-family: "Ubuntu", sans-serif;
        font-size: 0.9rem;
        padding: 1.5px 14px 1.5px 14px;
    }

    .activities:hover,
    .calendar:hover,
    .menu-btn:hover,
    .lang:hover {
        background-color: var(--bg-light-white);
        border-radius: 20px;
    }

    .calendar {
        height: max-content;
    }

    .activities {
        font-size: 14px;
        margin-left: 2px;
    }

    .current-app {
        @apply absolute flex items-center;
        font-size: 14px;
        left: 5.5rem;
        margin-left: 30px;
    }

    .icon-current-app {
        margin-right: 8px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .utils {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .utils-icon {
        height: 1rem;
        margin: 0 5px 0 5px;
        filter: brightness(0) invert(1);
    }

    .menu-btn {
        @apply flex items-center justify-between px-2;
        height: max-content;
        width: max-content;
    }

    .lang {
        @apply px-3;
    }
</style>
