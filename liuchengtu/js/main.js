$(function() {
  var node, v, _i, _results;
  $(".tree li").each(function(i) {
    var author, next, prev;
    author = $(this).data("author");
    next = $(this).data("next");
    prev = $(this).data("prev");
    if (!$(this).find('i').length) {
      $(this).append("<i></i>");
    }
    $(".tree li:last-child").find("i").remove();
    if (author) {
      $(this).append("<span>" + author + "</span>");
    }
    if (next) {
      $(this).find("b.left").height(next * 110);
    }
    if (prev) {
      return $(this).find("b.right").height(prev * 110);
    }
  });
  node = $(".tree").data("node");
  if (node > 0) {
    _results = [];
    for (v = _i = 0; 0 <= node ? _i < node : _i > node; v = 0 <= node ? ++_i : --_i) {
      _results.push($(".tree li").eq(v).addClass('active'));
    }
    return _results;
  }
});
