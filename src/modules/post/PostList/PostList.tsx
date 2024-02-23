import { useEffect } from "react"
// import { PostListData } from "../models/PostListData";
import { Link } from "react-router-dom";
// import { PostItem } from "../models/PostItem";
import './PostList.css'
import { postStore } from "../store/PostStore";
import { observer } from "mobx-react-lite";

export const PostList = observer(() => {
    const {loadingPostsData, posts} = postStore;

    // const [posts, setPosts] = useState<PostItem[]>([]);

    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts').
    //     then(response => response.json()).
    //     then((data: PostListData) => {
    //         setPosts(data.posts);
    //     });
    // }, []);

    useEffect(() => {
        loadingPostsData();
    }, []);

    return <div className="container">
                {posts?.length !== 0 && posts?.map((shortPost) => {
                    return <div className="post__item" key={shortPost.id}>
                                <div className="post__number">{shortPost.id}.</div>
                                <div className="post__title">
                                    <Link to={`/post/${shortPost.id}`}>{shortPost.title}</Link>
                                </div>
                           </div>
                })}
                <div className="post__title"></div>
           </div>
})