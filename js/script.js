---
---

var site_url = "{{ site.url }}";

$(function() {
    initMenu();
});

function initMenu() {
    var path = window.location;//.pathname;
    //path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $("#main-menu .menu-item a").each(function () {
        var href = $(this).attr('href');
        href = href.replace('^'+site_url, '');
        //if (path.substring(0, href.length) === href) {
        if (path == href) {
            $(this).closest('li').addClass('active');
        }
    });
}
