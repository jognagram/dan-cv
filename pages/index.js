import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";
import HomePage from "./homePage";
import Services from "./services";
import Works from "./works";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Danfolio </title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/pro.icon"/>
      </Head>

      <Navbar />
      <HomePage />
      <Services />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}