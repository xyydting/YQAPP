window.onload = function () {
    function o() {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth) / 15 + "px"
    }

    var e = null;
    window.addEventListener("resize", function () {
        clearTimeout(e), e = setTimeout(o, 300)
    }, !1), o()
};