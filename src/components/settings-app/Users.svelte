<script lang="ts">
    import { Avatar, Button, Listgroup, ListgroupItem } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import Slider from "../common/Slider.svelte";
    import ToggleSwitch from "../common/ToggleSwitch.svelte";
</script>

<div class="wrap-users" in:fade={{ duration: 150 }}>
    <div class="header">
        <div class="flex items-center gap-3">
            <Avatar class="bg-[#57E389] text-white text-6xl p-6">U</Avatar>
            <span class="text-white text-xl font-bold">user</span>
        </div>
        <div>
            <button class="edit-btn">
                <img src="/img/icons/document-edit-symbolic.svg" alt="edit" height="15" width="15" class="img-icon" />
            </button>
        </div>
    </div>
    <div class="auth">
        <div class="text-white text-sm font-bold mb-3">Authentication & Login</div>
        <Listgroup active class="w-full bg-dark-3 border border-solid border-black">
            <Button class="flex justify-between gap-2 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div>Password</div>
                <div class="flex items-center gap-2 text-warm-grey">
                    Disabled
                    <img src="/img/icons/pan-end-symbolic.svg" alt="end" width="18" />
                </div>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between gap-2 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div>Fingerprint Login</div>
                <div class="flex items-center gap-2 text-warm-grey">
                    Disabled
                    <img src="/img/icons/pan-end-symbolic.svg" alt="end" width="18" />
                </div>
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between gap-2 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-warm-grey">
                <div>Automatic Login</div>
                <ToggleSwitch checked={false} />
            </Button>

            <hr class="border-none h-[1px] bg-black m-0" />
            <Button class="flex justify-between gap-2 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white">
                <div>Account Activity</div>
                <div class="flex items-center gap-2 text-warm-grey">
                    Logged in
                    <img src="/img/icons/pan-end-symbolic.svg" alt="end" width="18" />
                </div>
            </Button>
        </Listgroup>
    </div>
    <div class="w-[26rem] flex justify-end absolute bottom-10">
        <button class="px-4 py-2 text-sm text-warm-grey bg-dark-3 rounded-md" style="border: 1px solid #000;">
            Remove User ...
        </button>
    </div>
</div>

<style>
    .wrap-users {
        height: calc(100% - 48px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding: 30px;
    }

    .header,
    .auth {
        width: 26rem;
        padding-bottom: 30px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 60px 0 30px 0;
    }

    .edit-btn {
        padding: 8px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--bg-light-white);
    }
</style>
