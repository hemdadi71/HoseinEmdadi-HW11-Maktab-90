import { svg } from '../../../../../assets/svgs/Svg'
import El from '../../../../library/El'

const Select = () => {
  return El({
    element: 'div',
    id: 'div',
    child: [
      El({
        element: 'select',
        className: 'select',
        name: 'priority',
        child: [
          El({
            element: 'option',
            className:'relative',
            value: '1',
            child: 'priority',
          }),
          El({
            element: 'option',
            value: '2',
            child: 'Low',
          }),
        ],
      }),
    ],
  })
}

export default Select
