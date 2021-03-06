import React from "react";
import marked from "marked";
import H from "highlight.js";
import PropTypes from "prop-types";

const highlight = (code, lang) => {
  if (lang) {
    return H.highlightAuto(code, [lang]).value;
  }
  return H.highlightAuto(code).value;
};

function Markdown(props) {
  const { md } = props;
  const markedHtml = marked(md, { highlight });

  return (
    <div
      className="remarkdown-container hljs"
      dangerouslySetInnerHTML={{ __html: markedHtml }}
    />
  );
}

Markdown.propTypes = {
  md: PropTypes.string
};

Markdown.defaultProps = {
  md: ""
};

export default Markdown;
