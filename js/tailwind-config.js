/**
 * Jai Buildcon - Tailwind Configuration
 * Defines custom colors, fonts, and theme extensions.
 */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#1e3a8a', // Deep Blue
                    dark: '#1e293b',
                    light: '#3b82f6'
                },
                secondary: '#f97316', // Construction Orange
                light: '#f8f9fa'
            }
        }
    }
}