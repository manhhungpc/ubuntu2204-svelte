<script lang="ts">
    import { Listgroup, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
</script>

<div class="wrap-keyboard" in:fade={{ duration: 150 }}>
    <div class="shortcut p-6">
        <span class="text-sm text-white">
            Each device needs an up to date color profile to be color managed.
            <a href="https://help.ubuntu.com/stable/ubuntu-help/color.html.en" class="text-main-orange">Learn more</a>
        </span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Laptop Screen</span>
                <div class="flex gap-2">
                    <ToggleSwitch />
                    <img src="/img/icons/pan-end-symbolic.svg" alt="drag" width="20" class="drag-img" />
                </div>
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-keyboard {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
</style>
