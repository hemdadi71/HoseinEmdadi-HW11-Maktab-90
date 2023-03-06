import El from '../../../../library/El'

const TextArea = () => {
  return El({
    element: 'div',
    className: '',
    child: [
      El({
        element: 'textarea',
        className:'rounded-md border w-[36rem] h-[8rem]',
        placeholder:'Details (Optional)'
      }),
    ],
  })
}

export default TextArea
