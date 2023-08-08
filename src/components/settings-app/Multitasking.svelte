<script lang="ts">
    import { Button, ButtonGroup, InputAddon, Listgroup, ListgroupItem, NumberInput, Radio } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import RadioInput from "../common/RadioInput.svelte";

    let fixedWorkspaces = 4;
</script>

<div class="wrap-multitask scrollbar-thin overflow-y-scroll">
    <div class="general">
        <div class="text-sm font-bold">General</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-center w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <div class="flex justify-between w-full">
                    <div class="text-start">
                        <span>Hot Corner</span>
                        <div class="text-xs text-warm-grey">
                            Touch the top-left corner to open the Activities Overview.
                        </div>
                    </div>
                    <ToggleSwitch checked={false} />
                </div>
                <div class="wrap-illustrate">
                    <img src="/img/icons/ui/hot-corner-multitasking.png" class="illustrate" alt="hot-corner" />
                </div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-center w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <div class="flex justify-between w-full">
                    <div class="text-start">
                        <span>Active Screen Edges</span>
                        <div class="text-xs text-warm-grey">
                            Drag the windows against the top, left, and right screen edges to resize them.
                        </div>
                    </div>
                    <ToggleSwitch />
                </div>
                <div class="wrap-illustrate">
                    <img src="/img/icons/ui/active-screen-edge.png" class="illustrate" alt="screen-edge" />
                </div>
            </Button>
        </Listgroup>
    </div>
    <div class="workspace">
        <div class="text-sm font-bold">Workspaces</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            <Button class="flex justify-start w-full p-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput checked name="workspaces">
                    <div class="flex flex-col">
                        <div class="text-white text-start">Dynamic workspaces</div>
                        <div class="text-xs text-warm-grey">Automatically removes empty workspaces.</div>
                    </div>
                </RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-start w-full p-3 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="workspaces">
                    <div class="flex flex-col">
                        <div class="text-white text-start">Fixed number of workspaces</div>
                        <div class="text-xs text-warm-grey">Specify a number of permanent workspaces.</div>
                    </div>
                </RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <ListgroupItem
                class="flex justify-between w-full p-3 bg-dark-3 hover:bg-[#2f2f2f] focus:text-white hover:text-white text-white"
            >
                <div class="">Number of Workspaces</div>
                <ButtonGroup>
                    <NumberInput bind:value={fixedWorkspaces} class="w-10 bg-dark-2 text-white border-none" />
                    <Button class="bg-dark-2 text-white hover:bg-darker-white hover:text-white">-</Button>
                    <Button class="bg-dark-2 text-white hover:bg-darker-white hover:text-white">+</Button>
                </ButtonGroup>
            </ListgroupItem>
        </Listgroup>
    </div>
    <div class="multi-monitors">
        <div class="text-sm font-bold">Multi-Monitor</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-start w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div class="mb-3">
                    <RadioInput name="multi-monitor" checked>Workspaces on primary display only</RadioInput>
                </div>
                <div class="wrap-illustrate">
                    <img src="/img/icons/ui/multi-monitor-1.png" class="illustrate" alt="multi-monitor" />
                </div>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-start w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div class="mb-3">
                    <RadioInput name="multi-monitor">Workspaces on primary display only</RadioInput>
                </div>
                <div class="wrap-illustrate">
                    <img src="/img/icons/ui/multi-monitor-2.png" class="illustrate" alt="multi-monitor" />
                </div>
            </Button>
        </Listgroup>
    </div>
    <div class="app-switching pb-12">
        <div class="text-sm font-bold">Apllication Switching</div>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-start w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="app-switch-1" checked>
                    <div>Include applications from all workspaces</div>
                </RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-start w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="app-switch-1">
                    <div>Include applications from the current workspace only</div>
                </RadioInput>
            </Button>
        </Listgroup>

        <Listgroup active class="mt-6 bg-dark-3 border border-solid border-black">
            <Button class="flex flex-col items-start w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="app-switch-2" checked>
                    <div>Include applications from all monitors</div>
                </RadioInput>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex flex-col items-start w-full p-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <RadioInput name="app-switch-2">
                    <div>Include applications from each monitor only</div>
                </RadioInput>
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-multitask {
        height: 100%;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .general,
    .workspace,
    .multi-monitors,
    .app-switching {
        width: 36rem;
        margin-bottom: 30px;
    }

    .wrap-illustrate {
        /* w-[96%] h-[130px] mt-4 overflow-hidden */
        width: 100%;
        height: 130px;
        margin-top: 4rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
    }
    .illustrate {
        height: max-content;
        /* border: 1px solid #000; */
    }
</style>
