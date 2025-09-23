import React from 'react'

const FooterSection = () => {
    return (
        <footer className="pt-8 text-center text-xs">
            © {new Date().getFullYear()} Rickson Dev — feito com Next.js
        </footer>
    )
}

export default FooterSection