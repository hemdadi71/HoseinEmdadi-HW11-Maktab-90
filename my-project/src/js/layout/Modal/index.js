import El from '../../library/El'
import Input from './Shared/Input'
import Select from './Shared/Select'
const Modal = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'div',
        id: 'modal',
        className:
          'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[40rem] rounded-md bg-white z-20',
        child: [
          El({
            element: 'h1',
            className: 'py-3 px-4 border-b text-xl font-semibold',
            child: 'New Task',
          }),
          El({
            element: 'div',
            className: 'mt-5 mb-3 px-[2rem]',
            child: [Input()],
          }),
          El({
            element: 'div',
            className: 'mt-5 mb-3 px-[2rem]',
            child: [Select()],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'modal-background',
        className:
          'w-full h-full absolute bg-gray-500 top-0 left-0 z-10 bg-opacity-50',
      }),
    ],
  })
}

export default Modal
