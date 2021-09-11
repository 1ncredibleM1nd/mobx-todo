import {React} from 'react';
import {Input, Radio} from 'antd'
import './post-status-filter.sass'
import todos from "../../store/todos";


const PostStatusFilter = () => {
    // const onUpdate = (e) => {
    //     const term = e.target.value
    //     setFilterText(term);
    //     todos.onUpdateSearch(filterText)
    // }
    return (
        <div className="post-status-filter">
            <Input placeholder="Поиск по заданиям"
                   onChange={(e) => todos.filterPost(todos.onUpdateSearch(e.target.value), todos.filter)}/>
            <Radio.Group onChange={(e) => todos.activateFilter(e.target.value)} defaultValue="All">
                <Radio.Button value="All">Все</Radio.Button>
                <Radio.Button value="Liked">Понравившиеся</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default PostStatusFilter;