import El from '../../../../library/El'

const Date = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'input',
        id:'date',
        className:'rounded-md border-1 border-gray-200 focus:border-violet-800  shadow-none',
        type: 'date',
      }),
    ],
  })
}

export default Date
