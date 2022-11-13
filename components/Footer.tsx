export const Footer = () => {
    return (
        <footer className="footer flex flex-row bg-black text-white p-10">
            <div className="footer-left flex flex-col">
                <h1 className="title text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg">Unconditional.</h1>
                <ul className="flex gap-4">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>License</li>
                </ul>
                <p className="">© 2021 Unconditional. All rights reserved.</p>
            </div>
            <div className="footer-right m-auto text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg">
                <p>Lorem ipsum footer</p>
            </div>
        </footer>
    )
}

export default Footer