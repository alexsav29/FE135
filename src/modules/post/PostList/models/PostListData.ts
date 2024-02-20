import { PostItem } from "../../models/PostItem";

export type PostListData = {
    limit: number;
    skip: number;
    total: number;
    posts: PostItem [];
}