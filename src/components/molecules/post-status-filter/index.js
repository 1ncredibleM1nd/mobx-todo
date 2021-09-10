import React from 'react';
import {Input,Radio} from 'antd'
import './post-status-filter.sass'


function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }

const PostStatusFilter = () => {
    return (
        <div className="post-statis-filter">
            <Input placeholder="Поиск по заданиям"/>
    <Radio.Group  defaultValue="Все">
      <Radio.Button value="Все">Все</Radio.Button>
      <Radio.Button value="Понравившиеся">Понравившиеся</Radio.Button>
    </Radio.Group>
        </div>
    )
}

export default PostStatusFilter;