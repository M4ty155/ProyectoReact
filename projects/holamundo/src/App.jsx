import './App.css'
import LoadImages from './Images'
let images = ['https://store-images.s-microsoft.com/image/apps.808.14492077886571533.be42f4bd-887b-4430-8ed0-622341b4d2b0.c8274c53-105e-478b-9f4b-41b8088210a3?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF',
    'https://media.tycsports.com/files/2021/03/23/206640/roblox-mejores-juegos_862x485.jpg',
    'https://dropinblog.net/34249715/files/portada-post/juegos_de_plataformas_que_son_como_y_donde_crearlos.png',
];
export function App () {
    return (
        <>
        <div>
            Hola Mundo
        </div>
            <div>
                <LoadImages source = {images} />
            </div>
        </>
    );
}