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
  $('.device-screenshot video').each(function() {
    $(this).parent().width($(this).siblings('.device-canvas').width()+'px');
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
    var toTop = toc.find('.to-top');

    if (toc.length <= 0)
      return;

    $('.scrollspy').scrollSpy().each(function() {
      var $this = $(this);
      var title = $this.data('section') ||
          capitalizeFirst(this.id.replace(/[-_]/, ' '));

      var link = $('<li><a href="#' + this.id + '">' + title + '</a></li>');
      link.insertBefore(toTop);
    });

    toc.pushpin({ top: toc.parent().offset().top });

    // Back to top link
    Materialize.scrollFire([{
      selector: 'body > .container',
      offset: $(window).height() * 2,
      callback: function() {
        $('.to-top').fadeIn();
      }
    }]);
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

function showDeviceFrame() {
  $('.device-frame-container').addClass('pinned').slideDown(initDeviceFrame);
}

function initDeviceFrame() {
  var deviceFrame = $('.device-frame-container');

  console.log('bottom (1349)', $(document).height() - $('.page-footer').height() - deviceFrame.height());
  console.log('offset (485)', $(window).height() - deviceFrame.height());

  deviceFrame.pushpin({
      bottom: $(document).height() - $('.page-footer').height() - deviceFrame.height(),
      offset: $(window).height() - deviceFrame.height()
    });
}

/**
 * Init triggers for materializecss modals
 */
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
