(function() {

  function replaceLock (text) {
    while (text !== (text = text.replace(/\[lock=([^\]]+)\]((?:(?!\[lock=[^\]]+\]|\[\/lock\])[\S\s])*)\[\/lock\]/ig, function (match, p1, p2) {
      return "<div class='lock " + p1 + "'>" + p2 + "</div>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceLock);
  Discourse.Markdown.whiteListTag('div', 'class');

})();
