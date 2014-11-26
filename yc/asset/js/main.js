$(function() {
  $(document).on('click', '.tabsbtn a', function() {
    var index;
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    index = $(this).index();
    $('.tabscon').removeClass('active');
    return $('.tabscon').eq(index).addClass('active');
  });
  return $(document).on('click', '.sitetabs a', function() {
    var index;
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    index = $(this).index();
    $('.sitecon').removeClass('active');
    return $('.sitecon').eq(index).addClass('active');
  });
});
