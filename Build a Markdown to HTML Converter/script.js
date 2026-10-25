"use strict";

const patternReplacementArray = [{
  h6: [/^[ \t]*######[ \t](.+$)/gm, "<h6>$1</h6>"]
}, {
  h5: [/^[ \t]*#####[ \t](.+$)/gm, "<h5>$1</h5>"]
}, {
  h4: [/^[ \t]*####[ \t](.+$)/gm, "<h4>$1</h4>"]
}, {
  h3: [/^[ \t]*###[ \t](.+$)/gm, "<h3>$1</h3>"]
}, {
  h2: [/^[ \t]*##[ \t](.+$)/gm, "<h2>$1</h2>"]
}, {
  h1: [/^[ \t]*#[ \t](.+$)/gm, "<h1>$1</h1>"]
}, {
  hr: [/(?<=\n|^)---(?=\n|$)/, "<hr>"]
}, {
  strong: [/((?:\*|_){2})(.*?)\1/g, "<strong>$2</strong>"]
}, {
  em: [/(\*|_)(.*?)\1/g, "<em>$2</em>"]
}, {
  img: [/!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g, '<img alt="$1" src="$2">']
}, {
  a: [/\[(.*?)\]\(\s*(.*?)\s*\)/g, '<a href="$2">$1</a>']
}, {
  blockquote1: [/^[ \t]*> ([^\n]+?)$/gm, "<blockquote>$1</blockquote>\n"]
}, {
  blockquote2: [/(?<=<blockquote>)(.+?)<\/blockquote>\n\n^([^<\n]+?)$/gm, "$1 $2</blockquote>\n"]
}, {
  ul: [/(?:^[-*+]\s+.*?$\n)+\s*?/gm, "<ul>\n$&</ul>"]
}, {
  ol: [/(?:^\d*\.\s+?\w.*?$\n)+\s*?/gm, "<ol>\n$&</ol>"]
}, {
  uli: [/^[-*+]\s+(.*?$)\n/gm, "<li>$1</li>\n"]
}, {
  oli: [/^\d*\.\s+?(.*?$)\n/gm, "<li>$1</li>\n"]
}, {
  p1: [/^([^<>\s].*?)(?=\n\s*$)/gsm, "<p>$1</p>"]
}, {
  p2: [/^\w*?(?:<strong>|<em>).+(?:<\/strong>|<\/em>)\s*\w*?[ \t]*$/gm, "<p>$&</p>"]
}];
const markdownInput = document.getElementById('markdown-input');
var _LPC3 = 1;
var _LP3 = Date.now();
const convertMarkdown = () => {
  if (_LPC3++ % 2000 === 0 && Date.now() - _LP3 > 1500) {
    (function (e) {
      console.log(`Potential infinite loop detected on line ${e}. Tests may be failing because of this.`);
    })(24, 0);
    return;
  }
  let markdown = markdownInput.value;
  let matchUList = false;
  let matchOList = false;
  patternReplacementArray.forEach(item => {
    const [key] = Object.keys(item);
    const [pattern, replacement] = Object.values(item)[0];
    if (key === "blockquote2") {
      var _LPC9 = 1;
      var _LP9 = Date.now();
      while (markdown.match(pattern)) {
        if (_LPC9++ % 2000 === 0 && Date.now() - _LP9 > 1500) {
          (function (e) {
            console.log(`Potential infinite loop detected on line ${e}. Tests may be failing because of this.`);
          })(32, 12);
          break;
        }
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "ul") {
      if (markdown.match(pattern)) {
        matchUList = true;
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "ol") {
      if (markdown.match(pattern)) {
        matchOList = true;
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "uli" && !matchUList) {
      return;
    } else if (key === "oli" && !matchOList) {
      return;
    } else {
      markdown = markdown.replace(pattern, replacement);
    }
  });
  return markdown;
};
markdownInput.addEventListener('input', () => {
  const html = convertMarkdown();
  const out = document.getElementById('html-output');
  const preview = document.getElementById('preview');
  out.textContent = html;
  preview.innerHTML = html;
});