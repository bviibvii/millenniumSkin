export default [
    {
        Match: "https://.*.steampowered.com",
        TargetCss: "webkit.css",
        TargetJs: "webkit.js",
    },
    {
        Match: "https://steamcommunity.com",
        TargetCss: "webkit.css",
        TargetJs: "webkit.js",
    },
    {
        Match: "^Steam$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "^OverlayBrowser_Browser$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "^SP Overlay:",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "Supernav$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "^notificationtoasts_",
        TargetCss: "notifications.custom.css",
        TargetJs: "notifications.custom.js",
    },
    {
        Match: "^SteamBrowser_Find$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "^OverlayTab\\d+_Find$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: "^Steam Big Picture Mode$",
        TargetCss: "bigpicture.custom.css",
        TargetJs: "bigpicture.custom.js",
    },
    {
        Match: "^QuickAccess_",
        TargetCss: "bigpicture.custom.css",
        TargetJs: "bigpicture.custom.js",
    },
    {
        Match: "^MainMenu_",
        TargetCss: "bigpicture.custom.css",
        TargetJs: "bigpicture.custom.js",
    },
    {
        Match: ".friendsui-container",
        TargetCss: "friends.custom.css",
        TargetJs: "friends.custom.js",
    },
    {
        Match: "Menu$",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: ".ModalDialogPopup",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
    {
        Match: ".FullModalOverlay",
        TargetCss: "libraryroot.custom.css",
        TargetJs: "libraryroot.custom.js",
    },
];
