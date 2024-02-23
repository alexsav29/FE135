import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
// import { PostItem } from "../models/PostItem";
import './PostPage.css';
import { postStore } from "../store/PostStore";
import { observer } from "mobx-react-lite";

export const PostPage = observer(() => {
    const {post, loadingPostItem} = postStore;

    const {postId} = useParams();
    // const [post, setPost] = useState<PostItem>();
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     fetch(`https://dummyjson.com/posts/${postId}`).
    //     then(response => response.json()).
    //     then((data: PostItem) => {
    //         setPost(data);          
    //     });
    // }, [postId]);

    useEffect(() => {
        loadingPostItem(postId);
    }, [postId]);

    const handleGoBackButtonClick = () => {
        navigate('../../post');
    };

    const handleNextPageClick = () => {
        navigate(`../${+postId! + 1}`);
    };

    return <div className="container">
                {post && <div className="content">
                            <button className="back__btn" onClick={handleGoBackButtonClick}>go back</button>
                            <h1 className="title">{post?.title}</h1>
                            <div className="body">{post?.body}</div>
                            <div className="tags">
                                {post.tags.map((tag) => <div 
                                                            key={tag} 
                                                            className="tag"
                                                        >
                                                                #{tag}
                                                        </div>)}
                            </div>
                         </div> }
                         <button className="next-page" onClick={handleNextPageClick}>next page</button>
           </div>
})