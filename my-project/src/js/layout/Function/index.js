/* eslint-disable prefer-const */
import renderList from '../Table/TRow'
let Data = []
export function handleData(e) {
  e.preventDefault()
  const taskName = this.closest('form').TaskName
  const priority = this.closest('form').childNodes[1].childNodes[0]
  const status = this.closest('form').childNodes[1].childNodes[1]
  const date = this.closest('form').childNodes[1].childNodes[2].childNodes[0]
  const details = this.closest('form').childNodes[2].childNodes[0].childNodes[0]
  if (
    !taskName.value ||
    priority.innerText === 'Priority' ||
    status.innerText === 'Status' ||
    !date.value
  ) {
    return
  }
  Data.push({
    id: crypto.randomUUID(),
    taskName: taskName.value,
    priority: priority.innerText,
    status: status.innerText,
    date: date.value,
    details: details.value,
  })
  this.closest(
    'form'
  ).childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText =
    'Priority'
  this.closest(
    'form'
  ).childNodes[1].childNodes[1].childNodes[0].childNodes[1].innerText = 'Status'
  this.closest('form').reset()
  const modal = document.getElementById('modal')
  modal.classList.add('hidden')
  modal.nextElementSibling.classList.add('hidden')
  renderList(Data)
  // localStorage.setItem('item', JSON.stringify(Data))
}
// ..................................................
export function handleDeleteItem() {
  const filteredItems = Data.filter(item => item.id !== this.closest('tr').id)
  console.log(this.closest('tr').id)
  Data = filteredItems
  renderList(Data)
}
// ..........................................................................................
export function handleCancelForm(e) {
  e.preventDefault()
  this.closest('#modal').classList.add('hidden')
  this.closest('#modal').nextElementSibling.classList.add('hidden')
  this.closest(
    'form'
  ).childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText =
    'Priority'
  this.closest(
    'form'
  ).childNodes[1].childNodes[1].childNodes[0].childNodes[1].innerText = 'Status'
  this.closest('form').reset()
}
