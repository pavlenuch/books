import {FC} from "react"
import '../index.css'
import { NavLink } from "react-router-dom"

interface Prop {
    author: string,
    content: string,
    date: string,
    title: string,
    id: string,
    img: string
}

const Card: FC<Prop> = ({author, content, date, title, id, img}) => {

    return (
        <div className="col s12 m7 wrap_card">
            <h2 className="header header_title">{title}</h2>
            <div className="card horizontal wrap_card_content">
                <div className="card-image">
                    <img src={img} alt='title img book'/>
                </div>
                <div className="card-stacked">
                    <div className="card-content card_content">
                        <h5 className='author'>{author}</h5>
                        <span className='date'>{date}</span>
                        <p className='card_content'>{content}</p>
                    </div>
                    <div className="card-action">
                        <NavLink to={`/card/id=?${id}`}>Show more</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card