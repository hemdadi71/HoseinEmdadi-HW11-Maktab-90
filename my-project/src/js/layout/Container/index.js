/* eslint-disable no-unused-vars */
import El from '../../library/El'
import * as bootstrap from 'bootstrap'
import Nav from '../Nav'
import Table from '../Table'
import Sidebar from '../Sidebar'
import Modal from '../Modal'
import Footer from '../Footer'
import 'flowbite'
import ModalBG from '../ModalBG'

const Container = () => {
  return El({
    element: 'main',
    className: 'h-[100vh]',
    child: [Nav(), Table(), Footer(), Sidebar(), Modal(), ModalBG()],
  })
}

export default Container
