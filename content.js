(function() {
  const style = document.createElement('style');
  style.textContent = `
    /* Hides the "Shorts" section on the homepage */
    ytd-rich-grid-row #contents.ytd-rich-grid-row:has(ytd-rich-item-renderer #thumbnail[href*="/shorts/"]) {
      display: none !important;
    }

    /* Hides individual Shorts items in search results or elsewhere */
    ytd-video-renderer:has(a#thumbnail[href*="/shorts/"]),
    ytd-grid-video-renderer:has(a#thumbnail[href*="/shorts/"]),
    ytd-compact-video-renderer:has(a#thumbnail[href*="/shorts/"]) {
      display: none !important;
    }

    /* Hides the "Shorts" tab in the left sidebar */
    ytd-guide-entry-renderer:has(a[title="Shorts"]) {
      display: none !important;
    }

    /* Hides the entire "Shorts" section within subscription feeds or other lists */
    ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]) {
        display: none !important;
    }

    /* Hides the Shorts chip in the explore section if it ever appears */
    yt-chip-cloud-chip-renderer[chip-style="STYLE_DEFAULT"]:has(yt-formatted-string:contains("Shorts")) {
        display: none !important;
    }

    /* Additional selectors for robustness (may not be strictly needed) */
    ytd-reel-shelf-renderer { /* Hides the dedicated Shorts shelf if it's still present */
      display: none !important;
    }
  `;
  document.head.appendChild(style);
})();