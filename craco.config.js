module.exports = {
    stye: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ],
        },
    },
}