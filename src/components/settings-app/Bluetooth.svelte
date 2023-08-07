<script lang="ts">
    import { Listgroup, ListgroupItem } from "flowbite-svelte";
    import { fade } from "svelte/transition";

    const bluetooths = [
        {
            name: "Silent-mouse",
            status: "Connected",
        },
        {
            name: "Ubuntu-2204 in Website",
            status: "Not Set Up",
        },
        {
            name: "Smart-watch",
            status: "Not Set Up",
        },
    ];
</script>

<div class="wrap-blt" in:fade={{ duration: 200 }}>
    <div class="text-sm">
        Visible as "my-ASUSLaptop-1080A" and available for Bluetooth file transfer. Transferred files are placed in the
    </div>

    <div class="mt-5 mb-2 w-full flex justify-start items-center">
        <span class="mr-3 font-bold text-sm">Devices</span>
        <img src="/img/icons/process-working-symbolic.svg" alt="spin" width="20" height="20" class="animate-spin" />
    </div>

    <Listgroup active class="h-full bg-dark-3 rounded-none" style="border: 1px solid #000;">
        {#each bluetooths as blt, i}
            <ListgroupItem
                hoverClass=""
                class="text-white hover:bg-dark-hover hover:rounded-none focus:bg-main-orange focus:text-white focus:rounded-none"
            >
                <div class="flex justify-between w-full p-2">
                    <span class="blt-name">
                        {blt.name}
                    </span>
                    <span>{blt.status}</span>
                </div>
            </ListgroupItem>
        {/each}
    </Listgroup>
</div>

<style>
    .wrap-blt {
        @apply flex justify-center items-center flex-col mx-24 text-white;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }
</style>
