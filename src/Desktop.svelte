<script lang="ts">
    import AppGrid from "./components/AppGrid.svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { locked, openApps, prompts, showApplication, background, confirmOff, confirmRestart } from "src/store";
    import { AppName } from "./interfaces/AppName";
    import LockScreen from "./components/LockScreen.svelte";
    import { fade } from "svelte/transition";
    import Popup from "./components/common/Popup.svelte";
    import { preloadImages } from "./utils/preload";
    import { onMount } from "svelte";
    import BootScreen from "./components/BootScreen.svelte";

    const scale = tweened(1, { duration: 300, easing: cubicOut });
    const xPos = tweened(0, { duration: 300, easing: cubicOut });
    const yPos = tweened(0, { duration: 300, easing: cubicOut });

    $: {
        scale.set($showApplication ? 0.15 : 1);
        xPos.set($showApplication ? 2 : 0);
        yPos.set($showApplication ? -28 : 0);
    }

    $: if (!$openApps.some((app) => app.name == AppName.terminal)) {
        prompts.set([{ done: false, file: "" }]);
    }
    let booting = true;

    onMount(() => {
        booting = false;
    });
</script>

<svelte:head>
    <link rel="preload" as="image" href="/img/Wallpaper/Jammy-Jellyfish_WP_2560x1440.png" />
    {#each preloadImages() as image}
        <link rel="preload" as="image" href={image} />
    {/each}
</svelte:head>

{#if $locked}
    <LockScreen />
{/if}
{#if booting}
    <BootScreen />
{/if}
<main class="desktop" style:transform="translate({$xPos}vw, {$yPos}vh) scale({$scale})">
    {#key $background}
        <div class="background-img" style:background-image="url({$background})" transition:fade />
    {/key}
    <AppGrid />
    {#each $openApps as app}
        <svelte:component this={app.component} />
    {/each}
    {#if $confirmOff}
        <Popup id="power-off">
            <div class="text-white text-center p-8">
                <h2>Power Off</h2>
                <p>The system will power off automatically in 60 seconds.</p>
            </div>
            <div class="wrap-confirm-btn">
                <button class="rounded-bl-lg confirm-btn dash-btn" on:click={() => ($confirmOff = false)}>
                    Cancel
                </button>
                <button class="rounded-br-lg confirm-btn" on:click={() => window.close()}>Power Off</button>
            </div>
        </Popup>
    {/if}
    {#if $confirmRestart}
        <Popup id="power-off">
            <div class="text-white text-center p-8">
                <h2>Restart</h2>
                <p>The system will restart automatically in 60 seconds.</p>
            </div>
            <div class="wrap-confirm-btn">
                <button class="rounded-bl-lg confirm-btn dash-btn" on:click={() => ($confirmRestart = false)}>
                    Cancel
                </button>
                <button class="rounded-br-lg confirm-btn" on:click={() => window.location.reload()}>Restart</button>
            </div>
        </Popup>
    {/if}
</main>

<style>
    .desktop {
        width: 100vw;
        height: 100vh;
        /* background-image: url(/img/Wallpaper/Jammy-Jellyfish_WP_1920x1080.webp); */
    }
    .background-img {
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }

    .wrap-confirm-btn {
        /* bg-dark-3 w-full flex gap-4  */
        background-color: var(--bg-dark-3);
        width: 100%;
        margin: 0;
        display: flex;
        border-radius: 12px;
    }

    .confirm-btn {
        color: #fff;
        background-color: #ffffff12;
        width: 100%;
        padding: 14px;
    }
    .confirm-btn:hover {
        background-color: #ffffff2a;
    }

    .dash-btn {
        border-right: 1px solid var(--warm-grey);
    }
</style>
