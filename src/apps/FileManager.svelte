<script lang="ts">
    import { Listgroup, ListgroupItem } from "flowbite-svelte";
    import Wip from "src/components/WIP.svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";

    const files = [
        { icon: "/img/icons/lock-symbolic.svg", name: "Recent" },
        { icon: "/img/icons/lock-symbolic.svg", name: "Starred" },
        { icon: "/img/icons/lock-symbolic.svg", name: "Home" },
        { icon: "/img/icons/lock-symbolic.svg", name: "Desktop" },
        { icon: "/img/icons/lock-symbolic.svg", name: "Documents" },
        { icon: "/img/icons/lock-symbolic.svg", name: "Download" },
    ];
</script>

<SkelentonApp appName={AppName.filemanager} addStyles="inset: 10% 26% 6% 10%;">
    <WindowBar name={AppName.filemanager} />
    <div class="main-app">
        <div class="folders">
            <Listgroup active class="w-60 h-full overflow-y-scroll scrollbar-thin bg-dark-3 rounded-none">
                {#each files as file}
                    <ListgroupItem
                        hoverClass=""
                        class="text-white h-[45px] hover:bg-dark-hover hover:rounded-none focus:bg-main-orange focus:text-white focus:rounded-none"
                    >
                        <img src={file.icon} alt={file.name} width="15" class="img-icon" />
                        <span class="folder-name">
                            {file.name}
                        </span>
                        {#if file.name == "Applications" || file.name == "Privacy"}
                            <img
                                src="/img/icons/pan-end-symbolic.svg"
                                alt={file.name}
                                width="20"
                                class="absolute left-52 img-icon"
                            />
                        {/if}
                    </ListgroupItem>
                {/each}
            </Listgroup>
        </div>
        <div class="show-files">
            <Wip />
        </div>
    </div>
</SkelentonApp>

<style>
    .main-app {
        height: calc(100% - 48px);
        width: 100%;
        background-color: var(--bg-dark-3);
        display: flex;
    }

    .folders {
        height: 100%;
        width: 15rem;
        border-right: 1px solid #000;
    }

    .folders::-webkit-scrollbar {
        width: 10px;
    }

    .folders::-webkit-scrollbar-track {
        background: #888;
        border-radius: 5px;
    }

    .folders::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 5px;
    }

    .folders::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .folder-name {
        margin-left: 12px;
        font-size: 15px;
        font-weight: 100;
    }

    .show-files {
        width: 100%;
        height: 100%;
    }
</style>
