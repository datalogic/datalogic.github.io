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

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Build the table of content (TOC) from h* elements, the elements
 * should be h2,h3, while h1 is reserved to the page title
 */
function initTOC() {
    var toc = $('.table-of-contents');

    $('.scrollspy').scrollSpy().each(function() {
      var $this = $(this);
      var title = $this.data('section') ||
          capitalizeFirst(this.id.replace(/[-_]/, ' '));

      var link = $('<li><a href="#' + this.id + '">' + title + '</a></li>');
      toc.append(link);
    });

    toc.pushpin({ top: $('.toc-wrapper').offset().top });
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
