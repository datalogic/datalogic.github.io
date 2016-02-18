---
---

var site_url = "{{ site.url }}";

$(function() {
    initMenu();
    initTOC();
});

function initMenu() {
    var path = window.location.protocol + '//' + window.location.host +
        window.location.pathname;
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

/**
 * Build the table of content (TOC) from h* elements, the elements
 * should be h2,h3, while h1 is reserved to the page title
 */
function initTOC() {
    var toc = $('.toc-container ul');
    var curr_level = 10;
    var i = 0, j = 0;

    $('.main-content').find('h2,h3').each(function() {
        var par = $(this);
        var level = parseInt(this.nodeName.match(/h(\d)/i)[1]);
        if (level < curr_level) {
            i += 1;
            j = 1;
        } else {
            j += 1;
        }
        curr_level = level;

        var li = $('<li></li>');
        var link = $('<a href="#'+par.attr('id')+'">&nbsp;&nbsp;'+par.text()+'</a>');
        if (j == 1) {
            link.prepend(i + '');
            li.addClass('toc-level-1');
        } else {
            link.prepend(i + '.' + j);
            li.addClass('toc-level-2');
        }

        if (!par.attr('id')) {
            li.css('text-decoration', 'line-through');
        }

        li.append(link);
        toc.append(li);
    });
}

function getQRCodeURL(data, size) {
    if (!data)
        return;

    if (!size)
        size = 150;

    return 'https://api.qrserver.com/v1/create-qr-code/?size='+size+'x'+size+'&data='+data;
}
