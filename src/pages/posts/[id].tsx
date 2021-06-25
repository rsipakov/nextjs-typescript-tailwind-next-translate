import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Date from '../../components/date';
import Layout from '../../layouts/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const Post = ({
    postData
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}): JSX.Element => {
    const { locale } = useRouter();

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="py-10 prose lg:prose-xl">
                <h2>{postData.title}</h2>
                <div>
                    <Date dateString={postData.date} locale={locale} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths = getAllPostIds(locales);
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const postData = await getPostData(params.id as string, locale);
    return {
        props: {
            postData
        }
    };
};
