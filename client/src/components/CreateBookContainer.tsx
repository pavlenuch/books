import { FC, useState, useEffect } from "react"
import '../index.css'
import CreateEditBook from "./CreateEditBook"
import { useDispatch } from 'react-redux'
import { fetchCreateBook } from "../store/action-creators/api-cards"
import { resetOneBook } from "../store/action-creators/action"
import { useNavigate } from 'react-router-dom'
import { useTypesSelector } from "../hooks/useTypesSelector"

const CreateBook: FC = () => {

    const dispatch = useDispatch()
    const { created_card } = useTypesSelector( state => state.books) 
    let navigate = useNavigate()

    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [publication_date, setPublicationDate] = useState<string>()
    const [content, setContent] = useState<string>()
    const [picture, setPicture] = useState<string>()
    
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchCreateBook({title, author, publication_date, content, picture}))
    }

    useEffect(() => {
        dispatch(resetOneBook())
    }, [dispatch])

    useEffect(() => {
        if(Object.keys(created_card).length > 0) {
            navigate(`/card/id=?${created_card._id}`)
        }
    }, [created_card, navigate])

    return (
        <>
            <CreateEditBook data={{title, author, publication_date, content, setTitle, setAuthor, setPublicationDate, setContent, setPicture}} handler={submitHandler}/>
        </>
    )
}
export default CreateBook