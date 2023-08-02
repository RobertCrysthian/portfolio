import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Image from './Image'
import App from '../App'

import DownloadImg from './Image/ImgDownload'
import DefaultPage from './DefaultPage'

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                    <Route path='/' element={<App/>}/>
                    <Route path='imagem/:id' element={<Image/>}/>
                </Route>
                <Route path='imagem/:id/:id' element={<DownloadImg/>}/>
            </Routes>

        </BrowserRouter>
    )
}