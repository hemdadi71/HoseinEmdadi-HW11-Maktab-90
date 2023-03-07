import El from '../../../../library/El'

const TextArea = () => {
  return El({
    element: 'div',
    className: '',
    child: [
      El({
        element: 'textarea',
        id:'details',
        className:'rounded-md w-[36rem] h-[8rem] border-1 border-gray-200 focus:border-violet-800  shadow-none',
        placeholder:'Details (Optional)'
      }),
    ],
  })
}

export default TextArea
