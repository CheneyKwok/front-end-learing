import React, {Component} from 'react';
import qs from 'qs'


const details = [
    {id: '01', content: '你好，这是消息01的内容'},
    {id: '02', content: '你好，这是消息01的内容'},
    {id: '03', content: '你好，这是消息01的内容'}
]
class Detail extends Component {

    render() {
        console.log('Detail', this.props)
         const search = this.props.location.search
         const {id, title} = qs.parse(search.slice(1))
         const detail = details.find(detail => detail.id === id)
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{detail.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;