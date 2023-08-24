<script lang="ts">
    import { Listgroup, Button } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
</script>

<div class="wrap-appsettings scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="integration">
        <div class="text-white text-sm font-bold mb-3">Integration</div>
        <div class="text-warm-grey text-sm mb-3">System features used by this application.</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-dark-3 text-white rounded-none">
                <div class="text-white text-start">Notifications</div>
                <ToggleSwitch />
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-appsettings {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .integration {
        width: 36rem;
    }
</style>
