/* eslint-disable prefer-const */
import El from '../../../library/El'
import Actions from '../Shared/Actions'
import Box from '../Shared/Box'
// eslint-disable-next-line no-unused-vars
const renderList = state => {
  const tbody = document.getElementById('tbody')
  tbody.innerHTML = ''
  state.map(item =>
    tbody.append(
      El({
        element: 'tr',
        id: `${item.id}`,
        child: [
          El({
            element: 'td',
            className: 'py-3 text-left pl-3',
            child: `${item.taskName}`,
          }),
          El({
            element: 'td',
            child: [
              Box({
                child: `${item.priority}`,
              }),
            ],
          }),
          El({
            element: 'td',
            child: [
              Box({
                child: `${item.status}`,
              }),
            ],
          }),
          El({
            element: 'td',
            child: [
              El({
                element: 'span',
                className: 'border rounded-full px-4 py-1 border-blue-500',
                child: `${item.date}`,
              }),
            ],
          }),
          Actions(),
        ],
      })
    )
  )
}

export default renderList
