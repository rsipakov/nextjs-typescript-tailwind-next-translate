import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Home from '../src/pages/index';

afterEach(cleanup);

// eslint-disable-next-line no-undef
describe('HomePage', () => {
    // eslint-disable-next-line no-undef
    test('renders Home component', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function render({ locale = 'en', locales, defaultLocale } = {}) {
            return <Home allPostsData={[]} />;
        }
    });
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
