<script lang="ts">
    import { Listgroup, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import Slider from "../common/Slider.svelte";

    const toggleSeeing = ["High Contrast", "Large Text", "Enable Animations"],
        togglePnC = ["Mouse Keys", "Locate Pointer"];
    let onOffSeeing = [
        { name: "Zoom", value: "Off" },
        { name: "Screen Reader", value: "Off" },
        { name: "Sound Keys", value: "Off" },
    ];
    let hearing = "Off",
        clickAssist = "Off";
    let typing = [
        { name: "Repeat Keys", value: "On" },
        { name: "Cursor Blinking", value: "On" },
        { name: "Typing Assist (AccessX)", value: "Off" },
    ];
</script>

<div class="wrap-a11y scrollbar-thin overflow-y-auto" in:fade={{ duration: 150 }}>
    <div class="show-a11y">
        <span>Always Show Accessibility Menu</span>
        <ToggleSwitch checked={false} />
    </div>
    <div class="seeing">
        <span class="font-bold text-sm text-white">Seeing</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            {#each toggleSeeing as tg, i}
                <Button
                    class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                >
                    <span>{tg}</span>
                    <ToggleSwitch checked={i == toggleSeeing.length - 1 ? true : false} />
                </Button>
                <hr class="border-none h-[1px] bg-black m-0" />
            {/each}
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Cursor Size</span>
                <span>Default</span>
            </Button>
            {#each onOffSeeing as op}
                <hr class="border-none h-[1px] bg-black m-0" />
                <Button
                    class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                    on:click={() => (op.value = op.value == "Off" ? "On" : "Off")}
                >
                    <span>{op.name}</span>
                    <span>{op.value}</span>
                </Button>
            {/each}
        </Listgroup>
    </div>
    <div class="hearing">
        <span class="font-bold text-sm text-white">Hearing</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button
                class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                on:click={() => (hearing = hearing == "Off" ? "On" : "Off")}
            >
                <span>Visual Alerts</span>
                <span>{hearing}</span>
            </Button>
        </Listgroup>
    </div>
    <div class="typing">
        <span class="font-bold text-sm text-white">Typing</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button
                class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                on:click={() => (hearing = hearing == "Off" ? "On" : "Off")}
            >
                <span>Screen Keyboard</span>
                <ToggleSwitch checked={false} />
            </Button>
            {#each typing as op}
                <hr class="border-none h-[1px] bg-black m-0" />
                <Button
                    class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                    on:click={() => (op.value = op.value == "Off" ? "On" : "Off")}
                >
                    <span>{op.name}</span>
                    <span>{op.value}</span>
                </Button>
            {/each}
        </Listgroup>
    </div>
    <div class="point-n-click">
        <span class="font-bold text-sm text-white">Pointing & Clicking</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            {#each togglePnC as tg, i}
                <Button
                    class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                >
                    <span>{tg}</span>
                    <ToggleSwitch checked={false} />
                </Button>
                <hr class="border-none h-[1px] bg-black m-0" />
            {/each}
            <Button
                class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                on:click={() => (clickAssist = clickAssist == "Off" ? "On" : "Off")}
            >
                <span>Click Assist</span>
                <span>{clickAssist}</span>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span class="flex justify-start w-[40%]">Double-Click Delay</span>
                <Slider percent={35} />
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

    .show-a11y,
    .seeing,
    .hearing,
    .typing,
    .point-n-click {
        width: 36rem;
        margin-bottom: 30px;
    }

    .show-a11y {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 100;
        color: #fff;
    }

    .point-n-click {
        padding-bottom: 30px;
    }
</style>
