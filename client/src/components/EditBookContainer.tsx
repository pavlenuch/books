import {FC, useState, useEffect} from "react"
import '../index.css'
import CreateEditBook from "./CreateEditBook"
import { fetchEditBook, fetchOneBook } from "../store/action-creators/api-cards"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTypesSelector } from "../hooks/useTypesSelector"

const EditBook: FC = () => {

    const dispatch = useDispatch()
    const { one_card, created_card } = useTypesSelector( state => state.books) 
    let navigate = useNavigate()

    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [publication_date, setPublicationDate] = useState<string>()
    const [content, setContent] = useState<string>()
    const [picture, setPicture] = useState<string>()

    useEffect(() => {
        if(one_card.length === 0) {
            dispatch(fetchOneBook(window.location.search.slice(1)))
        }
    }, [dispatch, one_card.length])

    useEffect(() => {
        if(Object.keys(one_card).length > 0){
            setTitle(one_card.title)
            setAuthor(one_card.author)
            setPublicationDate(one_card.publication_date)
            setContent(one_card.content)
            setPicture(one_card.picture)
        }
    }, [one_card])

    useEffect(() => {
        if(Object.keys(created_card).length > 0) {
            navigate(`/card/id=?${created_card._id}`)
        }
    }, [created_card, navigate])
    
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchEditBook({title, author, publication_date, content, picture, _id: one_card._id}))
    }

    return (
        <>
            <CreateEditBook data={{title, author, publication_date, content, picture, setTitle, setAuthor, setPublicationDate, setContent, setPicture}} handler={submitHandler}/>
        </>
    )
}
export default EditBook