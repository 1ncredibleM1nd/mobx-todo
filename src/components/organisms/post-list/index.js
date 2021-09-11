import React from "react";
import PostListItem from "../../molecules/post-list-item";
import "./post-list.sass";
import todoStore from "../../store/todos";
import {observer} from "mobx-react-lite";

const PostList = observer(() => {
        const {visiblePosts, todos, filter} = todoStore;
        const elements = todos.map((item) => {
            return (
                <div key={item.id} className="list-group-item">
                    <PostListItem {...item} />
                </div>
            );
        });
        const updatedElements = visiblePosts.map((item) => {
            return (
                <div key={item.id} className="list-group-item">
                    <PostListItem {...item} />
                </div>
            );
        });
        return <ul className="app-list list-group">{visiblePosts.length === 0 ? elements : updatedElements}</ul>;
    })
;

export default PostList;
