<script lang="ts">
    import { Button, Listgroup, ListgroupItem, Popover } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import { fade } from "svelte/transition";

    const searchApps = [
        { icon: "/img/apps/filemanager-app.png", name: "Files" },
        { icon: "/img/apps/accessories-calculator.png", name: "Calculator" },
        { icon: "/img/apps/calendar-app.png", name: "Calendar" },
        { icon: "/img/apps/passwords-app.png", name: "Passwords and Keys" },
        { icon: "/img/apps/software-center.png", name: "Software" },
        { icon: "/img/apps/terminal-app.png", name: "Terminal" },
    ];
</script>

<div class="wrap-search" in:fade={{ duration: 150 }}>
    <div class="text-sm text-warm-grey w-[36rem]">
        Control which result are shown in the Activities Overview. The order of search results can also be changed by
        moving rows in the list.
    </div>
    <div class="w-[36rem]">
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            {#each searchApps as search, i}
                <ListgroupItem
                    class="flex justify-between w-full py-4 bg-dark-3 text-white hover:bg-[#2f2f2f] hover:text-white"
                >
                    <div class="flex items-center gap-3">
                        <img src="/img/icons/list-drag-handle-symbolic.svg" alt="drag-handle" width="20" />
                        <img src={search.icon} alt={search.name} width="35" />
                        {search.name}
                    </div>
                    <div class="flex items-center gap-3">
                        <ToggleSwitch />
                        <div class="vertical-row" />
                        <button class="view-more" id="view-more-id">
                            <img src="/img/icons/view-more-symbolic.svg" alt="view-more" width="20" class="img-icon" />
                        </button>
                    </div>
                </ListgroupItem>
                {#if i != searchApps.length - 1}
                    <hr class="border-none h-[1px] bg-black m-0" />
                {/if}
            {/each}
        </Listgroup>
        <Popover
            class="flex flex-col  z-40 bg-dark-1"
            trigger="click"
            placement="bottom-end"
            triggeredBy="#view-more-id"
        >
            <button class="block w-full text-start text-white p-2 rounded-md hover:bg-dark-2">Move Up</button>
            <button class="block w-full text-start text-white p-2 rounded-md hover:bg-dark-2">Move Down</button>
        </Popover>
    </div>
</div>

<style>
    .wrap-search {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
    }

    .view-more {
        @apply p-2 rounded-md;
        border: 1px solid transparent;
    }

    .view-more:hover {
        border: 1px solid #000;
        background-color: var(--bg-darker-white);
    }

    .vertical-row {
        border-left: 1px solid #222222;
        height: 30px;
    }
</style>
