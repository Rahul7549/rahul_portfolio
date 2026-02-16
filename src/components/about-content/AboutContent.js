import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/project1.avif'
import img2 from '../../assets/project2.jpg'
export default function AboutContent() {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who AM I</h1>
                <p>

                   Frontend Engineer with 4+ years of experience building scalable, enterprise-grade Angular applications and interactive dashboards. I specialize in developing high-performance Single Page Applications with clean architecture, reusable components, and seamless REST API integration. My work focuses on creating intuitive, data-driven user experiences that are both efficient and maintainable. 

                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={img1} className='img' alt='True' />
                    </div>

                    <div className='img-stack bottom'>
                        <img src={img2} className='img' alt='True' />
                    </div>

                </div>
            </div>

        </div>
    )
}
