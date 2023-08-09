<script lang="ts">
    import { Listgroup, Button } from "flowbite-svelte";
    import { fade } from "svelte/transition";

    const accounts = [
        { icon: "/img/icons/ui/goa-account-ubuntusso.svg", name: "Ubuntu Single Sign-On" },
        { icon: "/img/icons/ui/goa-account-google.svg", name: "Google" },
        { icon: "/img/icons/ui/goa-account-msn.svg", name: "Microsoft" },
        { icon: "/img/icons/ui/goa-account-flickr.svg", name: "Flickr" },
        { icon: "/img/icons/ui/goa-account-foursquare.svg", name: "Foursquare" },
    ];
</script>

<div class="wrap-onlineacc" in:fade={{ duration: 150 }}>
    <h2 class="text-white font-thin pb-12">Connect to your data in the cloud</h2>
    <div class="add-an-acc">
        <span class="font-bold text-sm text-white">Add an account</span>
        <Listgroup active class="mt-3 bg-dark-3 border border-solid border-black rounded-none">
            {#each accounts as account, i}
                <Button class="flex justify-start gap-3 w-full py-4 bg-dark-3 hover:bg-[#2f2f2f] text-white ">
                    <img src={account.icon} alt={account.name} width="40" />
                    <span class="font-bold">{account.name}</span>
                </Button>
                {#if i != accounts.length - 1}
                    <hr class="border-none h-[1px] bg-black m-0" />
                {/if}
            {/each}
        </Listgroup>
    </div>
</div>

<style>
    .wrap-onlineacc {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .add-an-acc {
        width: 36rem;
    }
</style>
