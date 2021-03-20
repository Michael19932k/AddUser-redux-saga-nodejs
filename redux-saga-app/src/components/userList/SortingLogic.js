const sort = {
    userName: { name: "userName", sorted: false },
    email: { name: "email", sorted: false },
    age: { name: "age", sorted: false },
  };
  
  function sortUsers(type, usersSorted, setUsersSorted) {
    sort[type].sorted = !sort[type].sorted;
  
    function stringSort(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  
    switch (type) {
      case "userName":
        setUsersSorted(
          sort[type].sorted
            ? [
                ...usersSorted.sort((a, b) =>
                  stringSort(a.userName, b.userName)
                )
              ]
            : [
                ...usersSorted
                  .sort((a, b) => stringSort(a.userName, b.userName))
                  .reverse()
              ]
        );
        break;
      case "email":
        setUsersSorted(
          sort[type].sorted
            ? [...usersSorted.sort((a, b) => stringSort(a.email, b.email))]
            : [
                ...usersSorted
                  .sort((a, b) => stringSort(a.email, b.email))
                  .reverse()
              ]
        );
        break;
      case "age":
            setUsersSorted(
                sort[type].sorted
                  ? [...usersSorted.sort((a, b) => a.age - b.age)]
                  : [...usersSorted.sort((a, b) => a.age - b.age).reverse()]
              );
        break;
      default:
        return usersSorted;
    }
  }
  
  export default sortUsers;
  