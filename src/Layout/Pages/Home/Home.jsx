import styles from "./Home.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
  <>
  <Header />
    <main className={styles.homeWrapper}>
      <section className={styles.homeSliderSection}>

      </section>


      
    </main>
    <Footer />
    </>
  )
}

export default Home
