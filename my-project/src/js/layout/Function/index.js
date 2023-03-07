/* eslint-disable prefer-const */
import renderList from '../Table/TRow'
let Data = []
let selectedId
export default Data
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
  const submit = document.getElementById('submit')
  if (submit.innerHTML === 'SAVE') {
    Data.push({
      id: crypto.randomUUID(),
      taskName: taskName.value,
      priority: priority.innerText,
      status: status.innerText,
      date: date.value,
      details: details.value,
    })
    renderList(Data)
  } else if (submit.innerHTML === 'EDIT') {
    submit.innerHTML = 'save'
    Data = Data.map(item => {
      if (item.id === selectedId) {
        item.taskName = taskName.value
        item.date = date.value
        item.priority = priority.innerText
        item.status = status.innerText
        item.details = details.value
      }
      return item
    })
    renderList(Data)
  }
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
  localStorage.setItem('item', JSON.stringify(Data))
}
// .............................................................
export function showModal() {
  const modal = document.getElementById('modal')
  const modalDisable = document.getElementById('modalDisable')
  const modalBackground = document.getElementById('modal-background')
  modal.classList.remove('hidden')
  modalBackground.classList.remove('hidden')
  modalDisable.classList.add('hidden')
}
// ..................................................
export function handleDeleteItem() {
  const filteredItems = Data.filter(item => item.id !== this.closest('tr').id)
  Data = filteredItems
  localStorage.setItem('item', JSON.stringify(Data))
  renderList(Data)
}

// ..........................................................................................
export function handleCancelForm(e) {
  const submit = document.getElementById('submit')
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
  submit.innerText = 'SAVE'
}
// .........................................
export function localRenderList() {
  const items = localStorage.getItem('item')
  if (items) {
    let jsItems = JSON.parse(items)
    Data = jsItems
    renderList(Data)
  } else {
    renderList(Data)
  }
}
// ..........................
export function handleSearch() {
  const items = localStorage.getItem('item')
  if (items) {
    let jsItems = JSON.parse(items)
    const filteredItem = jsItems.filter(item =>
      item.taskName.startsWith(this.value)
    )
    if (this.value === '') {
      renderList(jsItems)
    } else {
      jsItems = filteredItem
      renderList(jsItems)
    }
  }
}
// .............................................
export function handleEditItem() {
  const modalDisable = document.getElementById('modalDisable')
  const submit = document.getElementById('submit')
  const taskName = document.getElementById('floating_outlined')
  const date = document.getElementById('date')
  const details = document.getElementById('details')
  const priorityTitle = document.getElementById('priorityTitle')
  const statusTitle = document.getElementById('statusTitle')
  showModal()
  submit.innerHTML = 'EDIT'
  const id = this.closest('tr').id
  selectedId = id
  const selectedItem = Data.find(item => item.id === id)
  taskName.value = selectedItem.taskName
  date.value = selectedItem.date
  priorityTitle.innerHTML = selectedItem.priority
  statusTitle.innerHTML = selectedItem.status
  details.value = selectedItem.details
  modalDisable.classList.add('hidden')
}
// ..................................................
export function handleShowItem() {
  const taskName = document.getElementById('floating_outlined')
  const date = document.getElementById('date')
  const details = document.getElementById('details')
  const priorityTitle = document.getElementById('priorityTitle')
  const statusTitle = document.getElementById('statusTitle')
  const modalDisable = document.getElementById('modalDisable')
  showModal()
  const id = this.closest('tr').id
  selectedId = id
  const selectedItem = Data.find(item => item.id === id)
  taskName.value = selectedItem.taskName
  date.value = selectedItem.date
  priorityTitle.innerHTML = selectedItem.priority
  statusTitle.innerHTML = selectedItem.status
  details.value = selectedItem.details
  modalDisable.classList.remove('hidden')
}
