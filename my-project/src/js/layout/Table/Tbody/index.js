import El from '../../../library/El'
import Actions from '../Shared/Actions'
import Box from '../Shared/Box'

const Tbody = () => {
  return El({
    element: 'tbody',
    child: [
      El({
        element: 'tr',
        child: [
          El({
            element: 'td',
            className: 'py-3 text-left pl-3',
            child: 'walk the dog',
          }),
          El({
            element: 'td',
            child: [
              Box({
                child: 'Medium',
              }),
            ],
          }),
          El({
            element: 'td',
            child: [
              Box({
                child: 'Todo',
              }),
            ],
          }),
          El({
            element: 'td',
            child: [
              El({
                element: 'span',
                className: 'border rounded-full px-4 py-1 border-blue-500',
                child: '1371/02/06',
              }),
            ],
          }),
          Actions(),
        ],
      }),
    ],
  })
}

export default Tbody
