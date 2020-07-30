import Head from 'next/head'
import Menu from '../components/menu';

export default function Tentang() {
    return (
        <div>
            <Head>
                <title>Tentang Kami</title>
            </Head>
            <Menu />
                <div>
                    <h2>Tentang Kami</h2>
                    <h3>Menyediakan Segala Jenis Kain dan Menerima Design Baju<br/>
                        Alamat      : Jl. Wijaya Kusuma No. 109 Banyuwangi<br/>
                        HP          : 081230132481<br/>
                        Instagram   : @pelangimode.id<br/>
                    </h3>

                </div>
        </div>
    );
}
       