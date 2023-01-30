const FullTime = "FullTime";
const Temporary = "Temporary";
export enum Status {
  FullTime ,
  Temporary 
}

type Person = {
  name?: {
    first: string,
    middle?: string,
    last: string,
  },
  status: Status,
  profession: string
}

// if(person && person.name && person.name.first) => person?.name?.fisrt 와 동일함

export const introducePerson = (person: Person) =>
// 아래 코드로 실행시 middle이 없는 경우는 undefined로 출력됨
// `Hello ${person.name.first} ${person.name.middle} ${person.name.last}`
{
  if(person.name){
    
    return `Hello ${person?.name?.first ?? "First"} ${person?.name?.middle ?? ""} ${person?.name?.last ?? "Last"}`
  }
  return '이름 없음'
}

export const isFulltimeEmployee = (person: Person) => person.status === Status.FullTime;

export const personToString = (
  person:Person = {
    status: Status.FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown"
  }
) => JSON.stringify(person, null, 2);

type PersonMap = {[key:number]: Person}
export const getProfessions = (personMap: PersonMap) =>
  Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");