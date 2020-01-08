module.exports = {
    extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
    // Add custom rules here
    rules: {
        indent: ['error', 4],
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
    },
    overrides: [
        {
            files: ['style.ts'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
