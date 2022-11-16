export const Footer = () => {
    return (
        <footer className="footer flex flex-row bg-black text-white p-6">
            <div className="footer-left flex flex-col">
                <h1 className="title text-4xl font-black rounded-lg">Unconditional.</h1>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">© 2022 All rights reserved.</p>
            </div>
            <div className="footer-right m-auto">
                <p className="text-6xl font-black rounded-lg">Lorem ipsum footer</p>
                <ul className="flex gap-4  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>License</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer