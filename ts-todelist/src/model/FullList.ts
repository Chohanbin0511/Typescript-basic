import ListItem from './ListItem'

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void,
}

export default class FullList implements List {

  // static 인 이유는 매번 객체 생성하지않고 하나만 생성되서 사용하게끔 singleton
  static instance: FullList = new FullList()

  private constructor(private _list: ListItem[] = []) { }

  get list(): ListItem[] {
    return this._list
  }

  // localstorage에 myList라는 key로 저장
  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list))
  }

  clearList(): void {
    this._list = []
    this.save()
  }

  // 추가
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj)
    this.save()
  }

  // 삭제
  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id)
    this.save()
  }

  // localStorage 저장된 JSON을 ListItem[] 변환하고 저장 [{},{}]
  load(): void {
    const storedList: string | null = localStorage.getItem("myList")
    if (typeof storedList !== "string") return
    
    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)
    
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
      FullList.instance.addItem(newListItem)
    })
  }
}//FullList