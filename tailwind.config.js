import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Colors from Apharcad logo
                'apharcad-yellow': '#FFDA44', // Light yellow
                'apharcad-pink': '#F7186A',   // Pink
                'apharcad-purple': '#4A0082', // Deep purple
                
                // Modified variations for UI elements
                'apharcad-yellow-light': '#FFF2BD',
                'apharcad-pink-light': '#FEE5EE',
                'apharcad-purple-light': '#EDE2F5',
                
                // Text and background colors
                'primary': '#4A0082',    // Deep purple for primary actions
                'secondary': '#F7186A',  // Pink for secondary elements
                'accent': '#FFDA44',     // Yellow for accents/highlights
            },
        },
    },

    plugins: [forms],
};
