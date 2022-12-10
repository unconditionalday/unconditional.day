import type { NextPage } from 'next'
import Footer from '../components/Footer'
import { Header } from '../components/Header'

const About: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <article className="prose lg:prose-xl p-10 md:p-0 md:m-auto">
                <h1>Garlic bread with cheese: What the science tells us</h1>
                <p>
                    Pensiamo che il mondo debba essere un posto migliore e quindi libero. Questo progetto nasce sopratutto da un bisogno personale: cercare contenuti in maniera completamente libera e autonoma. Nessuna targetizzazione, nessun ads, nessun reccomender system, nessun algoritmo che sceglie per noi.
                </p>

                <h1>Lorem </h1>
            </article>
            <main className='m-auto container'>

            </main>
            <Footer />
        </div >
    )
}

export default About
