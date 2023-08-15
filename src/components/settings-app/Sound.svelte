<script lang="ts">
    import { Button, Listgroup, ListgroupItem, Select, StepIndicator } from "flowbite-svelte";
    import Slider from "../common/Slider.svelte";
    import { audio } from "src/store";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import Steps from "../common/Steps.svelte";
    import { onDestroy } from "svelte";

    let audioImg: string;
    const alertSounds = ["Default", "Bark", "Drip", "Glass", "Sonar"];
    let selectAlert = "Default";
    $: {
        if ($audio === 0) {
            audioImg = "/img/icons/audio-volume-muted-symbolic.svg";
        } else if ($audio < 33) {
            audioImg = "/img/icons/audio-volume-low-symbolic.svg";
        } else if ($audio < 66) {
            audioImg = "/img/icons/audio-volume-medium-symbolic.svg";
        } else {
            audioImg = "/img/icons/audio-volume-high-symbolic.svg";
        }
    }

    let outputSteps = 10,
        inputSteps = 3;

    let timeout = setInterval(() => {
        let max = 16,
            min = 5;
        outputSteps = Math.random() * (max - min) + min;
        inputSteps = Math.random() * 5;
    }, 500);

    onDestroy(() => {
        clearInterval(timeout);
    });
</script>

<div class="wrap-sound scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="system-volume">
        <div class="text-white text-sm font-bold mb-3">System Volume</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <ListgroupItem class="flex justify-between items-center gap-6 w-full bg-dark-3 hover:bg-dark-3 text-white">
                <Slider bind:percent={$audio} step={1} />
                <button class="audio-toggle">
                    <img src={audioImg} alt="audioImg" width="18" class="img-icon" />
                </button>
            </ListgroupItem>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between gap-2 w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <span>Over-Amplification</span>
                    <div class="text-xs text-warm-grey">
                        Allows raising the volume above 100%. This can result in a loss of audio quality; it is better
                        to increase application volume settings, if possible.
                    </div>
                </span>
                <ToggleSwitch checked={false} />
            </Button>
        </Listgroup>
    </div>
    <div class="volume-level">
        <div class="text-white text-sm font-bold mb-3">Volume Levels</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <ListgroupItem
                class="flex justify-between items-center gap-5 w-full bg-dark-3 hover:bg-dark-3 hover:text-white text-white"
            >
                <div class="flex items-center gap-2 w-[12rem]">
                    <img src="/img/icons/system-settings-symbolic.svg" alt="system-volum" width="20" class="img-icon" />
                    <span class="text-[15px] w-max">System Sounds</span>
                </div>
                <Slider percent={0} />
                <button class="audio-toggle">
                    <img src={audioImg} alt="audioImg" width="18" class="img-icon" />
                </button>
            </ListgroupItem>
        </Listgroup>
    </div>
    <div class="output">
        <div class="text-white text-sm font-bold mb-3">Output</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <ListgroupItem
                class="flex justify-between items-center gap-3 w-full py-4 bg-dark-3 hover:bg-dark-3 hover:text-white text-white"
            >
                <div class="flex items-center gap-2 w-[12rem]">
                    <span class="text-[15px] w-max">Output Device</span>
                </div>
                <div class="w-full">
                    <div class="flex justify-between gap-1">
                        <Select size="sm" class="p-2 bg-darker-white text-white border border-solid border-black">
                            <option selected value="all" class="text-white bg-dark-1 text-base">
                                Speaker - Family 17h (Model 10h-1fh) HD Audio Controller
                            </option>
                        </Select>
                        <button class="test-audio"> Test </button>
                    </div>
                    <div class="h-1 mt-2">
                        <Steps currentStep={outputSteps} steps={new Array(25)} />
                    </div>
                </div>
            </ListgroupItem>
            <hr class="border-none h-[1px] bg-black m-0" />
            <ListgroupItem
                class="flex justify-between items-center gap-5 w-full bg-dark-3 hover:bg-dark-3 hover:text-white text-white"
            >
                <div class="flex items-center gap-2 w-[12rem] py-4">
                    <span class="text-[15px] w-max">Balance</span>
                </div>
                <div class="w-full">
                    <Slider percent={50} hasOverlay={false} />
                    <div class="w-full flex justify-between">
                        <div class="relative top-2">Left</div>
                        <div class="relative top-2">Right</div>
                    </div>
                </div>
            </ListgroupItem>
        </Listgroup>
    </div>
    <div class="input">
        <div class="text-white text-sm font-bold mb-3">Input</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <ListgroupItem
                class="flex justify-between items-center gap-3 w-full py-4 bg-dark-3 hover:bg-dark-3 hover:text-white text-white"
            >
                <div class="flex items-center gap-2 w-[12rem]">
                    <span class="text-[15px] w-max">Input Device</span>
                </div>
                <div class="w-full">
                    <div class="flex justify-between gap-1">
                        <Select size="sm" class="p-2 bg-darker-white text-white border border-solid border-black">
                            <option selected value="all" class="text-white bg-dark-1 text-base">
                                Internal Microphone - Family 17h (Model 10h-1fh) HD Audio Controller
                            </option>
                        </Select>
                    </div>
                    <div class="h-1 mt-2">
                        <Steps currentStep={inputSteps} steps={new Array(25)} color="bg-red-500" />
                    </div>
                </div>
            </ListgroupItem>
            <hr class="border-none h-[1px] bg-black m-0" />
            <ListgroupItem
                class="flex justify-between items-center gap-5 w-full bg-dark-3 hover:bg-dark-3 hover:text-white text-white"
            >
                <div class="flex items-center gap-2 w-[12rem] py-4">
                    <span class="text-[15px] w-max">Volume</span>
                </div>
                <Slider percent={20} />
                <button class="audio-toggle">
                    <img src={audioImg} alt="audioImg" width="18" class="img-icon" />
                </button>
            </ListgroupItem>
        </Listgroup>
    </div>
    <div class="alert-sound">
        <div class="text-white text-sm font-bold mb-3">Alert Sound</div>
        <div class="flex justify-between rounded-md" style="border: 1px solid #000;">
            {#each alertSounds as alert, i}
                <button
                    on:click={() => (selectAlert = alert)}
                    class="w-full text-center text-sm py-2 hover:bg-darker-white hover:text-white text-white"
                    style:border-right={i < alertSounds.length - 1 ? "1px solid #000" : ""}
                    style:border-radius={i == 0 ? "5px 0 0 5px" : i == alertSounds.length - 1 ? "0 5px 5px 0" : ""}
                    style:background-color={alert == selectAlert ? "#000" : "#373737"}
                >
                    {alert}
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    .wrap-sound {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .system-volume,
    .volume-level,
    .output,
    .input,
    .alert-sound {
        width: 36rem;
        padding-bottom: 30px;
    }

    .audio-toggle {
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid transparent;
    }

    .audio-toggle:hover {
        border: 1px solid #000;
        background-color: var(--bg-light-white);
    }

    .test-audio {
        padding: 8px 14px;
        border: 1px solid #000;
        background-color: var(--bg-darker-white);
        color: #fff;
        font-size: 14px;
        border-radius: 8px;
    }
</style>
