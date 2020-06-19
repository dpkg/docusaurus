/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  names: ['enforce-toc'],
  description:
    'Enforces the sections of the markdown render a table of contents',
  tags: ['TOC', 'h2', 'h3'],
  function: function rule(params, onError) {
    console.log(params.tokens)
    params.tokens
      .filter(function filterToken(token) {
        return (
          token.type === 'heading_open' &&
          token.lineNumber !== 1 &&
          token.tag !== 'h2' &&
          token.tag !== 'h3'
        );
      })
      .forEach(function forToken(section) {
        if (section.map) {
          const lines = section.map[1] - section.map[0];
          onError({
            lineNumber: section.lineNumber,
            detail:
              'This current section is not covered by our toc in ' +
              lines +
              ' line(s).',
            context: section.line.substr(0, 7),
          });
        }
      });
  },
};
