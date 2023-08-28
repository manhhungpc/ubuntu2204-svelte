<script lang="ts">
    import { Checkbox, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";

    const medias = ["CD audio", "DVD video", "Music player", "Photos", "Software"];
</script>

<div class="wrap-media" in:fade={{ duration: 150 }}>
    <div class="text-warm-grey text-sm mb-3">Select how media should be handled</div>
    <div class="media mt-3">
        {#each medias as media}
            <div class="text-warm-grey flex items-center gap-3 mb-3">
                <span class="w-1/4 flex justify-end text-sm">{media}</span>
                <button class="choose-option" id="media">
                    <span> Ask what to do </span>
                    <img src="/img/icons/pan-down-symbolic.svg" alt="down" width="20" />
                </button>
            </div>
        {/each}
        <div class="text-warm-grey flex justify-end gap-3 mb-3">
            <button class="other">
                <span> Other Media ...</span>
            </button>
        </div>
        <div class="flex items-center justify-end gap-1">
            <input type="checkbox" class="text-white accent-orange-500 w-4 h-4" />
            <span class="text-white text-sm">Never prompt or start programs on media insertion</span>
        </div>
    </div>
    <Popover class="flex flex-col w-64 z-40 bg-dark-1" trigger="click" placement="bottom" triggeredBy="#media">
        <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Other Application</button>
        <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
            Ask what to do
            <img src="/img/icons/background-selected-symbolic.svg" alt="tick" width="15" class="img-icon ml-2" />
        </button>
        <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Do nothing</button>
        <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Open folder</button>
    </Popover>
</div>

<style>
    .wrap-media {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .media {
        width: 30rem;
    }

    .choose-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        background-color: var(--bg-darker-white);
        padding: 8px;
        color: #fff;
        border: 1px solid #000;
        border-radius: 8px;
        font-size: 14px;
    }

    .other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: max-content;
        background-color: var(--bg-darker-white);
        padding: 8px 14px;
        color: #fff;
        border: 1px solid #000;
        border-radius: 8px;
        font-size: 14px;
    }
</style>
