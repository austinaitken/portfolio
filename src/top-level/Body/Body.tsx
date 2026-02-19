import { Route, Routes } from 'react-router-dom'
import ContactUs from '@/routes/ContactUs/ContactUs'
import UnknownRoute from '@/routes/UnknownRoute/UnknownRoute'
import Home2 from '@/routes/Home/Home'

import styles from './Body.module.css'

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route path='/' element={<Home2 />}/>
                <Route path='/contact-us' element={<ContactUs />}/>
                <Route path='*' element={<UnknownRoute />}/>
            </Routes>
        </div>
    )
}

export default Body