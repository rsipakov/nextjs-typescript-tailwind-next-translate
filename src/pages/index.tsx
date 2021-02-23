import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export const Home = ({
    allPostsData
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}): JSX.Element => {
    const { t } = useTranslation();

    const router = useRouter();
    const { locale, locales, defaultLocale } = router;

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <div>
                    <div>
                        <p>Current locale: {locale}</p>
                        <p>Default locale: {defaultLocale}</p>
                        <p>Configured locales: {JSON.stringify(locales)}</p>
                    </div>
                </div>
                <h2 className={utilStyles.headingLg}>{t('common:greeting')}</h2>
                <p>[Your Self Introduction]</p>
                <p className="pt-5">
                    (This is a sample website - you’ll be building a site like this in{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section>
                <div className="py-5">
                    <h2 className={utilStyles.headingLg}>{t('common:tailwindcss')}</h2>
                    <div>
                        <ul>
                            <li>
                                <Link href={`/tailwindcss`}>
                                    <a>Tailwind CSS</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>{t('common:blog')}</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} locale={locale} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const allPostsData = getSortedPostsData(locale);
    return {
        props: {
            allPostsData
        }
    };
};
