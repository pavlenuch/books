import {FC} from "react"
import '../index.css'
import Navbar from "./Navbar"
import Footer from "./Footer"
import M from 'materialize-css';

interface Prop {
    data: any,
    handler: (e: React.FormEvent) => void
}

const CreateEditBook: FC<Prop> = ({data, handler}) => {

    return (
        <div className="wrap_create">
            <Navbar />
            <div className='create_book'>
                <h4 className='title_form'>fill in the fields</h4>
                <form className="col s12 scroll_form" onSubmit={handler} action='#'>
                    <div className="input-field">
                        <input  id="name_book" type="text" autoComplete='off' required defaultValue={data.title} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>data.setTitle(e.target.value)}
                        />
                        <label htmlFor="name_book" className={data.title?.length > 0 ? 'grey-text active' : 'grey-text'}>Title of the book</label>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 mr">
                            <input  id="author" type="text" autoComplete='off' required defaultValue={data.author}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>data.setAuthor(e.target.value)}
                            />
                            <label htmlFor="author" className={data.title?.length > 0 ? 'grey-text active' : 'grey-text'}>Author</label>
                        </div>
                        <div className="input-field col s6 ml">
                            <input  id="year" type="text" autoComplete='off' required defaultValue={data.publication_date}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>data.setPublicationDate(e.target.value)}
                            />
                            <label htmlFor="year" className={data.title?.length > 0 ? 'grey-text active' : 'grey-text'}>Year of publication</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="textarea" className="materialize-textarea" required defaultValue={data.content}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>data.setContent(e.target.value)}
                        ></textarea>
                        <label htmlFor="textarea" className={data.title?.length > 0 ? 'grey-text active' : 'grey-text'}>Textarea</label>
                        </div>
                    </div>

                    <div className="input-field">
                        <input  id="img_link" type="text" autoComplete='off' required defaultValue={data.picture} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>data.setPicture(e.target.value)}
                        />
                        <label htmlFor="img_link" className={data.picture?.length > 0 ? 'grey-text active' : 'grey-text'}>Link to the picture</label>
                    </div>

                    <button className="btn waves-effect waves-light btn_save grey darken-3" type="submit" name="action">Save
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
            <Footer />
            <script type="text/javascript">$(document).ready(function(){M.updateTextFields()})</script>
        </div>
    )
}
export default CreateEditBook