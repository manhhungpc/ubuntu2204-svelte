<script lang="ts">
    let checked = true;
    let value = "on";
    function handleClick(event) {
        const target = event.target;

        const state = target.getAttribute("aria-checked");

        checked = state === "true" ? false : true;

        value = checked === true ? "on" : "off";
    }
</script>

<div class="s s--slider">
    <button role="switch" aria-checked={checked} on:click={handleClick} />
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
        width: 1.7em;
        height: 1.7em;
        background: #fff;
        top: 0.15rem;
        right: 1.6rem;
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
</style>
