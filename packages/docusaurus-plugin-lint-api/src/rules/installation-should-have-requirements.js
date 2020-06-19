/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  names: ['installation-should-have-requirements'],
  description: 'Enforces the sections of the markdown render a table of contents',
  tags: ['TOC', 'h2', 'h3'],
  function: function rule(params, onError) {
    // token includes extract to a function
    const installationIdx = params.tokens.findIndex(function (token) {
      return token.line.includes('Installation')
    })
    const beforeInstTokens = installationIdx ? params.tokens.slice(0, installationIdx): [];
    const containsRequirements = beforeInstTokens.find(function (token) {
      return token.line.includes('Requirements')
    })

    if(beforeInstTokens.length == 0 || !containsRequirements){
      onError({
        lineNumber: params.tokens[installationIdx].lineNumber,
        detail: `Before the installation section, you should have a requirements section`,
        context: params.tokens[installationIdx].line,
      });
    }
  },
};
