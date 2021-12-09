import {FC} from "react"
import '../index.css'
import react from '../img/react.png'
import redux from '../img/redux.png'
import ts from '../img/ts.png'
import nodejs from '../img/nodejs.png'
import mongo from '../img/mongodb.png'
import express from '../img/express.png'

const Footer: FC = () => {

    return (
        <footer className="page-footer grey darken-3">
            <div className='wrap_footer'>
                <span className='footer_title'>This full-stack app uses technologies</span>
                <div className='footer_left_block'>
                    <img src={react} alt="img_react" className='img_react'/>
                    <img src={redux} alt="img_redux" className='img_redux'/>
                    <img src={ts} alt="img_ts" className='img_ts'/>
                </div>
                <div className='footer_right_block'>
                    <img src={nodejs} alt="img_nodejs" className='img_nodejs'/>
                    <img src={express} alt="img_express" className='img_express'/>
                    <img src={mongo} alt="img_mongo" className='img_mongo'/>
                </div>
            </div>
        </footer>
    )
}
export default Footer