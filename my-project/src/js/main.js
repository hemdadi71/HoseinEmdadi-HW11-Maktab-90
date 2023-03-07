import '../scss/styles.scss'
import App from './App'
import '../../src/index.css'
import '../../src/style.css'
import 'flowbite'
import { localRenderList } from './layout/Function'
const root = document.getElementById('app')

root.append(App())
localRenderList()

