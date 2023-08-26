<script lang="ts">
    import { Listgroup, ListgroupItem } from "flowbite-svelte";
    import Wip from "src/components/WIP.svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";

    const folders = [
        { icon: "/img/icons/emoji-recent-symbolic.svg", name: "Recent" },
        { icon: "/img/icons/starred-symbolic.svg", name: "Starred" },
        { icon: "/img/icons/user-home-symbolic.svg", name: "Home" },
        { icon: "/img/icons/folder-documents-symbolic.svg", name: "Documents" },
        { icon: "/img/icons/folder-download-symbolic.svg", name: "Download" },
        { icon: "/img/icons/folder-pictures-symbolic.svg", name: "Pictures" },
        { icon: "/img/icons/folder-videos-symbolic.svg", name: "Videos" },
    ];

    const subFolders = [
        { icon: "/img/apps/folder.png", name: "My_Personal_Folder" },
        { icon: "/img/apps/folder.png", name: "Pet_Project" },
        { icon: "/img/apps/image-x-generic.png", name: "From-Vietnam.png" },
        { icon: "/img/apps/image-x-generic.png", name: "with-Love.jpg" },
        { icon: "/img/apps/folder.png", name: "normalText.txt" },
        {
            icon: "/img/apps/application-pdf.png",
            name: "Give_Repo_A_Star.pdf",
            link: "https://github.com/manhhungpc/ubuntu2204-svelte",
        },
        { icon: "/img/apps/text.png", name: "sudo_commands.txt" },
    ];
</script>

<SkelentonApp appName={AppName.filemanager} addStyles="height: 85vh; width: 60vw;">
    <WindowBar name={AppName.filemanager} classStyle="justify-between">
        <div class="ml-2 flex justify-between items-center h-full">
            <button class="routing-btn rounded-l-md">
                <img src="/img/icons/pan-start-symbolic.svg" alt="search-btn" width="18" height="18" class="img-icon" />
            </button>
            <button class="routing-btn rounded-r-md !border-l-0 !bg-dark-3">
                <img src="/img/icons/pan-end-symbolic.svg" alt="search-btn" width="18" height="18" class="img-icon" />
            </button>
        </div>

        <div class="w-[70%] flex">
            <div class="w-full bg-dark-3 rounded-md flex justify-between" style="border: 1px solid #000;">
                <div class=" py-2 px-3 flex items-center text-white">
                    <img src="/img/icons/user-home-symbolic.svg" alt="user-home" width="16" />
                    <span class="ml-2"> Home </span>
                </div>
                <button class="bar-btn rounded-r-md">
                    <img
                        src="/img/icons/view-more-symbolic.svg"
                        alt="search-btn"
                        width="16"
                        height="16"
                        class="img-icon"
                    />
                </button>
            </div>
            <button class="ml-2 bg-grey-2 px-3 py-2 flex items-center rounded-md" style="border: 1px solid #000;">
                <img
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search-btn"
                    width="15"
                    height="15"
                    class="img-icon"
                />
            </button>
        </div>

        <div class="flex justify-between items-center h-full">
            <button class="bg-grey-2 px-3 py-2 flex items-center rounded-md" style="border: 1px solid #000;">
                <img src="/img/icons/open-menu-symbolic.svg" alt="menu-btn" width="16" height="18" class="img-icon" />
            </button>
        </div>
    </WindowBar>
    <div class="main-app">
        <div class="folders">
            <Listgroup active class="w-60 h-full overflow-y-scroll scrollbar-thin bg-dark-3 rounded-none">
                {#each folders as folder}
                    <ListgroupItem
                        hoverClass=""
                        class="text-white h-[45px] hover:bg-dark-hover hover:rounded-none focus:bg-main-orange focus:text-white focus:rounded-none"
                    >
                        <img src={folder.icon} alt={folder.name} width="15" class="img-icon" />
                        <span class="folder-name">
                            {folder.name}
                        </span>
                        {#if folder.name == "Applications" || folder.name == "Privacy"}
                            <img
                                src="/img/icons/pan-end-symbolic.svg"
                                alt={folder.name}
                                width="20"
                                class="absolute left-52 img-icon"
                            />
                        {/if}
                    </ListgroupItem>
                {/each}
            </Listgroup>
        </div>
        <div class="show-files">
            <div class="showfile-header">
                <span class="showfile-text">Name</span>
                <span class="showfile-text">Size</span>
                <span class="showfile-text">Modified</span>
            </div>
            <div>
                {#each subFolders as subFolder}
                    <button
                        class="file-n-subfolder"
                        style="border-bottom: 1px solid #ffffff0d;"
                        on:click={() => {
                            if (subFolder.link) {
                                window.open("https://github.com/manhhungpc/ubuntu2204-svelte", "_blank");
                            }
                        }}
                    >
                        <div class="flex items-center gap-2">
                            <img src={subFolder.icon} alt="icon" width="30" />
                            <span class="text-white">{subFolder.name} </span>
                        </div>
                        <div class="flex justify-start ml-3">{(Math.random() * 400).toFixed(1)} kB</div>
                        <div class="flex justify-start ml-3">{new Date().toLocaleDateString("en-GB")}</div>
                    </button>
                {/each}
            </div>
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
        border-top: 1px solid #000;
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

    .routing-btn {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        background-color: var(--grey-2);
        border: 1px solid #000;
    }

    .routing-btn:hover,
    .routing-btn > *:hover {
        cursor: url(/cursor/hand_24x24.cur), pointer;
    }

    .bar-btn {
        padding: 6px 8px;
        background-color: var(--grey-2);
    }

    .showfile-header,
    .file-n-subfolder {
        display: grid;
        grid-template-columns: 70% auto auto;
        color: var(--warm-grey);
        font-size: 12px;
        font-weight: 700;
    }

    .showfile-text {
        border: 1px solid #1e1e1e;
        padding: 5px 5px;
    }

    .file-n-subfolder {
        align-items: center;
        padding: 6px 10px;
        width: 100%;
        font-weight: 100;
        row-gap: 10px;
    }
    .file-n-subfolder:hover {
        background-color: #2f2f2f;
    }
</style>
