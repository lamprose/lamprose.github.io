/*页面载入完成后，创建复制按钮*/ ! function (e, t, a) {
  /* code */
  var initCopyCode = function () {
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-clipboard"></i><span>复制</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
      target: function (trigger) {
        return trigger.nextElementSibling;
      }
    });
    clipboard.on('success', function (e) {
      showTooltip(e.trigger, 'Copied!');
      
      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });

    var btns = document.querySelectorAll('.btn-copy');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseleave', clearTooltip);
      btns[i].addEventListener('blur', clearTooltip);
    }

    function clearTooltip(e) {
      e.currentTarget.setAttribute('class', 'btn-copy');
      e.currentTarget.removeAttribute('aria-label');
    }

    function showTooltip(elem, msg) {
      elem.setAttribute('class', 'btn-copy tooltipped');
      elem.setAttribute('aria-label', msg);
    }

  }
  initCopyCode();
}(window, document);
