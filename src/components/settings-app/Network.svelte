<script lang="ts">
</script>

<div class="wrap-network">
    <div class="flex justify-between w-full h-full mb-2">
        <div class="font-bold text-sm text-white">VPN</div>
        <button
            class="ml-2 pt-2 pb-1 px-2 rounded-md hover:bg-light-white hover:border hover:border-solid hover:border-black"
        >
            <img src="/img/icons/list-add-symbolic.svg" alt="search-btn" width="18" height="18" class="img-icon" />
        </button>
    </div>

    <div class="w-full mb-6">
        <div class="bg-dark-3 px-4 py-5 text-white text-sm">Not setup</div>
    </div>

    <div class="w-full flex justify-between items-center bg-dark-3">
        <div class="px-4 py-5 text-white text-sm font-bold">Network Proxy</div>
        <div class="flex flex-row items-center">
            <span class="text-[#c0c0c0] text-sm mr-3">Off</span>
            <button class="mr-4 flex items-center py-2 px-2 h-max rounded-md bg-darker-white hover:bg-light-white">
                <img
                    src="/img/icons/system-settings-symbolic.svg"
                    alt="setting-btn"
                    width="18"
                    height="18"
                    class="img-icon"
                />
            </button>
        </div>
    </div>
</div>

<style>
    .wrap-network {
        @apply flex justify-center items-center flex-col mx-24;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }
</style>
