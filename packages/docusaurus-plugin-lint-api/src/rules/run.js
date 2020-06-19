/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const markdownlint = require('markdownlint');
const test1 = require('./installation-should-have-requirements.js');

const options = {
  files: ['test.md'],
  customRules: [test1],
};

markdownlint(options, function callback(err, result) {
  if (!err) {
    console.log(result.toString());
  }
  console.log(err)
});
