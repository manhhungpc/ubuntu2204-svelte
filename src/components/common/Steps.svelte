<script lang="ts">
    export let steps: any[],
        currentStep: number,
        color = "bg-blue-500";
</script>

<div class="flex justify-between gap-[3px] w-full h-full">
    {#each steps as _, i}
        {#if i < currentStep - 1}
            <div class="w-full h-full {color}" />
        {:else}
            <div class="w-full h-full bg-gray-300" />
        {/if}
    {/each}
</div>
