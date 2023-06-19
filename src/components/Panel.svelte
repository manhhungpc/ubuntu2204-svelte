<script lang="ts">
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        hourCycle: "h23",
        timeStyle: "short",
    }).format(date);
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
        <button class="menu-btn">
            <img src="/img/icons/network-signal-good-symbolic.svg" alt="wifi" class="utils-icon" />
            <img src="/img/icons/audio-volume-low-symbolic.svg" alt="audio" class="utils-icon" />
            <img src="/img/icons/battery-80-symbolic.svg" alt="battery" class="utils-icon" />
            <span class="percent-battery"> 80 % </span>
        </button>
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
        margin-left: 12px;
    }

    .current-app {
        font-size: 13px;
        position: absolute;
        left: 5.5rem;
        display: flex;
        align-items: center;
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
        height: 14px;
        filter: brightness(0) invert(1);
    }

    .menu-btn {
        height: max-content;
        width: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 13px 0 10px;
    }

    .percent-battery {
        font-size: 0.84rem;
    }
</style>
