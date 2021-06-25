import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Date from '../components/date'; // comment it if you will use other option for date localization. Also, use the same way in [id].tsx
import Layout, { siteTitle } from '../layouts/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export const Home = ({
    allPostsData
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        description: string;
    }[];
}): JSX.Element => {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;

    /* Date localization other option
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    */

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*This section use tailwindcss ans css*/}
            <section className="my-8 prose prose-purple">
                <h2>Locales</h2>
                <ul className="my-8">
                    <li>Current locale: {locale}</li>
                    <li>Default locale: {defaultLocale}</li>
                    <li>Configured locales: {JSON.stringify(locales)}</li>
                </ul>
                <h2 className={utilStyles.headingLg}>{t('common:greeting')}</h2>
                <p>[Your Self Introduction]</p>
                <p>
                    This is a sample website based on{' '}
                    <a href="https://nextjs.org/learn">Next.js tutorial</a> with "next-translate".
                </p>
            </section>
            {/*This section use css*/}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>{t('common:blog')}</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, description }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            {/*
                            // Comment below if you will use other option data localization
                            */}
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} locale={locale} />
                            </small>
                            {/* Uncomment it for other option data localization
                            <small>
                                <time>
                                    {new Date(date).toLocaleDateString(locale, dateOptions)}
                                </time>
                            </small>
                            */}
                            <p className="prose-sm">{description}</p>
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
