import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../components/footer';
import Nav from '../components/nav';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = '[Your Name]';
export const siteTitle = 'Boilerplate based on NextJS';

export const Layout = ({
    children,
    home
}: {
    children: React.ReactNode;
    home?: boolean;
}): JSX.Element => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content="Template based on NextJS" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div>
                <Nav />
            </div>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/TwilioHero.png"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/TwilioHero.png"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Layout;
