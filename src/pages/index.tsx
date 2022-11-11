import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';
import HomePage from './HomePage/HomePage';

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />;
    </>
  );
}
