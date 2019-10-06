$(function() {

  $('.diagram-marker').each(function() {
    var ttID = $(this).data('tt');
    var ttContent = $('#' + ttID).html();

    $(this).tooltipster({
      content: $(ttContent),
      delay: 0,
      maxWidth: 350
    })
  })
})