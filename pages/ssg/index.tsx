import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

interface Props {
  buildDate: String
}

const SSG: NextPage<Props> = ({ buildDate }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSG DEMO</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>SSG(Static Site Generate) Demo</h1>

        <p className={styles.description}>Builded at: {buildDate}</p>
        <p className={styles.description}>
          <h2>
            <Link href='/'>&larr; HOME</Link>
          </h2>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href='https://53ningen.com' target='_blank' rel='noopener noreferrer'>
          53ningen.com
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const props: Props = {
    buildDate: new Date().toLocaleString('ja-JP'),
  }
  return {
    props,
  }
}

export default SSG
