import El from '../../library/El'
import { svg } from '../../../assets/svgs/Svg'
import SearchInput from './Shared/SearchInput/index'

const Nav = () => {
  function showModal() {
    const modal = document.getElementById('modal')
    const modalBackground = document.getElementById('modal-background')
    modal.classList.remove('hidden')
    modalBackground.classList.remove('hidden')
  }
  return El({
    element: 'div',
    className: 'bg-header flex justify-between',
    child: [
      El({
        element: 'div',
        className: 'p-2 flex items-center gap-2',
        child: [
          El({
            element: 'div',
            innerHTML: svg.list,
          }),
          El({
            element: 'h1',
            className: 'text-white font-bold text-2xl',
            child: 'My To-Do Tasks',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-4 items-center mr-5',
        child: [
          SearchInput(),
          El({
            element: 'div',
            className: 'cursor-pointer',
            innerHTML: svg.filter,
          }),
          El({
            element: 'div',
            className: 'cursor-pointer',
            innerHTML: svg.add,
            onclick: showModal,
          }),
        ],
      }),
    ],
  })
}

export default Nav
