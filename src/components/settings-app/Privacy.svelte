<script lang="ts">
    import { Listgroup, Button } from "flowbite-svelte";
    import RadioInput from "../common/RadioInput.svelte";
    import { fade } from "svelte/transition";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
</script>

<div class="wrap-privacy scrollbar-thin overflow-y-scroll" in:fade={{ duration: 150 }}>
    <div class="privacy">
        <div class="text-white text-sm font-bold mb-3">Privacy</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-between w-full py-4 bg-dark-3 hover:bg-dark-3 text-white rounded-none">
                <div class="text-white text-start">Enable this privacy</div>
                <ToggleSwitch />
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-privacy {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }

    .privacy {
        width: 36rem;
    }
</style>
