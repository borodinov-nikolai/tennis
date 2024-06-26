import { useRef } from 'react'
import About from '../components/about'
import Callback from '../components/callback'
import DesktopServices from '../components/desktopServices/desktopServices'
import Gallery from '../components/gallery'
import MobileServices from '../components/mobileServices'
import Team from '../components/team'
import styles from './HomePage.module.scss'



export const HomePage = () => {
  const formRef = useRef<HTMLDivElement>(null)

  const handleScrollToForm = ()=> {

    formRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  return (
   <main className={styles.root}  >
      <div className={styles.mainBackground}></div>
      <section className={styles.hero} >
        <h1>ТЕННИСНЫЙ КЛУБ</h1>
        <p>
        БОЛЬШОЙ ТЕННИС <br />
        ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ <br />
        В КОРОЛЕВЕ
        </p>
      </section>
      <section className={styles.gallery} >
        <Gallery/>
      </section>
      <section className={styles.about} >
        <About/>
      </section>
      <section className={styles.services} >
      <div className={styles.mobileServices} > <MobileServices scrollTo={handleScrollToForm} /> </div>
      <div className={styles.desktopServices} > <DesktopServices scrollTo={handleScrollToForm} /> </div>
      </section>
      <section className={styles.team} >
        <Team/>
      </section>
      <section  ref={formRef} className={styles.callback} >
        <Callback />
      </section>
      
    </main>
  )
}
