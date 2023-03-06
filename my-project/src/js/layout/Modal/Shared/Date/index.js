import El from '../../../../library/El'

const Date = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'input',
        className:'rounded-md border',
        type: 'date',
      }),
    ],
  })
}

export default Date
