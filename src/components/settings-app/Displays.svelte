<script lang="ts">
    import { Listgroup, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";

    let selecScale = "100%";
    const scales = ["100%", "200%"];
</script>

<div class="wrap-displays" in:fade={{ duration: 150 }}>
    <div class="display">
        <span class="font-bold text-sm text-white">Built-in display</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button
                class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                id="orient-1"
            >
                <span>Orientation</span>

                <div class="flex items-center gap-2">
                    Landscape <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="bottom-end"
                triggeredBy="#orient-1"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Landscape
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Portrait Right</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Portrait Left</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Landscape (flipped)</button>
            </Popover>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button
                class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none"
                id="orient-2"
            >
                <span>Resolution</span>
                <div class="flex items-center gap-2">
                    1920 x 1080 (16:9) <img
                        src="/img/icons/pan-down-symbolic.svg"
                        alt="dropdown"
                        width="20"
                        class="img-icon"
                    />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="bottom-end"
                triggeredBy="#orient-2"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    1920 x 1080 (16:9)
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
            </Popover>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Refresh Rate</span>
                <div>60,00 Hz</div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Adjust for TV</span>
                <ToggleSwitch checked={false} />
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span>Scale</span>
                <div class="flex w-[28%] rounded-md" style="border: 1px solid #000;">
                    {#each scales as scale, i}
                        <button
                            on:click={() => (selecScale = scale)}
                            class="w-full text-center text-sm py-2 hover:bg-darker-white hover:text-white text-white"
                            style:border-right={i < scales.length - 1 ? "1px solid #000" : ""}
                            style:border-radius={i == 0 ? "5px 0 0 5px" : i == scales.length - 1 ? "0 5px 5px 0" : ""}
                            style:background-color={scale == selecScale ? "#000" : "#373737"}
                        >
                            {scale}
                        </button>
                    {/each}
                </div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />

            <Button class="flex justify-between gap-3 w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white rounded-none">
                <span class="text-start">
                    <span>Fractional Scaling</span>
                    <div class="text-xs text-warm-grey">
                        May increase power usage, lower speed, or reduce display sharpness.
                    </div>
                </span>
                <ToggleSwitch checked={false} />
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-displays {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .display {
        width: 36rem;
    }
</style>
