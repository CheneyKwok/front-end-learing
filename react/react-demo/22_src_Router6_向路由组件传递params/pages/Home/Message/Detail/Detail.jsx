import {useParams} from 'react-router-dom'

const details = [
    {id: '01', content: '你好，这是消息01的内容'},
    {id: '02', content: '你好，这是消息01的内容'},
    {id: '03', content: '你好，这是消息01的内容'}
]
function Detail (props) {
        console.log('Detail useParams', useParams())
         const {id, title} = useParams()
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

export default Detail;