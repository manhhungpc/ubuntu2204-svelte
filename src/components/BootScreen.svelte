<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="lock-screen" transition:fade={{ duration: 200, delay: 1500 }}>
    <div class="pt-[40vh]">
        <img src="/img/icons/process-working-symbolic.svg" alt="user-icon" class="img-icon animate-spin" width="60" />
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
        z-index: 101;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
