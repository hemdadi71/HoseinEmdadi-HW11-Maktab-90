import { svg } from '../../../../../assets/svgs/Svg'
import El from '../../../../library/El'

const Actions = () => {
  const classes = `w-[30px] h-[30px] flex items-center justify-center rounded-md cursor-pointer`

  return El({
    element: 'td',
    className: 'flex justify-center gap-2 pt-[13px]',
    child: [
      El({
        element: 'span',
        className: `${classes} bg-red-500`,
        innerHTML: svg.trash,
      }),
      El({
        element: 'span',
        className: `${classes} bg-blue-500`,
        innerHTML: svg.edit,
      }),
      El({
        element: 'span',
        className: `${classes} bg-gray-500`,
        innerHTML: svg.view,
      }),
    ],
  })
}

export default Actions
