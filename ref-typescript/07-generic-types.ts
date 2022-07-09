const book = {
    title: 'Sesuatu',
    author: 'Someone',
    year: 1900,
  }
  
  const room = {
    bed: true,
    toilet: true,
    ac: true,
  }
  
  //umumnya T, K, V, E
  function save<T, K>(item: T, room: K): T {
    return item
  }
  
  const item = save(book, room)
  
  console.log(item.author) // Someone