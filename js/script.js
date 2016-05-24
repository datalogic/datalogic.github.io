---
---

var site_url = "{{ site.baseurl }}";
var site_url_len = site_url.length;

$(window).load(function() {
    initTOC();
    //initBanner();
    //initFooter();
    initVideoControl();
    centerDeviceScreenShot();
    $(".button-collapse").sideNav();
});

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function centerDeviceScreenShot() {
  $('.device-canvas').each(function() {
    $(this).parent().width($(this).width()+'px');
  });
}

function initVideoControl() {
  $('.play-button').click(function() {
    var video = $(this).siblings('video');
    if (video.length > 0) {
      video = video[0];

      if (video.paused) {
        video.play();
        video.classList.remove('paused');
      } else {
        video.pause();
        video.classList.add('paused');
      }
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

    $('body > main').find('h2,h3').each(function() {
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

function initBanner() {
  var current = 0;
  var imgs = $('.banner .device-screenshot .device-screen');

  setInterval(function() {
    imgs.each(function(i) {
      console.log(i, current);
      if (i == current)
        $(this).removeClass('hide');
      else
        $(this).addClass('hide');
    });

    current++;
    if (current >= imgs.length)
      current = 0;
  }, 5000);
}

function initFooter() {
    $(window).resize(resizeFooter);
    resizeFooter();
}

function resizeFooter() {
    document.body.style.paddingBottom = $('.page-footer').height() + 'px';
}

/**
 * Init triggers for materializecss modals
 */
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
