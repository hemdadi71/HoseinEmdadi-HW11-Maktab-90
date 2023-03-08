import '../scss/styles.scss'
import '../../src/index.css'
import App from './App'
import '../../src/style.css'
import 'flowbite'
import { localRenderList } from './layout/Function'
const root = document.getElementById('app')

root.append(App())
localRenderList()

