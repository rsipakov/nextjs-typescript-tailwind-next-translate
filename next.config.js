/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
    future: {
        webpack5: true,
    },
    ...nextTranslate(),
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')]
    }
};
