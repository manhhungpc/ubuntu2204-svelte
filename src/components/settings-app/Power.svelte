<script lang="ts">
    import { Listgroup, ListgroupItem, Button, Popover } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import RadioInput from "../common/RadioInput.svelte";
</script>

<div class="wrap-power scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="battery">
        <div class="text-white text-sm font-bold mb-3">Battery</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <ListgroupItem class="!block w-full p-4 bg-dark-3 hover:bg-dark-3 hover:text-white text-white">
                <div class="mb-3">
                    <div class="bar-battery" />
                    <div class="bar-remain-battery" />
                </div>
                <div class="flex justify-between items-center w-full">
                    <span>Charging</span>
                    <span>80%</span>
                </div>
            </ListgroupItem>
        </Listgroup>
    </div>
    <div class="power-mode">
        <div class="text-white text-sm font-bold mb-3">Power Mode</div>
        <div class="text-warm-grey text-sm mb-3">Affects system performance and power usage.</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-start w-full p-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="power-mode-1" checked>
                    <div class="flex flex-col">
                        <div class="text-white text-start">Balanced</div>
                        <div class="text-xs text-warm-grey">Standard performance and power usage.</div>
                    </div>
                </RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-start w-full p-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="power-mode-1">
                    <div class="flex flex-col">
                        <div class="text-white text-start">Power Saver</div>
                        <div class="text-xs text-warm-grey">Reduced performance and power usage.</div>
                    </div>
                </RadioInput>
            </Button>
        </Listgroup>
    </div>
    <div class="power-option">
        <div class="text-white text-sm font-bold mb-1">Power Saving Options</div>
        <div class="text-warm-grey text-sm mb-3">Affects system performance and power usage.</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-center w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <div class="flex justify-between w-full">
                    <div class="text-start">
                        <span>Dim Screen</span>
                        <div class="text-xs text-warm-grey">
                            Reduces the screen brightness when the computer is inactive.
                        </div>
                    </div>
                    <ToggleSwitch />
                </div>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white" id="pos-2">
                <div class="text-start">
                    <span>Screen Blank</span>
                    <div class="text-xs text-warm-grey">Turn the screen off after a period of inactivity.</div>
                </div>
                <div class="flex items-center gap-2">
                    3 minutes <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover class="flex flex-col w-64 z-40 bg-dark-1" trigger="click" placement="top-end" triggeredBy="#pos-2">
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">1 minutes</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">2 minutes</button>

                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    3 minutes
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">4 minutes</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">5 minutes</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">8 minutes</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">10 minutes</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">12 minutes</button>
            </Popover>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-center w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <div class="flex justify-between w-full">
                    <div class="text-start">
                        <span>Automatic Power Saver</span>
                        <div class="text-xs text-warm-grey">Enables power saver mode when battery is low.</div>
                    </div>
                    <ToggleSwitch />
                </div>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div class="text-start">
                    <span>Automatic Suspend</span>
                    <div class="text-xs text-warm-grey">Pause the computer after a period of inactivity.</div>
                </div>
                <div class="flex items-center gap-2">When on battery power</div>
            </Button>
        </Listgroup>
    </div>
    <div class="suspend">
        <div class="text-white text-sm font-bold mb-3">Power Saving Options</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button
                class="flex flex-col items-center w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white"
                id="suspend-1"
            >
                <div class="flex justify-between w-full">
                    <span>Power Button Behavior</span>
                    <div class="flex items-center gap-2">
                        Power Off <img
                            src="/img/icons/pan-down-symbolic.svg"
                            alt="dropdown"
                            width="20"
                            class="img-icon"
                        />
                    </div>
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="top-end"
                triggeredBy="#suspend-1"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Suspend</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">
                    Power Off
                    <img
                        src="/img/icons/background-selected-symbolic.svg"
                        alt="tick"
                        width="15"
                        class="img-icon ml-2"
                    />
                </button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">Nothing</button>
            </Popover>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-center w-full py-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <div class="flex justify-between w-full">
                    <span>Show Battery Percentage</span>
                    <ToggleSwitch />
                </div>
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-power {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .battery,
    .power-mode,
    .power-option,
    .suspend {
        width: 36rem;
        padding-bottom: 30px;
    }

    .bar-battery {
        width: 100%;
        height: 3px;
        background-color: var(--grey-2);
    }

    .bar-remain-battery {
        width: 80%;
        height: 3px;
        background-color: #109b26;
        position: relative;
        bottom: 3px;
    }
</style>
