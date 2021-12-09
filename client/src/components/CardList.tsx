import {FC, useEffect} from "react"
import { useDispatch } from 'react-redux'
import { useTypesSelector } from "../hooks/useTypesSelector"
import '../index.css'
import { resetCreatesBook, resetOneBook, resetDeletedBook, resetError } from "../store/action-creators/action"
import { fetchAllBooks } from "../store/action-creators/api-cards"
import Card from "./Card"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Spinner from "./Spinner/Spinner"


const CardList: FC = () => {

    const dispatch = useDispatch()
    const { cards, error } = useTypesSelector( state => state.books) 

    let cards_list = cards.map((el: any) => {
        return <Card key={el._id} author={el.author} content={el.content} date={el.publication_date} title={el.title} id={el._id} img={el.picture}/>
    })
    
    useEffect(() => {
        dispatch(resetCreatesBook())
        dispatch(resetOneBook())
        dispatch(resetDeletedBook())
        dispatch(resetError())
        dispatch(fetchAllBooks())
    }, [dispatch])    

    return (
        <div className='wrap_card_list'>
            <Navbar />
            <div className="card-list">
                { Object.keys(cards) !== [] ? 
                    <>
                    {   error !== null 
                        ? <h2 className='null_books'>{error}</h2> 
                        : cards[0] === 0 ? <h3 className='null_books'>Сreate a card with a book</h3> : cards_list
                    }
                    </>
                : <Spinner />}
            </div>
            <Footer />
        </div>
    )
}
export default CardList