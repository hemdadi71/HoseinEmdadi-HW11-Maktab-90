import El from '../../library/El'
const ModalBG = () => {
  return El({
    element: 'div',
    id: 'modal-background',
    onclick: function () {
      const submit = document.getElementById('submit')
      const form = document.getElementById('form')
      const aside = document.getElementById('aside')
      aside.classList.add('w-0')
      aside.classList.remove('w-[23rem]')
      this.classList.add('hidden')
      this.parentElement.childNodes[4].classList.add('hidden')
      submit.innerText = 'SAVE'
      form.reset()
    },
    className: `w-full h-full absolute bg-gray-500 top-0 left-0 z-10 bg-opacity-50 hidden`,
  })
}

export default ModalBG
