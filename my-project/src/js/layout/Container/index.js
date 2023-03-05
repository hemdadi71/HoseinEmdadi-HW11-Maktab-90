/* eslint-disable no-unused-vars */
import El from '../../library/El'
import * as bootstrap from 'bootstrap'
// ;<div className=" align-items-center justify-align-content-end"></div>
const Container = () => {
  return El({
    element: 'div',
    className: 'bg-header text-white dropdown',
    child: [
      El({
        element: 'select',
        className: 'form-select form-select-lg mb-3 w-25 rounded-1 bg-red-500',
        id: '',
        child: [
          El({
            element: 'option',
            href: '#',
            child: 'Action',
            onclick: function () {
              this.parentElement.previousElementSibling.innerText = `${this.innerText}`
            },
          }),
          El({
            element: 'option',
            href: '#',
            child: 'Another action',
          }),
          El({
            element: 'option',
            href: '#',
            child: 'Action',
          }),
        ],
      }),
    ],
  })
}

export default Container
