import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-200 text-center py-6 md:py-8'>
            <p className='text-gray-700 text-sm md:text-base'>
                &copy; {new Date().getFullYear()} | Developed by{' '}
                <a 
                    href="https://rijoan.com" 
                    className='font-bold text-blue-500 hover:text-blue-700 transition duration-300'
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Md Rijoan Maruf
                </a>
            </p>
        </footer>
    );
};

export default Footer;
