<script lang="ts">
    import { Listgroup, Button, Popover, ListgroupItem } from "flowbite-svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
    import { datetime } from "src/store";
    import { fade } from "svelte/transition";

    let normalText =
            "flex justify-between w-full py-4 bg-dark-3 hover:bg-dark-3 hover:text-white text-white focus:text-white",
        disabledText =
            "flex justify-between w-full py-4 bg-dark-3 hover:bg-dark-3 hover:text-warm-grey text-warm-grey focus:text-warm-grey";

    let checkDateTime = true;

    const timezoneOffset = $datetime.getTimezoneOffset() / 60;
    const timeZone = `${timezoneOffset < 0 ? "+" : "-"}${Math.abs(timezoneOffset).toString().padStart(2, "0")}`;
</script>

<div class="wrap-datetime" in:fade={{ duration: 150 }}>
    <div class="date-time">
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <div>Automatic Date & Time</div>
                    <div class="text-xs text-warm-grey">Requires internet access</div>
                </span>
                <ToggleSwitch bind:checked={checkDateTime} />
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <ListgroupItem class={disabledText + (!checkDateTime && " !text-white")}>
                <span>Date & Time</span>
                <div class="flex items-center gap-2">
                    {$datetime.toDateString()}, {$datetime.toTimeString().substring(0, 5)}
                </div>
            </ListgroupItem>
        </Listgroup>
    </div>

    <div class="time-zone">
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <span class="text-start">
                    <div>Automatic Time Zone</div>
                    <div class="text-xs text-warm-grey">Requires location services enable and Internet access</div>
                </span>
                <ToggleSwitch checked={false} disabled={true} />
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <ListgroupItem class={normalText}>
                <span>Date & Time</span>
                <div class="flex items-center gap-2">
                    {timeZone} ({Intl.DateTimeFormat().resolvedOptions().timeZone})
                </div>
            </ListgroupItem>
        </Listgroup>
    </div>

    <div class="time-format">
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white" id="tf-1">
                <div>Time Format</div>
                <div class="flex items-center gap-2">
                    24-hour
                    <img src="/img/icons/pan-down-symbolic.svg" alt="dropdown" width="20" class="img-icon" />
                </div>
            </Button>
            <Popover
                class="flex flex-col w-64 z-40 bg-dark-1"
                trigger="click"
                placement="bottom-end"
                triggeredBy="#tf-1"
            >
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">24-hour</button>
                <button class="block w-full text-start text-white p-3 hover:bg-dark-2">AM / PM</button>
            </Popover>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-datetime {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 22px;
    }

    .date-time,
    .time-zone,
    .time-format {
        width: 36rem;
        margin-bottom: 30px;
    }
</style>
