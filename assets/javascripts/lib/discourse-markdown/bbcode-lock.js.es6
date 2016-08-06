import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["bbcode-lock"] = true;
});

function replaceLock(text) {
  text = text || "";
  while (text !== (text = text.replace(/\[lock=([^\]]+)\]((?:(?!\[lock=[^\]]+\]|\[\/lock\])[\S\s])*)\[\/lock\]/ig, function (match, p1, p2) {
    return `<div class='lock ${p1}'>${p2}</div>`;
  })));
  return text;
}

export function setup(helper) {
  helper.whiteList([
    'div[class]'
  ]);

  helper.addPreProcessor(text => replaceLock(text));
}
