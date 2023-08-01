import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Image from './Image'
import App from '../App'
import Header from './Header'
import DownloadImg from './Image/ImgDownload'

export default function AppRouter(){
    return(
        <BrowserRouter>
                <Header/>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='imagem/:id' element={<Image/>}/>
            </Routes>
            <Routes>
                <Route path='imagem/:id/:id' element={<DownloadImg/>}/>
            </Routes>
        </BrowserRouter>
    )
}