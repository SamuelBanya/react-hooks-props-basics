import React from "react";

function BlogContent(props) {
  console.log(props);

  if (!props.isPublished) {
    // hide unpublished content
    // return null means "Don't display any DOM elements here"
    return null;
  } else {
    // show published content

    // PERSONAL REVISION TO UTILIZE IF STATEMENT FOR 'return' STATEMENT:
    // Determine how if 'minute' word should be singular or plural
    function determineMinuteOrMinutes(props) {
      if (props.minutesToRead > 1) {
        return "minutes";
      } else {
        return "minute";
      }
    }

    return (
        <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} {determineMinuteOrMinutes(props.minutesToRead)} to read</p>
        </div>
    );
  }
}

export default BlogContent;
