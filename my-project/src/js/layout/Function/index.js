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
// ...........................................................
export function hide(e) {
  this.parentElement.classList.add('hide')
  this.parentElement.previousElementSibling.childNodes[1].innerHTML =
    this.innerHTML
  this.parentElement.previousElementSibling.childNodes[0].classList.remove(
    'rotate'
  )
  this.parentElement.previousElementSibling.classList.remove('border-violet')
  this.parentElement.previousElementSibling.classList.add('border')
}
// ...................................................................
export function handleFilter() {
  if (this.value === 'All') {
    renderList(Data)
  }
  if (this.value === 'Low') {
    const filterItem = Data.filter(item => item.priority === 'Low')
    renderList(filterItem)
  }
  if (this.value === 'Medium') {
    const filterItem = Data.filter(item => item.priority === 'Medium')
    renderList(filterItem)
  }
  if (this.value === 'High') {
    const filterItem = Data.filter(item => item.priority === 'High')
    renderList(filterItem)
  }
  // ..................................................................
  if (this.value === 'Todo') {
    const filterItem = Data.filter(item => item.status === 'Todo')
    renderList(filterItem)
  }
  if (this.value === 'Doing') {
    const filterItem = Data.filter(item => item.status === 'Doing')
    renderList(filterItem)
  }
  if (this.value === 'Done') {
    const filterItem = Data.filter(item => item.status === 'Done')
    renderList(filterItem)
  }
}
// ...........................................................................
let counter = 1
function page(path) {
  const page = document.getElementById('page')
  const tbody = document.getElementById('tbody')
  const h1 = document.createElement('h1')
  h1.className='text-xl text-center'
  tbody.innerHTML = ''
  
  page.innerHTML = ''
  switch (path) {
    case '/1':
      page.innerHTML = '1-3 of 3'
      renderList(Data)
      break
    case '/2':
      page.innerHTML = '2-3 of 3'
      h1.innerHTML = 'PAGE-2'
      tbody.append(h1)
      break
    case '/3':
      page.innerHTML = '3-3 of 3'
      h1.innerHTML = 'PAGE-3'
      tbody.append(h1)
      break
  }
}
export function minusPage() {
  history.pushState(null, null, `/${counter > 1 ? (counter -= 1) : 1}`)
  page(location.pathname)
}
export function plusPage() {
  history.pushState(null, null, `/${counter < 3 ? (counter += 1) : 3}`)
  page(location.pathname)
}
