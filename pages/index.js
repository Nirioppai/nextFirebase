import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show />

      {/* <Link
        // if true, pag pinindot agad yung link, mag loload yung page
        prefetch={false}
        href={{ pathname: '/[username', query: { username: 'jeffd23' } }}
      ></Link> */}
    </div>
  );
}
