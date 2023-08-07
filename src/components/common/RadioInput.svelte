<script lang="ts">
    export let name: string,
        checked = false;
</script>

<div class="flex items-center gap-2">
    <input id="orange-radio" type="radio" {checked} value="" {name} />
    <slot />
</div>

<style>
    #orange-radio {
        appearance: none;
        background-color: #2f2f2f;
        height: 16px;
        width: 16px;
        outline: 1px solid #000;
        border-radius: 50%;
    }

    /* Checked */
    #orange-radio:checked {
        background-color: #e95420;
        border-radius: 50%;
        outline: 1px solid #e95420;
    }

    /* Center dot */
    #orange-radio:checked:after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: white;
        position: relative;
        top: 25%;
        left: 35%;
    }
</style>
