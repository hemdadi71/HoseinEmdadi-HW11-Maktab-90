import El from '../../../../library/El'
const Box = ({ child, bgColor, txtColor, densiy }) => {
  switch (child) {
    case 'Doing':
    case 'Medium':
      bgColor = 'yellow'
      densiy = 200
      txtColor = 'black'
      break
    case 'Todo':
    case 'High':
      bgColor = 'red'
      densiy = 500
      txtColor = 'gray'
      break
    case 'Low':
      bgColor = 'gray'
      densiy = 300
      txtColor = 'black'
      break
    case 'Done':
      bgColor = 'green'
      densiy = 500
      txtColor = 'gray'
  }
  return El({
    element: 'span',
    className: `rounded-full bg-${bgColor}-${densiy} px-3 py-1 text-${txtColor}-100 `,
    child: `${child}`,
  })
}

export default Box
