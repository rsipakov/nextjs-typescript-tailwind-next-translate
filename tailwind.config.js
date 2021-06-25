module.exports = {
    darkMode: 'media', // 'media' or 'class'
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: {
        mode: 'all',
        content: [
            './src/components/**/*.{js,ts,jsx,tsx}',
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/layouts/**/*.{js,ts,jsx,tsx}'
        ]
    },
    theme: {
        extend: {
            colors: {
                'accent-1': '#333'
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ]
};
