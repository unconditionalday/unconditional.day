import type { NextPage } from 'next'

const About: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="header p-20">
                <h1 className="title text-8xl font-black text-center">Unconditional.</h1>
                <article className="prose lg:prose-xl">
                    <h1>Garlic bread with cheese: What the science tells us</h1>
                    <p>
                        For years parents have espoused the health benefits of eating garlic bread with cheese to their
                        children, with the food earning such an iconic status in our culture that kids will often dress
                        up as warm, cheesy loaf for Halloween.
                    </p>
                    <p>
                        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                        springing up around the country.
                    </p>
                </article>
            </div>
            <main className='m-auto container'>

            </main>
            <footer className='footer w-full mt-20 p-10 bg-black'>
                <p className="text-center text-white">Made with ❤️ by <a href="" className="text-blue-500">Independent Thinker</a></p>
            </footer>
        </div >
    )
}

export default About
