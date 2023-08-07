<script lang="ts">
    import { Button, Listgroup } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";

    const appNotif = [
        { icon: "/img/apps/archive-manager.png", name: "Archive Manager" },
        { icon: "/img/apps/calendar-app.png", name: "Calendar" },
        { icon: "/img/apps/clock-app.png", name: "Date & Time" },
        { icon: "/img/apps/disk-usage-app.png", name: "Disk Usage Analyzer" },
        { icon: "/img/apps/filemanager-app.png", name: "Files" },
        { icon: "/img/apps/google-chrome.png", name: "Google Chrome" },
        { icon: "/img/apps/preferences-system-network.png", name: "Network" },
        { icon: "/img/apps/software-center.png", name: "Ubuntu Software" },
        { icon: "/img/apps/applications-multimedia.png", name: "Videos" },
        { icon: "/img/apps/vscode.png", name: "Visual Studio Code" },
    ];
</script>

<div class="wrap-notif scrollbar-thin overflow-y-scroll">
    <div class="general-notif">
        <Listgroup active class=" bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <span>Do Not Disturb</span>
                <ToggleSwitch checked={false} />
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <span>Lock Screen Notifications </span>
                <ToggleSwitch />
            </Button>
        </Listgroup>
    </div>
    <div class="app-notif">
        <span class="font-bold text-sm text-white">Applications</span>

        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            {#each appNotif as notif, i}
                <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                    <div class="flex items-center gap-3">
                        <img src={notif.icon} alt={notif.name} width="35" />
                        {notif.name}
                    </div>
                    <div>On</div>
                </Button>
                {#if i != appNotif.length - 1}
                    <hr class="border-none h-[1px] bg-black m-0" />
                {/if}
            {/each}
        </Listgroup>
    </div>
</div>

<style>
    .wrap-notif {
        padding-top: 30px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .general-notif {
        width: 36rem;
    }

    .app-notif {
        margin-top: 30px;
        padding-bottom: 60px;
        width: 36rem;
    }
</style>
