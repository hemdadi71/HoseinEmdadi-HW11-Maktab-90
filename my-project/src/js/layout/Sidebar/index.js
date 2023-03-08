import { svg } from '../../../assets/svgs/Svg'
import El from '../../library/El'
import { handleFilter } from '../Function'
export function handleShowSidebar() {
  const aside = document.getElementById('aside')
  const modalBG = document.getElementById('modal-background')
  aside.classList.remove('w-0')
  aside.classList.add('w-[23rem]')
  modalBG.classList.remove('hidden')
}
function handleHideSidebar() {
  const aside = document.getElementById('aside')
  const modalBG = document.getElementById('modal-background')
  aside.classList.add('w-0')
  aside.classList.remove('w-[23rem]')
  modalBG.classList.add('hidden')
}
const Sidebar = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'aside',
        id: 'aside',
        className:
          'w-0 h-full bg-white fixed top-0 right-0 flex flex-col gap-5 z-20 shadow',
        child: [
          El({
            element: 'div',
            className: 'flex items-center justify-between px-3 mt-3',
            child: [
              El({
                element: 'h1',
                className: 'text-2xl',
                child: 'Filters',
              }),
              El({
                element: 'i',
                className: 'cursor-pointer',
                innerHTML: svg.close,
                onclick: handleHideSidebar,
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col gap-2 px-3 ',
            child: [
              El({
                element: 'p',
                className: '',
                child: 'Priority :',
              }),
              El({
                element: 'select',
                id: 'Priority_Filter',
                className: 'rounded-md outline-none border',
                onchange: handleFilter,
                child: [
                  El({
                    element: 'option',
                    child: 'All',
                  }),
                  El({
                    element: 'option',
                    child: 'Low',
                  }),
                  El({
                    element: 'option',
                    child: 'Medium',
                  }),
                  El({
                    element: 'option',
                    child: 'High',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col gap-2 px-3 ',
            child: [
              El({
                element: 'p',
                className: '',
                child: 'Status :',
              }),
              El({
                element: 'select',
                id: 'Status_Filter',
                className: 'rounded-md outline-none border',
                onchange: handleFilter,

                child: [
                  El({
                    element: 'option',
                    child: 'All',
                  }),
                  El({
                    element: 'option',
                    child: 'Todo',
                  }),
                  El({
                    element: 'option',
                    child: 'Doing',
                  }),
                  El({
                    element: 'option',
                    child: 'Done',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col gap-2 px-3 ',
            child: [
              El({
                element: 'p',
                className: '',
                child: 'Deadline :',
              }),
              El({
                element: 'select',
                id: 'Deadline_Filter',
                className: 'rounded-md outline-none border',
                onchange: handleFilter,

                child: [
                  El({
                    element: 'option',
                    child: 'All',
                  }),
                  El({
                    element: 'option',
                    child: 'Low',
                  }),
                  El({
                    element: 'option',
                    child: 'Medium',
                  }),
                  El({
                    element: 'option',
                    child: 'High',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default Sidebar
