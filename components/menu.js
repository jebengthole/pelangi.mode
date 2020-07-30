import Link from 'next/link';

export default function Menu() {
    return (
        <div>
                <ul>
                    <li>
                        <Link href="/erna"><a>Pelangi Mode Fashion</a></Link>
                    </li>
                    <li>
                        <Link href="/tentang"><a>Tentang Kami</a></Link>
                    </li>
                </ul>
        </div>
    );
}