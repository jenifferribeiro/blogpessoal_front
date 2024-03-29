import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {

    return (
        <>
            <div id="container" className="bg-violet-400 flex justify-center">
                <div id="subcontainer" className="container grid grid-cols-2 text-white">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="
                        text-5xl
                        font-bold
                        ">Seja Bem Vinde!</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>
                        
                        <div className="flex justify-around gap-4">
                        <ModalPostagem />
                    
                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center" >
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home
