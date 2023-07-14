<script lang="ts">
    import { Input } from "flowbite-svelte";
    import Carousel from "svelte-carousel";
    import { fly } from "svelte/transition";
    import { showApplication } from "src/store";

    let carousel; // for calling methods of the carousel instance

    const swipingHorizontal = (e: WheelEvent) => {
        let directionX = e.deltaX;

        if (directionX > 0) {
            // swipe right
            carousel.goToNext();
        } else {
            // swipe left
            carousel.goToPrev();
        }
    };
</script>

<div class="base">
    <main class="main-screen">
        <div class="w-[18rem] h-[35vh]">
            <Input
                placeholder="Type to search"
                size="lg"
                class="bg-dark-1 py-1 rounded-full border-none placeholder-white text-white"
            >
                <img
                    slot="left"
                    aria-hidden="true"
                    src="/img/icons/preferences-system-search-symbolic.svg"
                    alt="search"
                    class="w-5 h-5"
                />
            </Input>
        </div>

        {#if $showApplication}
            <div class="all-apps" on:wheel={(e) => swipingHorizontal(e)} transition:fly={{ y: 500, duration: 300 }}>
                <Carousel infinite={false} arrows={false} swiping={true} bind:this={carousel}>
                    <div class="grid grid-cols-8 h-max">
                        {#each { length: 24 } as _, i}
                            <img src="/img/apps/accessories-calculator.png" alt="demo" width="80" />
                        {/each}
                    </div>
                    <div class="grid grid-cols-8">
                        {#each { length: 24 } as _, i}
                            <img src="/img/apps/calendar-app.png" alt="demo" width="100" />
                        {/each}
                    </div>
                    <!-- <div slot="dots">
                    <div class="h-5 w-5 bg-dark-1" />
                </div> -->
                </Carousel>
            </div>
        {/if}
    </main>
</div>

<style>
    .base {
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        background-color: #222222;
    }

    .main-screen {
        margin-left: 72px;
        margin-top: calc(1.7rem + 1.7rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .all-apps {
        background-color: rgba(255, 0, 0, 0.055);
        height: calc(65vh - 3.4rem);
        width: calc(80vw - 72px);
    }
</style>
