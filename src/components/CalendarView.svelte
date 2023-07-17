<script lang="ts">
    import { Card } from "flowbite-svelte";
    import { Toggle } from "flowbite-svelte";
    import calendarize from "calendarize";
    import { doNotDisturb } from "src/store";
    import ToggleSwitch from "./common/ToggleSwitch.svelte";
    $: console.log($doNotDisturb);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const labels = ["M", "T", "W", "T", "F", "S", "S"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let today = new Date();

    let currYear = today.getFullYear();
    let currMonth = today.getMonth();
    let currDate = today.getDate();
    let offset = 1;
    let dates: string[] = [];

    let prev = calendarize(new Date(currYear, currMonth - 1), offset);
    let current = calendarize(new Date(currYear, currMonth), offset);
    let next = calendarize(new Date(currYear, currMonth + 1), offset);

    function prevMonth() {
        [current, next] = [prev, current];

        if (--currMonth < 0) {
            currMonth = 11;
            currYear--;
        }

        prev = calendarize(new Date(currYear, currMonth - 1), offset);
        getMonthDates();
    }

    function nextMonth() {
        [prev, current] = [current, next];

        if (++currMonth > 11) {
            currMonth = 0;
            currYear++;
        }

        next = calendarize(new Date(currYear, currMonth + 1), offset);
        getMonthDates();
    }

    function getMonthDates() {
        dates = [];
        const lastPrevWeek = prev[prev.length - 1];
        const firstNextWeek = next[0];
        for (let i = 0; i < current.length; i++) {
            for (let j = 0; j < current[i].length; j++) {
                let currentDate = current[i][j];

                // if(currentDate < 10) currentDate = "0" + currentDate

                if (currentDate === 0 && i == 0) dates.push("prev|" + lastPrevWeek[j]);
                else if (currentDate === 0 && i == current.length - 1) dates.push("next|" + firstNextWeek[j]);
                else if (
                    new Date(currYear, currMonth, currentDate).toLocaleDateString() === new Date().toLocaleDateString()
                )
                    dates.push("today|" + currDate);
                else dates.push(String(currentDate));
            }
        }

        return dates;
    }
    getMonthDates();
</script>

<Card class="h-max w-max bg-dark-2 !p-0 flex flex-row" size="xl">
    <div class="notif">
        <div class="flex justify-start ml-4">
            <p class="text-sm font-extralight mr-3">Do Not Disturb</p>
            <ToggleSwitch />
            <!-- <Toggle on:change={(e) => doNotDisturb.set(!$doNotDisturb)} /> -->
        </div>
        <button class="bg-darker-white px-6 py-[5px] text-white text-sm rounded mb-2 mr-[15px]">Clear</button>
    </div>
    <div class="calendar-view">
        <div class="calendar">
            <div class="mx-[10px] text-sm opacity-50">{weekday[today.getDay()]}</div>
            <div class="mx-[10px] text-xl opacity-50">{months[today.getMonth()]} {today.getDate()} {currYear}</div>
            <div class="toolbar">
                <button class="prev-button" on:click={prevMonth}>
                    <img src="/img/icons/pan-start-symbolic.svg" alt="arrows" class="arrow_months" />
                </button>
                <span class="month-year">{months[currMonth]}</span>
                <button class="next-button" on:click={nextMonth}>
                    <img src="/img/icons/pan-end-symbolic.svg" alt="arrows" class="arrow_months" />
                </button>
            </div>
            <div class="week-days">
                {#each labels as day}
                    <div class="day-name">{day}</div>
                {/each}
            </div>
            <div class="dates">
                {#each dates as date}
                    <!-- Conditional render if it is date of previous/next month, today or the other day in month -->
                    {#if date.includes("prev") || date.includes("next")}
                        <div class="date out_month">
                            {Number(date.split("|")[1]) < 10
                                ? `0${Number(date.split("|")[1])}`
                                : Number(date.split("|")[1])}
                        </div>
                    {:else if date.includes("today")}
                        <div class="date today">
                            {Number(date.split("|")[1]) < 10
                                ? `0${Number(date.split("|")[1])}`
                                : Number(date.split("|")[1])}
                        </div>
                    {:else}
                        <div class="date">
                            {Number(date) < 10 ? `0${date}` : date}
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
        <button class="mx-3 mb-4 bg-darker-white text-start rounded w-[92%]">
            <div class="pl-2 py-2">
                <p class="text-white text-sm opacity-50 m-0 mb-2">Today</p>
                <span class="text-white text-sm">No Events</span>
            </div>
        </button>
    </div>
</Card>

<style>
    .notif {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 26rem;
        margin-bottom: 8px;
        color: var(--white);
    }

    .calendar-view::before {
        position: absolute;
        top: 10px;
        height: 96%;
        content: " ";
        border-right: 1px solid var(--bg-soft-white);
    }

    .calendar {
        width: max-content;
        min-height: 305px;
        border-radius: 5px;
        padding: 20px;
        color: var(--white);
        font-weight: 300;
    }

    .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        margin-top: 30px;
    }

    .out_month {
        opacity: 0.5;
    }

    .today {
        background-color: var(--main-orange);
    }

    .today:hover {
        background-color: var(--main-orange) !important;
    }

    .arrow_months {
        height: 16px;
        filter: brightness(0) invert(1);
    }

    .arrow_months:hover {
        cursor: pointer;
    }

    .prev-button,
    .next-button {
        border: none;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
    }

    .month-year {
        font-size: 14px;
    }

    .week-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        margin-bottom: 5px;
    }

    .day-name {
        text-align: center;
        font-size: 12px;
        opacity: 0.5;
    }

    .dates {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        /* min-height: 190px; */
        /* font-size: 12px; */
    }

    .date {
        text-align: center;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        transition: background-color 0.3s;
        font-size: 12px;
    }

    .date:hover {
        background-color: var(--bg-soft-white);
    }
</style>
