export const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row justify-between md:p-10 text-black border">
            <div className="subfooter-left flex flex-col md:flex-col md:gap-2 px-2 md:px-10">
                <h1 className="title text-xl md:text-2xl font-black rounded-lg">Unconditional.</h1>
                <p className="text-transparent text-md md:text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">© 2022 All rights reserved.</p>
            </div>
            <div className="subfooter-right flex flex-col md:flex-col md:gap-2 px-2 md:px-10">
                <p className="title text-xl md:text-2xl font-black rounded-lg">Lorem,Ipsum,Sum </p>
                <ul className="text-md md:text-xl flex gap-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>License</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer