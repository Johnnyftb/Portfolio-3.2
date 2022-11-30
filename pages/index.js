import Head from 'next/head'
import { Navbar, Footer } from '../components/global/index';
import { Main } from '../components/home/index';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen min-w-screen">
      <Head>
        <title>John Pioc | Web3 Developer </title>
        <meta name="description" content="My name is John and I'm a self taught developer who loves to build things with code." />
        <link rel="icon" href="/assets/icons/j.png" />
      </Head>

      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
