<script lang="ts">
    import { Listgroup, ListgroupItem } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";

    const wifi = [
        {
            name: "Home",
            icon: "/img/icons/network-wireless-signal-good-secure-symbolic.svg",
        },
        {
            name: "My own company",
            icon: "/img/icons/network-wireless-signal-good-secure-symbolic.svg",
        },
        {
            name: "Ubuntu-2204 in Website",
            icon: "/img/icons/network-wireless-signal-good-secure-symbolic.svg",
        },
        {
            name: "Crush home 111",
            icon: "/img/icons/network-wireless-signal-good-secure-symbolic.svg",
        },
        {
            name: "Neighbour",
            icon: "/img/icons/network-wireless-signal-weak-secure-symbolic.svg",
        },
        {
            name: "Caerula Arbor ",
            icon: "/img/icons/network-wireless-signal-weak-secure-symbolic.svg",
        },
        {
            name: "Is that cool and crazy?",
            icon: "/img/icons/network-wireless-signal-weak-secure-symbolic.svg",
        },
    ];
</script>

<div class="wrap-wifi">
    <div class="flex justify-between mb-4 px-2 py-3 w-[70%] max-w-[36rem] bg-dark-3 rounded-md">
        <div class="airplane-mode">
            <p>Airplane Mode</p>
            <small>Disables Wi-Fi, Bluetooth and mobile broadband</small>
        </div>
        <ToggleSwitch />
    </div>
    <div class="visible-network">
        <p class="text-white text-sm font-bold mb-2">Visible Networks</p>
        <Listgroup active class="h-full bg-dark-3 rounded-none" style="border: 1px solid #000;">
            {#each wifi as wf, i}
                <ListgroupItem
                    hoverClass=""
                    class="text-white h-[45px] hover:bg-dark-hover hover:rounded-none focus:bg-main-orange focus:text-white focus:rounded-none"
                >
                    <img src={wf.icon} alt={wf.name} width="16" class="img-icon" />
                    <span class="wifi-name">
                        {wf.name}
                    </span>
                    {#if i == 0}
                        <div class="absolute right-2 flex items-center">
                            <span class="text-warm-grey">Connected</span>
                            <button
                                class="ml-2 bg-dark-3 pt-2 pb-1 px-2 rounded-md hover:bg-dark-hover"
                                style="border: 1px solid #000"
                            >
                                <img
                                    src="/img/icons/system-settings-symbolic.svg"
                                    alt="setting-icon"
                                    width="15"
                                    class="img-icon"
                                />
                            </button>
                        </div>
                    {/if}
                </ListgroupItem>
            {/each}
        </Listgroup>
    </div>
</div>

<style>
    .wrap-wifi {
        @apply flex justify-center items-center flex-col;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }

    .airplane-mode {
        /* background-color: var(--bg-dark-3); */
        color: var(--white);
        font-size: 14px;
    }

    .airplane-mode p {
        font-weight: 800;
        margin: 0;
    }

    .airplane-mode small {
        font-size: 13px;
        letter-spacing: 0px !important;
        color: var(--warm-grey);
    }

    .visible-network {
        @apply w-[70%] max-w-[36rem];
        /* overflow-hidden hover:overflow-y-scroll scrollbar-thin; */
    }

    .wifi-name {
        margin-left: 12px;
    }
</style>
