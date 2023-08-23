<script lang="ts">
    import { Listgroup, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import Slider from "../common/Slider.svelte";
</script>

<div class="wrap-a11y scrollbar-thin overflow-y-auto" in:fade={{ duration: 150 }}>
    <div class="language">
        <span class="font-bold text-sm text-white">Language</span>
        <div class="text-warm-grey text-sm my-2">The language used for text in windows and web pages.</div>
        <button class="manage-lang-btn"> Manage Installed Languages </button>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Language</span>
                <span>English (United State)</span>
            </Button>
        </Listgroup>
    </div>
    <div class="formats">
        <span class="font-bold text-sm text-white">Language</span>
        <div class="text-warm-grey text-sm mt-2">The format used for number, dates, and currencies.</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Formats</span>
                <span>United State</span>
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-a11y {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .language,
    .formats {
        width: 36rem;
        margin-bottom: 30px;
    }

    .manage-lang-btn {
        width: 100%;
        color: #fff;
        background-color: var(--bg-dark-hover);
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #000;
        font-size: 12px;
    }

    .manage-lang-btn:hover {
        background-color: var(--bg-darker-white);
    }
</style>
