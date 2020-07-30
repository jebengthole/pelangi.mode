import Head from 'next/head'
import Menu from '../components/menu';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Menu />
                <div>
                    <h3>Selamat Datang di Pelangi Mode Fashion</h3>
                    <h4>Penjahit Online Berbagai Model Busana</h4>
                </div>
        </div>
    );
}