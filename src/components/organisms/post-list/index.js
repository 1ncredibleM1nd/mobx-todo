import React from "react";
import PostListItem from "../../molecules/post-list-item";
import "./post-list.sass";
import todoStore from "../../store/todos";
import {observer} from "mobx-react-lite";

const PostList = observer(() => {
        const {todos} = todoStore;
        const elements = todos.map((item) => {
            return (
                <div key={item.id} className="list-group-item">
                    <PostListItem {...item} />
                </div>
            );
        });
        return <ul className="app-list list-group">{elements}</ul>;
    })
;

export default PostList;
