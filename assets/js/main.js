/* ============================================
   LIGHT THE FORGE
   Progressive enhancement: static artwork is complete without JavaScript.
   One finite opacity animation. No storage, network calls or tracking.
============================================ */
"use strict";

const forgeButton = document.querySelector("#light-forge");
const forgeArt = document.querySelector("#forge-art");
const forgeStatus = document.querySelector("#forge-status");

if (forgeButton && forgeArt && forgeStatus) {
    const control = document.querySelector(".forge-control");
    const energy = forgeArt.querySelector(".forge-energy");
    let finishTimer;
    let active = false;

    const finishForge = () => {
        if (!active) return;
        active = false;
        window.clearTimeout(finishTimer);
        forgeArt.classList.remove("is-lit");
        forgeButton.removeAttribute("aria-disabled");
        forgeStatus.textContent = "The forge is ready for another spark.";
    };

    control.hidden = false;

    forgeButton.addEventListener("click", () => {
        if (active) return;
        active = true;
        forgeButton.setAttribute("aria-disabled", "true");
        forgeStatus.textContent = "The forge glows with emerald light.";
        forgeArt.classList.add("is-lit");
        // Fallback also restores the state if animation events are unavailable.
        finishTimer = window.setTimeout(finishForge, 2000);
    });

    energy.addEventListener("animationend", finishForge);
    energy.addEventListener("animationcancel", finishForge);
}
