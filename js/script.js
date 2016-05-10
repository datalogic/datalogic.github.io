---
---

var site_url = "{{ site.baseurl }}";
var site_url_len = site_url.length;

$(function() {
    //initMenu();
    initTOC();
    //initFooter();
});

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function initMenu() {
    var path = window.location.protocol + '//' + window.location.host +
        window.location.pathname;
    path = decodeURIComponent(path).substring(site_url_len);
    if (!path.endsWith('/')) {
        path = path.split('/');
        path.splice(-1,1);
        path = path.join('/');
    }
    path = path.replace(/\/$/,'');

    $(".main-menu li a").each(function () {
        var href = $(this).attr('href');
        href = href.substring(site_url_len).replace(/\/$/,'');
        console.log(path, href);
        if (path == href) {
            //$(this).closest('li').addClass('pure-menu-selected');
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
    var curr_level = 999;
    var i = 0; // main level
    var j = 0; // sub level

    $('.main-content').find('h2,h3').each(function() {
        var par = $(this);
        var level = parseInt(this.nodeName.match(/h(\d)/i)[1]);
        if (level < curr_level || (j==1 && level <= curr_level)) {
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

function initFooter() {
    $(window).resize(resizeFooter);
    resizeFooter();
}

function resizeFooter() {
    document.body.style.paddingBottom = $('.page-footer').height() + 'px';
}

function showBarcode(link) {
    var url = $(link).data('url');
    var img_src = generateBarcode(url);
    var barcode = $('<img />');

    barcode.attr('src', img_src);
    modalShow('Read the barcode with your device', barcode);
}

function hideBarcode(link) {
    modalHide();
}

function generateBarcode(data, size) {
    if (!data) {
        console.err('Need some data');
        return;
    }

    if (!size)
        size = 150;

    return 'https://api.qrserver.com/v1/create-qr-code/?qzone=4&size='+size+'x'+size+'&data='+data;
}

var modal = $("#modal");
var modalTitle = modal.find('.modal-title');
var modalBody = modal.find('.modal-body');

function modalShow(title, body) {
    modalTitle.html(title);
    modalBody.html(body);
    modal.fadeIn();
}

function modalHide() {
    modal.fadeOut(function() {
        modalBody.html('');
    });
}
