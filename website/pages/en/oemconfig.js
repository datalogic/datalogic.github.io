/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const Redirect = require("../../core/Redirect.js");

const siteConfig = require(process.cwd() + "/siteConfig.js");

function docUrl(docdir, doc, language) {
  return (
    siteConfig.baseUrl +
    docdir + "/" +
    (language ? language + "/" : "") +
    doc
  );
}

class GenericName extends React.Component {
  render() {
    return (
      <Redirect
        redirect={docUrl("oemconfig", "overview", this.props.language)}
        config={siteConfig}
      />
    );
  }
}

module.exports = GenericName;