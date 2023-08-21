<script lang="ts">
    export let checked = true,
        disabled = false;
    let value = "on";
    function handleClick(event) {
        const target = event.target;

        const state = target.getAttribute("aria-checked");

        checked = state === "true" ? false : true;

        value = checked === true ? "on" : "off";
    }
</script>

<div class="s s--slider">
    <button role="switch" aria-checked={checked} on:click={handleClick} on:click {disabled} />
</div>

<style>
    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        width: 3.2rem;
        height: 1.7rem;
        position: relative;
        margin: 0 0 0 0.5rem;
        background: var(--gray);
        border: none;
    }

    .s--slider button::before {
        content: "";
        position: absolute;
        width: 1.6em;
        height: 1.6em;
        background: #fff;
        top: 0.2em;
        right: 1.9em;
        transition: transform 0.3s;
    }

    .s--slider button[aria-checked="true"] {
        background-color: var(--main-orange);
    }

    .s--slider button[aria-checked="false"] {
        background-color: var(--grey-1);
    }

    .s--slider button[aria-checked="true"]::before {
        transform: translateX(1.45rem) translateY(-1px);
        transition: transform 0.3s;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 0px 1px var(--main-orange);
    }

    .s--slider button {
        border-radius: 1.7em;
    }

    .s--slider button::before {
        border-radius: 100%;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 8px var(--main-orange);
        border-radius: 1.7em;
    }

    @media screen and (max-height: 762px) {
        .s--slider button::before {
            top: 0.1em;
            right: 1.6em;
        }
    }
</style>
