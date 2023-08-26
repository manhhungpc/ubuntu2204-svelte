<script lang="ts">
    import SkelentonApp from "src/components/common/SkelentonApp.svelte";
    import WindowBar from "src/components/common/WindowBar.svelte";
    import { AppName } from "src/interfaces/AppName";

    export let content = "";
    let textarea,
        linesNumber = 1,
        selectedLine = 1,
        selectedCol = 0;

    function getSelectedLine() {
        selectedLine = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
        linesNumber = textarea.value.split("\n").length;
    }

    function getSelectedCol() {
        const selectedLength = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
        selectedCol = textarea.value.substr(0, textarea.selectionStart).split("\n")[selectedLength - 1].length;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<SkelentonApp appName={AppName.texteditor} addStyles="height: 85vh; width: 50vw; border-radius: 12px 12px 0 0;">
    <WindowBar name={AppName.texteditor}>
        <div class="flex justify-between w-full">
            <div class="flex">
                <button class="flex items-center ml-2 bg-grey-2 py-2 px-4 rounded-md" style="border: 1px solid #000;">
                    <span class="text-white mr-1">Open</span>
                    <img
                        src="/img/icons/pan-down-symbolic.svg"
                        alt="search-btn"
                        width="18"
                        height="18"
                        class="img-icon"
                    />
                </button>
                <button class="flex items-center ml-2 bg-grey-2 p-2 rounded-md" style="border: 1px solid #000;">
                    <img
                        src="/img/icons/tab-new-symbolic.svg"
                        alt="tabnew-btn"
                        width="18"
                        height="18"
                        class="img-icon"
                    />
                </button>
            </div>
            <span class="flex items-center text-white">Untitled Document 1</span>
            <div class="flex">
                <button class="flex items-center ml-2 bg-grey-2 py-2 px-4 rounded-md" style="border: 1px solid #000;">
                    <span class="text-white">Save</span>
                </button>
                <button class="flex items-center ml-2 bg-grey-2 p-2 rounded-md" style="border: 1px solid #000;">
                    <img
                        src="/img/icons/open-menu-symbolic.svg"
                        alt="tabnew-btn"
                        width="18"
                        height="18"
                        class="img-icon"
                    />
                </button>
            </div>
        </div>
    </WindowBar>
    <div class="main-app">
        <div class="flex flex-col text-soft-white">
            {#each { length: linesNumber } as _, i}
                <div class="line-number">{i + 1}</div>
            {/each}
        </div>
        <div class="hightlight-line" style:margin-top="{18 * (selectedLine - 1)}px" />
        <div class=" w-full">
            <textarea
                class="editor"
                bind:this={textarea}
                value={content}
                on:input={getSelectedLine}
                on:click={getSelectedLine}
                on:keyup={getSelectedCol}
            />
        </div>
    </div>
    <div class="footer">
        <div>Plain Text</div>
        <div>Tab Width: 8</div>
        <div class="ml-5">Ln {selectedLine},Col {selectedCol + 1}</div>
        <div class="!pr-5">INS</div>
    </div>
</SkelentonApp>

<style>
    .main-app {
        background-color: var(--bg-dark-app);
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        z-index: -10;
    }

    .editor {
        resize: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: var(--warm-grey);
        line-height: 18px;
        font-family: "Ubuntu Mono", monospace;
        font-size: 14px;
        border: none;
        caret-color: var(--main-orange);
        padding: 0;
    }

    .editor:hover {
        cursor: url(/cursor/xterm.svg), text;
    }
    .editor:focus {
        outline: none;
    }

    .line-number {
        width: 20px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Ubuntu Mono", monospace;
        user-select: none;
    }

    .hightlight-line {
        width: 100%;
        height: 18px;
        /* margin-top: 36px; */
        padding-left: 20px;
        position: absolute;
        background-color: var(--bg-darker-white);
        z-index: -1;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 24px;
        background-color: #353535;
        color: #fff;
        border-top: 1px solid #000;
        font-size: 12px;
    }

    .footer > * {
        padding: 3px 0;
    }
</style>
