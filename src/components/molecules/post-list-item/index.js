import {React} from "react";
import {DeleteOutlined, HeartOutlined, StarOutlined} from "@ant-design/icons";
import {Button} from 'antd'
import "./post-list-item.sass";
import todos from "../../store/todos";

const PostListItem = ({...item}) => {


    let classNames = "app-list-item d-flex justify-content-between";
    if (item.important) {
        classNames += " important";
    }
    if (item.liked) {
        classNames += " like"
    }
    return (
        <li className={classNames}>
			    <span onClick={() => todos.changeLike(item.id)} className="app-list-item-label">
                {item.label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <Button onClick={() => todos.changeImportant(item.id)} icon={<StarOutlined/>}/>
                <Button danger onClick={() => todos.removeTodo(item.id)} icon={<DeleteOutlined/>}/>
                <HeartOutlined className="fas fa-heart"></HeartOutlined>
            </div>
        </li>
    );
};

export default PostListItem;
