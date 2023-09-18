import {useSearchParams} from 'react-router-dom'
import qs from "qs";

const details = [
    {id: '01', content: '你好，这是消息01的内容'},
    {id: '02', content: '你好，这是消息02的内容'},
    {id: '03', content: '你好，这是消息03的内容'}
]

function Detail(props) {
    const [search, setSearch] = useSearchParams()
    // const searchParams = {}
    // search.forEach((value, key) => {
    //     searchParams[key] = value
    // })
    const searchParams = qs.parse(search.toString())
    console.log(searchParams)
    const {id, title} = searchParams
    const detail = details.find(detail => detail.id === id) || {}
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