(function () {
    // HELPERS
    const $ = (sel) => document.querySelector(sel);
    const rev = (s) => s.split("").reverse().join("");

    // BUILD + INJECT MAILTO
    function injectEmail(selector, userRev, domainRev, tldRev) {
        const el = $(selector);
        if (!el) return;
        const user = rev(userRev);
        const domain = rev(domainRev);
        const tld = rev(tldRev);
        const addr = `${user}@${domain}.${tld}`;
        el.textContent = addr;
        el.setAttribute("href", `mailto:${addr}`);
        el.setAttribute("rel", "noopener");
        el.classList.remove("placeholder");
    }

    // YEAR (FOOTER)
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();

    // EMAILS
    // Agent: melanie@mvmagency.ca
    injectEmail(
        "#agent-email",
        "ein a l e m".replace(/\s+/g, ""), // "melanie"
        "ycnega mvm".replace(/\s+/g, ""), // "mvmagency"
        "ac" // "ca"
    );

    // Personal button: justinsaintvo@gmail.com
    injectEmail(
        "#email-btn",
        "ovtniasnitsuj".replace(/\s+/g, ""),
        "liamg",
        "moc"
    );

    // (Optional) If a plain-text contact link exists elsewhere (safe no-op if absent)
    injectEmail(
        "#me",
        "oVTNiasNITsUj".toLowerCase(),
        "liamg",
        "moc"
    );
})();