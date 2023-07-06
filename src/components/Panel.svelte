<script lang="ts">
    import { Popover } from "flowbite-svelte";
    import SystemMenu from "./SystemMenu.svelte";
    import { audio, datetime } from "src/store";

    const date = $datetime;
    const formatDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        hourCycle: "h23",
        timeStyle: "short",
    }).format(date);

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
</script>

<div class="wrap-panel">
    <div class="activity-info">
        <button class="activities">Activities</button>
        <div class="current-app">
            <img src="/img/icons/ui/terminal.svg" alt="icon-current-app" class="icon-current-app" />

            <span class="name-current-app">Terminal</span>
        </div>
    </div>
    <div class="flex items-center">
        <button class="calendar">
            {formatDate.split(",")[0]}&nbsp;{formatDate.split(",")[2]}
        </button>
    </div>
    <div class="utils">
        <button class="lang">en</button>
        <button class="menu-btn" id="system-menu">
            <img src="/img/icons/network-signal-good-symbolic.svg" alt="wifi" class="utils-icon" />
            <img src="/img/icons/bluetooth-active-symbolic.svg" alt="bluetooth" class="utils-icon" />
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
        background-color: var(--bg-dark-1);
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
        font-size: 13px;
        left: 5.5rem;
        margin-left: 30px;
    }

    .icon-current-app {
        height: 80%;
        margin-right: 8px;
        font-size: 13px;
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
