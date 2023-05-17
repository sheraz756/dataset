import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const home = async ()=>{
        navigate('/')
    }
  return (
    <div>
        <header className={styles.rectangleHeader} id="header" />
        <img className={styles.image1Icon} onClick={home} alt="" src="/image-2@2x.png" />
    </div>
  )
}

export default Header