<script lang="ts">
    import { datetime, background } from "src/store";
    import { fade } from "svelte/transition";
    const formatDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        hourCycle: "h23",
        timeStyle: "short",
    });

    const backgrounds = [
        "/img/Wallpaper/Mirror_by_Uday_Nakade.jpg",
        "/img/Wallpaper/Blue_flower_by_Elena_Stravoravdi.jpg",
        "/img/Wallpaper/canvas_by_roytanck.jpg",
        "/img/Wallpaper/Cherry_Tree_in_Lakones_by_elenastravoravdi.jpg",
        "/img/Wallpaper/DSC2943_by_kcpru.jpg",
        "/img/Wallpaper/jj_dark_by_Hiking93.jpg",
        "/img/Wallpaper/jj_light_by_Hiking93.jpg",
        "/img/Wallpaper/Optical_Fibers_in_Dark_by_Elena_Stravoravdi.jpg",
        "/img/Wallpaper/ubuntu2_by_arman1992.jpg",
        "/img/Wallpaper/ubuntu_by_arman1992.jpg",
        "/img/Wallpaper/Jammy-Jellyfish_WP_1920x1080.webp",
        "/img/Wallpaper/Jammy-Jellyfish_WP_4096x2304_Grey.png",
    ];

    function setBackground(image: string) {
        $background = image;
    }
</script>

<div class="wrap-background scrollbar-thin" in:fade={{ duration: 100 }}>
    <div class="w-full flex flex-col items-center justify-center pt-4 bg-[#2d2d2d]">
        <div class="preview">
            <div class="preview-panel">
                <span>Activities</span>
                <span>{formatDate.format($datetime).split(",")[2]}</span>
                <div>
                    <img src="/img/icons/network-signal-good-symbolic.svg" alt="wifi" class="preview-utils-icon" />
                    <img src="/img/icons/audio-volume-high-symbolic.svg" alt="audio" class="preview-utils-icon" />
                </div>
            </div>
            <img src="/img/Wallpaper/Jammy-Jellyfish_WP_1920x1080.webp" alt="preview" width="250" />
        </div>
        <div class="text-warm-grey text-sm mt-4 mb-3">This background selection only applies to the dark style</div>
    </div>
    <div class="backgrounds">
        {#each backgrounds as background}
            <button on:click={(e) => setBackground(background)}>
                <img src={background} alt="background" width="180" height="180" class="bg-image" />
            </button>
        {/each}
    </div>
</div>

<style>
    .wrap-background {
        height: 100%;
        background-color: var(--bg-dark-3);
        overflow: auto;
    }

    .preview {
        width: 250px;
    }

    .preview-panel {
        color: #fff;
        font-size: 8px;
        background-color: var(--bg-dark-1);
        width: 100%;
        height: 10px;
        display: flex;
        justify-content: space-between;
    }

    .preview-utils-icon {
        height: 8px;
        margin: 0 1px 0 1px;
        filter: brightness(0) invert(1);
    }

    .backgrounds {
        height: max-content;
        display: grid;
        gap: 15px;
        row-gap: 15px;
        grid-template-columns: repeat(auto-fill, 160px);
        padding: 15px 5px 20px 5px;
        justify-content: center;
    }

    .bg-image {
        width: 160px;
        height: 120px;
        object-fit: cover;
        object-position: center;
    }
</style>
