import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let storedShowIntroAnimation;
if (browser) {
  storedShowIntroAnimation = localStorage.getItem(
    "nvlgzr_showIntroAnimationEnabled"
  );
}
export const showIntroAnimation = writable(
  storedShowIntroAnimation === "true"
);
showIntroAnimation.subscribe((value) => {
  if (browser) {
    localStorage.setItem("nvlgzr_showIntroAnimationEnabled", String(value));
  }
});