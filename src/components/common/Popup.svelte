<script lang="ts">
    export let id: string;
</script>

<div {id} tabindex="-1" class="backdrop">
    <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-dark-3 rounded-lg shadow">
            <div class="text-center rounded-lg">
                <slot />
            </div>
        </div>
    </div>
</div>

<style>
    .backdrop {
        @apply fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] bg-black bg-opacity-70;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
