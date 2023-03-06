import El from '../../library/El'
import Date from './Shared/Date'
import Input from './Shared/Input'
import Select from './Shared/Select'
import TextArea from './Shared/TextArea'
import { Button } from '../../Components/shared/Button'
import { handleData, handleCancelForm } from '../Function'

const Modal = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'div',
        id: 'modal',
        className: `fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[40rem] rounded-md bg-white z-20 hidden`,
        child: [
          El({
            element: 'h1',
            className: 'py-3 px-4 border-b text-xl font-semibold',
            child: 'New Task',
          }),
          El({
            element: 'form',
            child: [
              El({
                element: 'div',
                className: 'mt-5 mb-3 px-[2rem]',
                child: [Input()],
              }),
              El({
                element: 'div',
                className: 'mt-4 mb-3 px-[2rem] flex gap-5',
                child: [
                  Select({
                    title: 'Priority',
                    item1: 'priority',
                    item2: 'Low',
                    item3: 'Medium',
                    item4: 'High',
                  }),
                  Select({
                    title: 'Status',
                    item1: 'status',
                    item2: 'Todo',
                    item3: 'Doing',
                    item4: 'Done',
                  }),
                  Date(),
                ],
              }),
              El({
                element: 'div',
                className: 'px-8',
                child: [TextArea()],
              }),
              El({
                element: 'div',
                className: 'flex justify-between mt-3 mb-3 px-8',
                child: [
                  Button({
                    child: 'CANCEL',
                    onclick: handleCancelForm,
                    variant: 'outlined',
                  }),
                  Button({
                    child: 'SAVE',
                    onclick: handleData,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'modal-background',
        onclick: function () {
          this.classList.add('hidden')
          this.parentElement.childNodes[0].classList.add('hidden')
        },
        className: `w-full h-full absolute bg-gray-500 top-0 left-0 z-10 bg-opacity-50 hidden`,
      }),
    ],
  })
}

export default Modal
