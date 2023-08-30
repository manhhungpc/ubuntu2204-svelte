<script lang="ts">
    import { Listgroup, Button } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import { fade } from "svelte/transition";
    import Slider from "../common/Slider.svelte";

    const primaryBtn = ["Left", "Right"];
    let selectedBtn = "Left";
</script>

<div class="wrap-mouse" in:fade={{ duration: 150 }}>
    <div class="general">
        <div class="text-white text-sm font-bold mb-3">General</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-center w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div class="flex justify-between w-full">
                    <span class="text-start">
                        <span>Primary Button</span>
                        <div class="text-xs text-warm-grey">
                            Sets the order of physical buttons on mice and touchpads.
                        </div>
                    </span>
                    <div class="flex w-[28%] rounded-md" style="border: 1px solid #000;">
                        {#each primaryBtn as btn, i}
                            <button
                                on:click={() => (selectedBtn = btn)}
                                class="w-full text-center text-sm py-2 hover:bg-darker-white hover:text-white text-white"
                                style:border-right={i < primaryBtn.length - 1 ? "1px solid #000" : ""}
                                style:border-radius={i == 0
                                    ? "5px 0 0 5px"
                                    : i == primaryBtn.length - 1
                                    ? "0 5px 5px 0"
                                    : ""}
                                style:background-color={btn == selectedBtn ? "#000" : "#373737"}
                            >
                                {btn}
                            </button>
                        {/each}
                    </div>
                </div>
            </Button>
        </Listgroup>
    </div>
    <div class="general">
        <div class="text-white text-sm font-bold mb-3">Mouse</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between gap-3 w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div class="flex justify-between w-full">
                    <span>Mouse speed</span>
                    <div class="w-[50%] flex items-center">
                        <Slider percent={40} />
                    </div>
                </div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <span>Natural Scrolling</span>
                    <div class="text-xs text-warm-grey">Scrolling moves the content, not the views.</div>
                </span>
                <ToggleSwitch checked={false} />
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-mouse {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .general {
        width: 36rem;
        padding-bottom: 30px;
    }
</style>
