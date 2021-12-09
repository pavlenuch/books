import {FC, useEffect, useState} from "react"
import { useDispatch } from 'react-redux'
import { fetchDeleteBook, fetchOneBook } from "../store/action-creators/api-cards"
import { useTypesSelector } from "../hooks/useTypesSelector"
import '../index.css'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { NavLink } from 'react-router-dom'
import { resetCreatesBook } from "../store/action-creators/action"
import { useNavigate } from 'react-router-dom'
import Spinner from "./Spinner/Spinner"

const FullCard: FC = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const { error, one_card, deleted } = useTypesSelector( state => state.books) 
    const [popup, setPopup] = useState<boolean>(false)

    useEffect(() => {
        if(one_card === null) {
            navigate(`/`)
        }
        dispatch(resetCreatesBook())
        if(one_card?.length === 0) {
            dispatch(fetchOneBook(window.location.search.slice(1)))
        }

    }, [dispatch, one_card, navigate])

    useEffect(() => {
        if(deleted) {
            navigate(`/`)
        }
    }, [navigate, deleted])

    const deleteBook = () => {
        dispatch(fetchDeleteBook(one_card._id))
    }

    return (
        <div className="wrap_full_card">
            <Navbar />
            { Object.keys(one_card) !== [] ? 
                <>
                {   error !== null 
                    ? <h2 className='null_books'>{error}</h2> 
                    : <div className='full_card'>
                        {
                            one_card.picture ? <img src={one_card.picture} alt='title img book' className='full_card_img'/> : null
                        }
                        <div className='full_card_content'>
                            <p className='full_card_title'><span className='full_card_title_text'>Title of the book: </span>{one_card?.title}</p>
                            <p className='full_card_title'><span className='full_card_title_text'>Author: </span>{one_card?.author}</p>
                            <p className='full_card_title'><span className='full_card_title_text'>Year of publication: </span>{one_card?.publication_date}</p>
                            <p className='full_card_title'><span className='full_card_title_text'>Book description: </span>{one_card.content}</p>
                        </div>
                        <div className='wrap_btns'>
                            <NavLink className="btn_edit" to={`/edit/?${one_card._id}`}><i className="material-icons left icon_btn">edit</i></NavLink>
                            <div className="btn_edit"><i className="material-icons left icon_btn" onClick={()=>setPopup(true)}>delete</i></div>
                        </div>
                    </div>
                }
                </>
            : <Spinner />}
            <Footer />
            {
                popup ?
                <div className="col s12 m7 popup">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content popup_card-content">
                                <p>Are you serious?</p>
                            </div>
                            <div className="card-action">
                                <button className="btn waves-effect waves-light btn_delete" type="submit" name="action" onClick={deleteBook}>DELETE</button>
                                <button className="btn waves-effect waves-light" type="submit" name="action">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}
export default FullCard