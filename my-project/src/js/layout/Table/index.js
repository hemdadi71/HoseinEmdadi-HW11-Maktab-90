import El from '../../library/El'
import Tbody from './Tbody'

const Table = () => {
  return El({
    element: 'table',
    className: 'w-full text-center font-bold text-gray-500 table-bordered',
    child: [
      El({
        element: 'thead',
        child: [
          El({
            element: 'tr',
            child: [
              El({
                element: 'td',
                className: 'text-left pl-3 py-3',
                child: 'Task Name',
              }),
              El({
                element: 'td',
                child: 'Priority',
              }),
              El({
                element: 'td',
                child: 'Status',
              }),
              El({
                element: 'td',
                child: 'Deadline',
              }),
              El({
                element: 'td',
                child: 'Actions',
              }),
            ],
          }),
        ],
      }),
      Tbody(),
    ],
  })
}

export default Table
