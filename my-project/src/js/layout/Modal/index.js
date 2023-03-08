import El from '../../library/El'
import Date from './Shared/Date'
import Input from './Shared/Input'
import Select from './Shared/Select'
import TextArea from './Shared/TextArea'
import { Button } from '../../Components/shared/Button'
import { handleData, handleCancelForm, hide } from '../Function'

const Modal = () => {
  return El({
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
        id: 'form',
        child: [
          El({
            element: 'div',
            className: 'mt-5 mb-3 px-[2rem]',
            child: [Input()],
          }),
          El({
            element: 'div',
            id: 'selectBox',
            className: 'mt-4 mb-3 px-[2rem] flex gap-5',
            child: [
              Select({
                width: '10rem',
                id: 'priorityTitle',
                title: 'Priority',
                item1: 'priority',
                item2: 'Low',
                item3: 'Medium',
                item4: 'High',
                style: 'pointer-events-none text-gray-400',
                onclick: hide,
              }),
              Select({
                width: '10rem',
                id: 'statusTitle',
                title: 'Status',
                item1: 'status',
                item2: 'Todo',
                item3: 'Doing',
                item4: 'Done',
                style: 'pointer-events-none text-gray-400',
                onclick: hide,
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
            className: 'flex justify-between mt-3 pb-4 px-8',
            child: [
              Button({
                child: 'CANCEL',
                onclick: handleCancelForm,
                variant: 'outlined',
              }),
              Button({
                child: 'SAVE',
                id: 'submit',
                onclick: handleData,
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'modalDisable',
        className:
          'absolute bg-gray-700 h-full w-full top-0 left-0 rounded-md z-30 bg-opacity-10 hidden',
      }),
    ],
  })
}

export default Modal
