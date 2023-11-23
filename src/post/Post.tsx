import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const Post = () => {
    const location = useLocation();
    const postContents: string = location.state;
    return <ReactMarkdown className="markdown p-4 grid-cols-4" children={postContents} />;
}

export default Post;
