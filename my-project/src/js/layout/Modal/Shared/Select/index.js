import { svg } from '../../../../../assets/svgs/Svg'
import El from '../../../../library/El'

const Select = ({title,item1, item2, item3,item4}) => {
  function hide() {
    this.parentElement.classList.add('hide')
    this.parentElement.previousElementSibling.childNodes[1].innerHTML =
      this.innerHTML
    this.parentElement.previousElementSibling.childNodes[0].classList.remove(
      'rotate'
    )
  }
  // .............................................
  function show(e) {
    this.parentElement.childNodes[1].classList.toggle('hide')
    this.childNodes[0].classList.toggle('rotate')
  }
  // ............................................
  return El({
    element: 'div',
    className: 'relative w-[10rem]',
    child: [
      El({
        element: 'div',
        id: 'div',
        className:
          'w-[10rem] h-[2.5rem] border rounded-md relative flex items-center cursor-pointer',
        onclick: show,
        child: [
          El({
            element: 'div',
            className: 'absolute right-3 transition',
            innerHTML: svg.downArrow,
          }),
          El({
            element: 'p',
            id:'title',
            className: 'text-md pl-4',
            child: `${title}`,
          }),
        ],
      }),
      El({
        element: 'ul',
        className: 'rounded-b-md shadow-md absolute bg-white w-full pb-3 hide',
        child: [
          El({
            element: 'li',
            className: 'py-1 pl-4 cursor-pointer pointer-events-none text-gray-400',
            child: `${item1}`,
            onclick: hide,
          }),
          El({
            element: 'li',
            className: 'py-1 pl-4 hover:bg-violet-300 cursor-pointer',
            child: `${item2}`,
            onclick: hide,
          }),
          El({
            element: 'li',
            className: 'py-1 pl-4 hover:bg-violet-300 cursor-pointer',
            child: `${item3}`,
            onclick: hide,
          }),
          El({
            element: 'li',
            className: 'py-1 pl-4 hover:bg-violet-300 cursor-pointer',
            child: `${item4}`,
            onclick: hide,
          }),
        ],
      }),
    ],
  })
}

export default Select
