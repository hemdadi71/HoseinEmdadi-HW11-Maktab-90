import { svg } from '../../../../../assets/svgs/Svg'
import El from '../../../../library/El'
const SearchInput = () => {
  return El({
    element: 'div',
    className: 'relative flex items-center',
    child: [
      El({
        element: 'input',
        className:
          'rounded-sm bg-gray-200 bg-opacity-40 h-7 w-48 outline-none pl-10 text-white placeholder-gray-200',
        placeholder: 'Search',
      }),
      El({
        element: 'div',
        className: 'absolute left-2',
        innerHTML: svg.search,
      }),
    ],
  })
}

export default SearchInput
