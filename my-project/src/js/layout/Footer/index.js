import { svg } from '../../../assets/svgs/Svg'
import El from '../../library/El'
import { minusPage, plusPage } from '../Function'

const Footer = () => {
  return El({
    element: 'div',
    className: 'flex flex-row-reverse px-3 gap-1 items-center mt-3',
    child: [
      El({
        element: 'div',
        className: 'flex gap-4 ml-3',
        child: [
          El({
            element: 'i',
            onclick: minusPage,
            className: 'cursor-pointer',
            innerHTML: svg.leftArrow,
          }),
          El({
            element: 'i',
            onclick: plusPage,
            className: 'cursor-pointer',
            innerHTML: svg.rightArrow,
          }),
        ],
      }),
      El({
        element: 'span',
        id: 'page',
        child: `1-3 of 3`,
      }),
      El({
        element: 'select',
        className: 'border-none text-sm shadow-none',
        child: [
          El({
            element: 'option',
            child: '10',
          }),
          El({
            element: 'option',
            child: '25',
          }),
          El({
            element: 'option',
            child: '100',
          }),
          El({
            element: 'option',
            child: 'All',
          }),
        ],
      }),
      El({
        element: 'span',
        child: 'Rows per page :',
      }),
    ],
  })
}

export default Footer
