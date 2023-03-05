/* eslint-disable no-unused-vars */
import El from '../../library/El'
import * as bootstrap from 'bootstrap'
import Nav from '../Nav'
import Table from '../Table'
import Sidebar from '../Sidebar'
import Modal from '../Modal'
import Footer from '../Footer'
import 'flowbite';
// ;<div className=" align-items-center justify-align-content-end"></div>
const Container = () => {
  return El({
    element: 'main',
    className: '',
    child: [Nav(), Table(), Footer(), Sidebar(), Modal()],
  })
}

export default Container
