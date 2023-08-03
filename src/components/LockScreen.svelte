<script lang="ts">
    import { Button } from "flowbite-svelte";
    import { locked } from "src/store";
    import { fade, slide } from "svelte/transition";
</script>

<div class="lock-screen" in:slide={{ duration: 200, axis: "y" }} out:fade={{ duration: 200 }}>
    <div class="pb-10">
        <Button class="pr-44 py-5 bg-grey-2 hover:bg-[#5757576d]" on:click={(e) => ($locked = false)}>
            <img src="/img/icons/system-users-symbolic.svg" alt="user-icon" class="img-icon" width="30" />
            <span class="ml-4 text-base"> admin </span>
        </Button>
    </div>
    <div class="absolute bottom-5">
        <img src="/img/ubuntu-logo-dark.png" alt="ubuntu-logo" height="80" />
    </div>
</div>

<style>
    .lock-screen {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 100;
        background-color: var(--bg-grey-1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
