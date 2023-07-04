<script lang="ts">
</script>

<div class="window-bar">
    <div />
    <div class="flex justify-end items-center h-[48px]">
        <div class="bar-button">
            <img src="/img/icons/window-minimize-symbolic.svg" alt="minimize" class="window-icon" />
        </div>
        <div class="bar-button">
            <img src="/img/icons/window-maximize-symbolic.svg" alt="minimize" class="window-icon" />
        </div>
        <div class="bar-button">
            <img src="/img/icons/window-close-symbolic.svg" alt="minimize" class="window-icon" />
        </div>
    </div>
</div>

<style>
    .window-bar {
        height: 48px;
        background-color: var(--bg-window-bar);
    }

    .bar-button {
        @apply rounded-[50%] p-[4px] mx-2 flex items-center;
        background-color: #373737;
    }

    .window-icon {
        height: 16px;
        filter: brightness(0) invert(1);
        border-radius: 50%;
    }
</style>
