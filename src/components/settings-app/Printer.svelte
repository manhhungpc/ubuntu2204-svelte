<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="wrap-printer" in:fade={{ duration: 150 }}>
    <div class="flex flex-col items-center gap-2">
        <img src="/img/icons/printer-symbolic.svg" alt="printer" width="90" />
        <span class="text-warm-grey"> No Printer </span>
    </div>

    <button class="add-printer">Add a Printer...</button>
    <button class="printer-settings">Additional Printer Settings...</button>
</div>

<style>
    .wrap-printer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 100%;
    }

    .add-printer {
        padding: 6px 16px;
        color: #fff;
        background-color: var(--green-1);
        border-radius: 3px;
    }

    .add-printer:hover {
        background-color: #168928;
    }

    .printer-settings {
        padding: 6px 16px;
        border: 1px solid #000;
        color: #fff;
        background-color: #3e3e3e;
        border-radius: 5px;
    }

    .printer-settings:hover {
        background-color: #494949;
    }
</style>
