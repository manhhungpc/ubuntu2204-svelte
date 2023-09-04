<script lang="ts">
    import { Listgroup, Button } from "flowbite-svelte";
    import { fade } from "svelte/transition";
</script>

<div class="wrap-sharing" in:fade={{ duration: 150 }}>
    <div class="computer-name">
        <div class="text-white text-sm font-bold mb-3">Computer name</div>
        <input type="text" value="admin-MyLaptop" class="name-input" />
    </div>
    <div class="sharing mt-5">
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            <Button class="flex justify-start gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <span class="font-bold">Remote Desktop</span>
            </Button>
            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-start gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                <span class="font-bold">Media sharing</span>
            </Button>
        </Listgroup>
    </div>
</div>

<style>
    .wrap-sharing {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .computer-name,
    .sharing {
        width: 36rem;
    }

    .name-input {
        color: #fff;
        background-color: var(--bg-window-bar);
        width: calc(100% - 16px); /* Minus the padding */
        border: 1px solid #000;
        padding: 10px 8px;
    }

    .name-input:hover {
        cursor: text;
    }
</style>
