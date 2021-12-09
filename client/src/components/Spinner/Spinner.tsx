import {FC} from "react"
import s from './Spinner.module.css'

const Spinner: FC = () => {
    return (
        <div className={s.ring}>Loading
            <span className={s.span_spinner}></span>
        </div>
    )
}
export default Spinner