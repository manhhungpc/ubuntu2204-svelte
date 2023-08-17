<script lang="ts">
    import { Listgroup, Button, ListgroupItem } from "flowbite-svelte";
    import { fade } from "svelte/transition";
</script>

<div class="wrap-about scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="logo">
        <img src="/img/ubuntu-logo-dark.png" alt="ubuntu-logo" />
    </div>
    <div class="device-name">
        <Listgroup active class="mt-3 bg-dark-3 rounded-md" style="border: 1px solid #000">
            <div class="device-name-btn">
                <span>Device name</span>
                <div class="flex items-center">
                    <span class="mr-3">admin-MyLaptop</span>
                    <img src="/img/icons/pan-end-symbolic.svg" alt="next" width="18" />
                </div>
            </div>
        </Listgroup>
    </div>

    <div class="hardware">
        <Listgroup active class="bg-dark-3 rounded-md" style="border: 1px solid #000">
            <div class="hardware-info">
                <span>Hardware Model</span>
                <span class="text-warm-grey text-sm">SUSellTeK COMPUTER INC</span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="hardware-info">
                <span>Memory</span>
                <span class="text-warm-grey text-sm hover:cursor-text">512,0 GiB</span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="hardware-info">
                <span>Processor</span>
                <span class="text-warm-grey text-sm hover:cursor-text">
                    AMD® Ryzen 9 9600h with radeon graphics x 24
                </span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="hardware-info">
                <span>Graphics</span>
                <span class="text-warm-grey text-sm hover:cursor-text"
                    >NERAIR (NERAIR, WSLVM 19.2.5, DDM 4.17, 8.10.3-9-generic)</span
                >
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="hardware-info">
                <span>Disk Capacity</span>
                <span class="text-warm-grey text-sm hover:cursor-text">2 TB</span>
            </div>
        </Listgroup>
    </div>

    <div class="os">
        <Listgroup active class="bg-dark-3 rounded-md" style="border: 1px solid #000">
            <div class="os-info">
                <span>OS Name</span>
                <span class="text-warm-grey text-sm">Ubuntu 22.04 LTS</span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="os-info">
                <span>OS Type</span>
                <span class="text-warm-grey text-sm hover:cursor-text">64-bit</span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="os-info">
                <span>GNOME Version</span>
                <span class="text-warm-grey text-sm hover:cursor-text"> 56.2 </span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="os-info">
                <span>Windowing System</span>
                <span class="text-warm-grey text-sm hover:cursor-text">Landway</span>
            </div>
            <hr class="border-none h-[1px] bg-black m-0" />

            <div class="os-info sw-update">
                <span>Software Update</span>
                <span class="text-warm-grey text-sm flex items-center">
                    <img src="/img/icons/pan-end-symbolic.svg" alt="next" width="18" />
                </span>
            </div>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-about {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .logo,
    .device-name,
    .hardware,
    .os {
        padding-bottom: 30px;
        width: 36rem;
    }
    .logo {
        display: flex;
        justify-content: center;
    }

    .hardware-info,
    .device-name-btn,
    .os-info {
        /* @apply flex justify-between gap-3 w-full py-3 bg-dark-3 hover:bg-dark-3 hover:text-white text-white; */
        display: flex;
        justify-content: space-between;
        width: calc(100% - 16 * 2);
        padding: 12px 16px;
        color: #fff;
        font-size: 15px;
    }

    .device-name-btn:hover,
    .sw-update:hover {
        background-color: #2f2f2f;
        border-radius: 6px;
    }
</style>
