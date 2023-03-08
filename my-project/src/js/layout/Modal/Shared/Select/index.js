import { svg } from '../../../../../assets/svgs/Svg'
import El from '../../../../library/El'
import { hide } from '../../../Function'

const Select = ({
  title,
  item1,
  item2,
  item3,
  item4,
  id,
  width,
  style,
  onclick,
}) => {
  function show(e) {
    this.parentElement.childNodes[1].classList.toggle('hide')
    this.childNodes[0].classList.toggle('rotate')
    this.classList.remove('border')
    this.classList.add('border-violet')
  }
  // ............................................
  return El({
    element: 'div',
    className: `relative w-[${width}]`,
    child: [
      El({
        element: 'div',
        id: 'div',
        className: `w-[${width}] h-[2.5rem] border rounded-md relative flex items-center cursor-pointer`,
        onclick: show,
        child: [
          El({
            element: 'div',
            className: 'absolute right-3 transition',
            innerHTML: svg.downArrow,
          }),
          El({
            element: 'p',
            id: `${id}`,
            className: 'text-md pl-4',
            child: `${title}`,
          }),
        ],
      }),
      El({
        element: 'ul',
        id: 'selectUl',
        className:
          'rounded-b-md shadow-md absolute z-10 bg-white w-full pb-3 hide',
        child: [
          El({
            element: 'li',
            className: `py-1 pl-4 cursor-pointer hover:bg-violet-300 ${style}`,
            child: `${item1}`,
            onclick: hide,
          }),
          El({
            element: 'li',
            className: 'py-1 pl-4 hover:bg-violet-300 cursor-pointer',
            child: `${item2}`,
            onclick,
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
