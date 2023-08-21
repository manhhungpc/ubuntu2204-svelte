<script lang="ts">
    import { Listgroup, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import RadioInput from "../common/RadioInput.svelte";
</script>

<div class="wrap-keyboard scrollbar-thin overflow-y-auto" in:fade={{ duration: 150 }}>
    <div class="input-source">
        <span class="font-bold text-sm text-white">Input Sources</span>
        <div class="text-warm-grey text-sm mb-3">Includes keyboard layouts and input methods.</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-lg">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <div class="flex items-center gap-3">
                    <img src="/img/icons/list-drag-handle-symbolic.svg" alt="drag" width="20" class="drag-img" />
                    <span> English (US) </span>
                </div>
                <img src="/img/icons/view-more-symbolic.svg" alt="view-more" width="20" />
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-center gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <img src="/img/icons/list-add-symbolic.svg" alt="add" width="20" />
            </Button>
        </Listgroup>
    </div>
    <div class="insrc-switch">
        <span class="font-bold text-sm text-white">Input Sources Switching</span>
        <div class="text-warm-grey text-sm mb-3">
            Input sources can be switch using the Super+Space keyboard shortcut. This can be changed in the keyboard
            shortcut settings.
        </div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-lg">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <RadioInput name="insrc-switch" checked>Use the same source for all windows</RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <RadioInput name="insrc-switch" checked>Switch input sources individually for each window</RadioInput>
            </Button>
        </Listgroup>
    </div>
    <div class="insrc-switch">
        <span class="font-bold text-sm text-white">Special Character Entry</span>
        <div class="text-warm-grey text-sm mb-3">
            Methods for entering symbols and letter variants using the keyboard.
        </div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-lg">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <div>Alternate Character Key</div>
                <div class="flex items-center gap-3">
                    <span> Layout default </span>
                    <img src="/img/icons/pan-end-symbolic.svg" alt="drag" width="20" class="drag-img" />
                </div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <div>Compose Key</div>
                <div class="flex items-center gap-3">
                    <span> Layout default </span>
                    <img src="/img/icons/pan-end-symbolic.svg" alt="drag" width="20" class="drag-img" />
                </div>
            </Button>
        </Listgroup>
    </div>
    <div class="shortcut pb-6">
        <span class="font-bold text-sm text-white">Keyboard Shorcuts</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-lg">
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-lg">
                <div>View and Customize Shorcuts</div>
                <img src="/img/icons/pan-end-symbolic.svg" alt="drag" width="20" class="drag-img" />
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

    .input-source,
    .insrc-switch,
    .shortcut {
        width: 36rem;
        margin-bottom: 30px;
    }

    .drag-img:hover {
        cursor: url("dnd_none_24x24.cur"), grab;
    }
</style>
