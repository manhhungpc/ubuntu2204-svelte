<script lang="ts">
    import { Button, Toast, Tooltip } from "flowbite-svelte";
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";
    import { onMount } from "svelte";

    let histories = [],
        formula = "",
        error = null;
    const buttons = [
        "C",
        "(",
        ")",
        "mod",
        "π", //PI
        "7",
        "8",
        "9",
        "÷", // division
        "√", // square-root
        "4",
        "5",
        "6",
        "×", // multiply
        "x²", // square
        "1",
        "2",
        "3",
        "-",
        "=",
        "0",
        ".",
        "%",
        "+",
    ];

    function displayFormula(value) {
        // handle keyboard input
        formula = document.getElementById("formula-input").innerText;

        // clear 1 character button
        if (value == "C") {
            // if (formula.slice(-6) == "&#247;" || formula.slice(-6) == "&#215;") {
            //     formula = formula.slice(0, -6);
            // } else if (formula.slice(-7) == "&radic;" || formula.slice(-7) == "x&#178;") {
            //     formula = formula.slice(0, -7);
            // } else
            if (formula.slice(-3) == "mod") {
                formula = formula.slice(0, -3);
            } else formula = formula.slice(0, -1);
        } else {
            if (value == "x²") formula = formula + `²`;
            else if (value == "mod") formula = formula + ` mod `;
            else formula = formula + `${value}`;
        }
    }

    /**
     * Currently not support square-root with parenthesis. Eg: √(23+43) or √(-23) is invalid
     */
    function parseSqrt(formula: string) {
        let parseFormula = "";
        for (let i = 0; i < formula.length; i++) {
            if (formula[i] === "√") {
                i++;
                let numberToSqrt = "";

                //@ts-ignore
                while (!isNaN(numberToSqrt + formula[i])) {
                    if (i == formula.length) break;
                    numberToSqrt += formula[i];
                    i++;
                }
                console.log("🚀 ~ file: Calculator.svelte:73 ~ numberToSqrt:", numberToSqrt);
                parseFormula += "Math.sqrt(" + numberToSqrt + ")" + (i == formula.length ? "" : formula[i]);
            } else {
                parseFormula += formula[i];
            }
        }
        return parseFormula;
    }

    /**
     * Currently not support square with parenthesis. Eg: (23+43)^2 or (-23)^2 is invalid
     */
    function parseSquare(formula: string) {
        let parseFormula = "";
        for (let i = formula.length - 1; i >= 0; i--) {
            if (formula[i] === "²") {
                i--;
                let numberToPow = "";

                //@ts-ignore
                while (!isNaN(formula[i] + numberToPow)) {
                    if (formula[i] == "+" || formula[i] == "-") {
                        break;
                    }
                    if (i < 0) break;
                    numberToPow = formula[i] + numberToPow;
                    i--;
                }

                parseFormula = (i < 0 ? "" : formula[i]) + "Math.pow(" + numberToPow + ",2)" + parseFormula;
                console.log("🚀 ~ file: Calculator.svelte:105 ~ numberToPow:", numberToPow);
            } else {
                parseFormula = formula[i] + parseFormula;
            }
        }
        return parseFormula;
    }

    function validateAndFormat(formula: string) {
        const beautify = formula.replace("*", "×");

        formula = parseSqrt(formula);
        formula = parseSquare(formula);
        console.log(formula);
        const formated = formula
            .replaceAll("π", Math.PI.toFixed(5))
            .replaceAll("÷", "/")
            .replaceAll("×", "*")
            .replaceAll("%", "/100")
            .replaceAll("mod", "%");

        // beautify: convert to human-readable
        // formated: use to calculate
        return {
            beautify,
            formated,
        };
    }

    function calculate(formula: string) {
        formula = document.getElementById("formula-input").innerText;
        const { beautify, formated } = validateAndFormat(formula);

        try {
            const result = new Function(`'use strict';return(${formated})`)();
            histories = [...histories, { formula: beautify, result: Math.round(result * 10000) / 10000 }];
            document.getElementById("formula-input").textContent = String(Math.round(result * 10000) / 10000);
        } catch (e) {
            error = "Invalid expression";
        }
    }

    onMount(() => {
        document.getElementById("formula-input").focus();
    });

    $: if (error) {
        console.log(error);
        setTimeout(() => {
            error = null;
        }, 2000);
    }
</script>

<SkelentonApp appName={AppName.calculator} addStyles="height: 40rem; width: 30rem">
    <WindowBar name={AppName.calculator}>
        <div class="flex justify-between items-center w-full">
            <button class="ml-2 bg-grey-2 pt-2 pb-1 px-4 rounded-md outline outline-1 outline-black">
                <span class="text-white text-base font-thin"> Undo </span>
            </button>
            <p class="text-white font-bold">Basic</p>
            <button class="mr-2 bg-grey-2 pt-2 pb-1 px-2 rounded-md">
                <img src="/img/icons/open-menu-symbolic.svg" alt="search-btn" width="15" height="15" class="img-icon" />
            </button>
        </div>
    </WindowBar>

    <div class="main-app">
        <div id="display-histories" class="histories scrollbar-thin">
            {#each histories as history}
                <div class="history">
                    <div>
                        {history.formula}
                    </div>
                    <div class="flex justify-between">
                        <span class="text-warm-grey"> = </span>
                        <span>
                            {history.result}
                        </span>
                    </div>
                </div>
            {/each}
        </div>
        <div class="formula">
            {#if error}
                <Toast simple class="absolute right-1 w-1/3">{error}</Toast>
            {/if}
            <div
                contenteditable="true"
                id="formula-input"
                class="w-full h-full resize-none text-white text-xl font-bold px-3 py-2 border-0 overflow-hidden bg-dark-4 focus:outline-none"
            >
                {@html formula}
            </div>
        </div>
        <div class="buttons">
            {#each buttons as button}
                {#if button === "C"}
                    <Button
                        class="bg-red-1 hover:bg-red-900 font-bold text-lg outline outline-1 outline-gray-900"
                        on:click={(e) => displayFormula(button)}
                    >
                        {button}
                    </Button>
                {:else if button === "="}
                    <div style="height: calc(200% + 5px);">
                        <Button
                            class="w-full h-full bg-green-1 hover:bg-[#085113] font-bold text-lg  outline outline-1 outline-gray-900"
                            on:click={(e) => calculate(formula)}
                        >
                            {button}
                        </Button>
                    </div>
                {:else}
                    <Button
                        class="bg-darker-white font-bold text-lg  outline outline-1 outline-gray-900"
                        on:click={(e) => displayFormula(button)}
                    >
                        {@html button}
                    </Button>
                {/if}
            {/each}
        </div>
    </div>
</SkelentonApp>

<style>
    .main-app {
        height: 100%;
        display: grid;
        grid-template-rows: 30% 10% 50%;
        /* background-color: var(--dark-4); */
        background-color: var(--bg-grey-1);
        border-top: 2px solid #1e1e1e;
    }

    .histories {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        overflow-y: scroll;
        background-color: var(--dark-4);
        padding: 10px 10px;
        color: var(--white);
        font-size: 18px;
    }

    .history {
        display: grid;
        grid-template-columns: 65% 35%;
        margin-top: 15px;
    }

    .formula {
        border-top: 2px solid #1e1e1e;
        border-bottom: 3px solid #000;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px 5px;
        background-color: var(--bg-grey-1);
        padding: 10px 10px;
    }
</style>
