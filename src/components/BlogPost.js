import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost(props) {
  return (
    <div id="blog-post">
      <BlogContent
    articleText="Dear Reader: Bjarne Stroustrup has the most monotone lecture oration."
    isPublished={true}
    minutesToRead={1}
      />
      <Comment commentText="I absolutely agree with this statement. - Bill Clinton" />
      <Comment commentText="A universal truth. - Papa Johns Guy" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Some C3P0 Knockoff" />
      <Comment commentText="I honestly think C++ is overrated for game development, and C is the only cool variant. - Samuel Banya"/>
    </div>
  );
}

export default BlogPost;
