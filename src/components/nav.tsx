import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
    {
        href: 'https://github.com/rsipakov/nextjs-typescript-tailwind-next-translate',
        label: 'GitHub'
    },
    { href: 'https://nextjs.org/docs', label: 'Next.js' }
];

export const Nav = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };
    return (
        <nav>
            <ul className="flex items-center justify-between p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                            Home
                        </a>
                    </Link>
                </li>
                <ul className="flex items-center justify-between space-x-4">
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <a href={href} className="no-underline btn-blue">
                                {label}
                            </a>
                        </li>
                    ))}
                    {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                    <select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="text-blue-700 text-shadow-sm text-sm bg-transparent tracking-wide">
                        <option value="en-US">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </ul>
            </ul>
        </nav>
    );
};

export default Nav;
