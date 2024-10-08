'use strict'

function activate(context) {
    const markdownItBracketedSpans = require('markdown-it-bracketed-spans');
    const markdownItAttrs = require('markdown-it-attributes').default;

    return {
        extendMarkdownIt(md) {
            // 使用 markdownItBracketedSpans 和 markdownItAttrs
            return md
                .use(markdownItBracketedSpans)
                .use(markdownItAttrs, {
                    // 可選參數，這是默認選項
                    leftDelimiter: '{',
                    rightDelimiter: '}',
                    allowedAttributes: []  // 空陣列表示允許所有屬性
                });
        }
    };
}
exports.activate = activate;