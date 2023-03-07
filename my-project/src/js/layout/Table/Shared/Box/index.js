import El from '../../../../library/El'

const Box = ({ child, bgColor, txtColor }) => {
  switch (child) {
    case 'Doing':
    case 'Medium':
      bgColor = 'yellow'
      
      txtColor = 'black'
      break
    case 'Todo':
    case 'High':
      bgColor = 'red'
      
      txtColor = 'white'
      break
    case 'Low':
      bgColor = 'gray'
      
      txtColor = 'black'
      break
    case 'Done':
      bgColor = 'green'
      txtColor = 'white'
  }
  return El({
    element: 'span',
    className: `rounded-full bg-${bgColor} px-3 py-1 text-${txtColor} `,
    child: `${child}`,
  })
}

export default Box
