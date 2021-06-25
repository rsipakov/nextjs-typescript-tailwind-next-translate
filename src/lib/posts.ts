/* eslint-disable */

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), './src/posts/');
const { defaultLocale } = require('../../i18n.json');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getSortedPostsData(locale: string) {
    // Get file names under /posts
    const postIds = fs.readdirSync(postsDirectory);

    const allPostsData = postIds
        .map((id) => {
            // Read markdown file as string
            const filename = locale === defaultLocale ? 'index.md' : `index.${locale}.md`;
            const fullPath = path.join(postsDirectory, id, filename);

            if (!fs.existsSync(fullPath)) {
                return;
            }

            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id,
                ...(matterResult.data as { date: string; title: string }),
            };
        })
        .filter((post) => post);
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getAllPostIds(locales: string[]) {
    let paths: { params: { id: string }; locale: string }[] = [];

    const postIds = fs.readdirSync(postsDirectory);

    for (let id of postIds) {
        for (let locale of locales) {
            let fullpath = path.join(
                postsDirectory,
                id,
                locale === defaultLocale ? 'index.md' : `index.${locale}.md`,
            );
            if (!fs.existsSync(fullpath)) {
                continue;
            }

            paths.push({ params: { id }, locale });
        }
    }

    return paths;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getPostData(id: string, locale: string) {
    const fullPath = path.join(
        postsDirectory,
        id,
        locale === defaultLocale ? 'index.md' : `index.${locale}.md`,
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string }),
    };
}
