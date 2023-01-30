  import  {
    introducePerson,
    Status,
    isFulltimeEmployee,
    personToString,
    getProfessions
  } from './objects'

  const jack = {
    name: {
      first: "Jack",
      last: "Herrington",
    },
    status: Status.FullTime,
    profession: "Engineer",
  };
  
  const jack2 = {
    status: Status.Temporary,
    profession: "Engineer2"
  }

  console.log('jack2-introduce: ',introducePerson(jack2));
  console.log(introducePerson(jack));
  
  console.log(isFulltimeEmployee(jack));
  
  console.log(personToString(jack));
  
  console.log(
    getProfessions({
      1: jack,
    })
  );