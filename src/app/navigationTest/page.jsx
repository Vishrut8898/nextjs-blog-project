'use client'

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationTestPage = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handleClick = () => {
        console.log(pathName+searchParams.get('q'));
    };

    return (
        <div>
            Navigation Test <Link href="/" prefetch={false}>Go to homepage</Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    )
}

export default NavigationTestPage;
