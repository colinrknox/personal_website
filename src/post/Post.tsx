import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const location = useLocation();
  const postContents: string = location.state;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ReactMarkdown
        className="markdown max-w-2xl mx-auto"
        children={postContents}
      />
    </div>
  );
};

export default Post;
