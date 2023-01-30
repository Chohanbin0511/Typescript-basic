import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance
  // Add listener to new entry form submit
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
  
    //..... //다음 페이지
    event.preventDefault()
    // Get the new item value
    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText.length) return
    // calculate item ID
    const itemId: number = fullList.list.length
    ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1
    // create new itema
    const newItem = new ListItem(itemId.toString(), newEntryText)
    // Add new item to full list
    fullList.addItem(newItem)
    // input field value clear
    input.value = ''
    // Re-render list with new item included
    template.render(fullList)
  })

  // Add listener to “clear" button
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    template.clear()
  })
  
  // TODO: 완성되면 삭제 예정
  const initData = [
    { _id: '1', _item: "test", _checked: false }
  ]
  localStorage.setItem('myList', JSON.stringify(initData))


  
  // load initial data
  fullList.load()
  

  
  // initial render of template
  template.render(fullList)

}//initApp

document.addEventListener("DOMContentLoaded", initApp) 
