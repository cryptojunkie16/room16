import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Room16</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hackmamba.svg" />
      </Head>
      <div className={styles.body}>
          <Sidebar/>
          <header className={styles.header}>
            <span className={styles.logo}><input type="search" name="search" id="search"/></span>
            <span className={styles.auth}>
                <span>
                    <button  className={styles.loginbtn}><Link href="/login">Login</Link></button>
                </span>
                <span>
                  <button className={styles.signupbtn}><Link href="/signup">Sign Up</Link></button>
                </span>
                
            </span>
          </header>
          <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to<Link href="/"> ROOM16</Link>
            </h1>

            <p className={styles.description}>
                Browse our catalogue of quality products.
            </p>

            <div className={styles.grid}>
            <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-18.jpeg" alt="An oxford shoe" width={250} height={240} />
                </div>
                <h2>Chelsea Boots</h2>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-10.jpeg" alt="An oxford shoe" width={250} height={240} />
                </div>
                <h2>Monkstrap</h2>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-19.jpeg" alt="An oxford shoe" width={250} height={240} />
                </div>
                <h2>Oxford</h2>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-11.jpeg" alt="An oxford shoe" width={250} height={270} />
                </div>
                <h2>Derby&</h2>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-12.jpeg" alt="An oxford shoe" width={250} height={270} />
                </div>
                <h2>Loafers</h2>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <div>
                  <Image src="/products/rm16-13.jpeg" alt="An oxford shoe" width={250} height={270} />
                </div>
                <h2>Pams</h2>
              </a>
            </div>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://hackmamba.io/hackathon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/hackmamba.svg" alt="Hackmamba Logo" width={60} height={32} />
              </span>
            </a>
          </footer>
      </div>
    </div>
  )
}
