import { makeAutoObservable, runInAction } from "mobx";
import { PostListData } from "../models/PostListData";
import { PostItem } from "../models/PostItem";

class PostStore {

    // ------- PostsList --------

    postsListData: PostListData | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    };

    get posts() {
        return this.postsListData?.posts;
    };

    loadingPostsData = async() => {
        try {
            const response = await fetch('https://dummyjson.com/posts');
            if (response.status === 200) {
                const data: PostListData = await response.json();
                runInAction(() => {this.postsListData = data});
            };
        } catch (error) {
            console.log(error);
        };
    };
    
    // ------- PostItem -------

    post: PostItem | undefined = undefined;

    loadingPostItem = async(postId: string | undefined) => {
        try {
            const response = await fetch(`https://dummyjson.com/posts/${postId}`);
            if (response.status === 200) {
                const data: PostItem = await response.json();
                runInAction(() => {this.post = data});
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export const postStore = new PostStore();