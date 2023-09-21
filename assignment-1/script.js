const global = {
  main: null,
  container: null,
  overlayAddBook: null,
  formAddBook: null,
  overlayDeleteBook: null,
  areaDeleteBook: null,
  idForDeleteBook: null,
}

const CLASS_NAMES = {
  header: 'header',
  item: 'item',
  itemCell: 'item-cell',
  deleteItem: 'delete-item',
  mappingCellClass: {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'end',
  },
  backgroundGray: 'backgroundGray'
}

const ID_NAMES = {
  overlayDeleteBook: 'overlayDeleteBook',
  overlayAddBook: 'overlayAddBook',
  container: 'container',
  main: 'main',
  formAddBook: 'formAddBook',
  areaDeleteBook: 'areaDeleteBook',
  addBook: 'addBook',
  closeAddBook: 'closeAddBook',
  closeDeleteBook: 'closeDeleteBook',
  searchInput: 'searchInput',
  cancel: 'cancel',
  delete: 'delete',
}

const CSS_PROPS = {
  visible: 'visible',
  hidden: 'hidden'
}

const TOPICS = {
  programing: 'Programming',
  devops: 'DevOps',
  database: 'Database',
  comic: 'Comic',
}

const bookstore = {
  header: [
    'Name',
    'Author',
    'Topic',
    'Action'
  ],
  data: [
    {
      id: 1,
      name: "Chú mèo máy doraemon",
      author: 'Fujiko F. Fujio',
      topic: TOPICS.comic,
    },
    {
      id: 2,
      name: "Refactoring",
      author: 'Martin Fowler',
      topic: TOPICS.programing,
    },
    {
      id: 3,
      name: "Designing Data-Intensive Applications",
      author: 'Martin Kleppmann',
      topic: TOPICS.database,
    },
    {
      id: 4,
      name: "The Phoenix Project",
      author: 'Gene Kim',
      topic: TOPICS.devops,
    }
  ]
}

const exec = () => {
  const clearBooks = () => {
    const items = document.getElementsByClassName(CLASS_NAMES.item)
    while (items.length > 0) {
      items[0].remove()
    }
  }
  const openPopupAddBook = () => {
    global.overlayAddBook.style.visibility = CSS_PROPS.visible
  }

  const closePopupAddBook = () => {
    global.overlayAddBook.style.visibility = CSS_PROPS.hidden
  }

  const closePopupDelete = (id, name) => {
    global.overlayDeleteBook.style.visibility = CSS_PROPS.hidden
  }
  const openPopupDelete = (id, name) => {
    global.areaDeleteBook.innerHTML = `Do you want to delete <b>${name}</b> book?`
    global.idForDeleteBook = id;
    global.overlayDeleteBook.style.visibility = CSS_PROPS.visible
  }

  const handleCreateBook = (e) => {
    e.preventDefault()
    const formData = new FormData(global.formAddBook);
    const { author, name, topic } = Object.fromEntries(formData)
    bookstore.data.push({
      id: Date.now(),
      author, name, topic
    })
    clearBooks();
    drawTableItems();
    closePopupAddBook();
  }

  const handleDeleteBookData = (id, books) => {
    const index = books.findIndex((book) => book.id === id)
    if (index < -1) return;
    books.splice(index, 1)
  }
  const handleDeleteBook = (id) => {
    handleDeleteBookData(id, bookstore.data)
    clearBooks();
    drawTableItems();
    closePopupDelete();
  }


  const handleSearchBook = (e) => {
    const value = e.target.value;
    const dataClone = cloneObject(bookstore.data)
    const matchIds = dataClone.filter((item) =>
      item.name.includes(value) ||
      item.author.includes(value) ||
      item.topic.includes(value)).map(({ id }) => id)
    if (matchIds.length === 0) {
      clearBooks();
      return;
    }
    const removeIds = dataClone
      .filter(({id}) => !matchIds.includes(id))
      .map(({id}) => id)
    removeIds.forEach((removeId) => handleDeleteBookData(removeId, dataClone))
    clearBooks();
    drawTableItems(dataClone);
  }


  const bootstrap = () => {
    const getMain = () => {
      global.main = document.getElementById(ID_NAMES.main)
    }
    const getContainer = () => {
      global.container = document.getElementById(ID_NAMES.container)
    }
    const getOverlayAddBook = () => {
      global.overlayAddBook = document.getElementById(ID_NAMES.overlayAddBook)
    }

    const getOverlayDeleteBook = () => {
      global.overlayDeleteBook = document.getElementById(ID_NAMES.overlayDeleteBook)
    }

    const getFormAddBook = () => {
      global.formAddBook = document.getElementById(ID_NAMES.formAddBook)
    }

    const getAreaDeleteBook = () => {
      global.areaDeleteBook = document.getElementById(ID_NAMES.areaDeleteBook)
    }

    const addEventAddBook = () => {
      const button = document.getElementById(ID_NAMES.addBook)
      button.addEventListener('click', openPopupAddBook)
    }

    const addEventCloseModalAddBook = () => {
      const button = document.getElementById(ID_NAMES.closeAddBook)
      button.addEventListener('click', closePopupAddBook)
    }
    const addEventCloseModalDeleteBook = () => {
      const button = document.getElementById(ID_NAMES.closeDeleteBook)
      button.addEventListener('click', closePopupDelete)

      const buttonCancel = document.getElementById(ID_NAMES.cancel)
      buttonCancel.addEventListener('click', closePopupDelete)
    }
    const addEventSubmitFormCreateBook = () => {
      global.formAddBook.addEventListener('submit', handleCreateBook)
    }
    const addEventSubmitDeleteBook = () => {
      const buttonDelete = document.getElementById(ID_NAMES.delete)
      buttonDelete.addEventListener('click', () => {
        handleDeleteBook(global.idForDeleteBook)
      })
    }
    const addEventSearchBook = () => {
      const input = document.getElementById(ID_NAMES.searchInput)
      input.addEventListener('keyup', handleSearchBook)
    }


    getMain();
    getContainer();
    getOverlayAddBook();
    getFormAddBook();
    getOverlayDeleteBook();
    getAreaDeleteBook();
    addEventAddBook();
    addEventCloseModalAddBook();
    addEventSubmitFormCreateBook()
    addEventSearchBook();
    addEventCloseModalDeleteBook();
    addEventSubmitDeleteBook()
  }

  const changeBackground = () => {
    global.main.classList.add(CLASS_NAMES.backgroundGray)
  }

  const factoryDraw = (() => {
    const initItemCells = (values, className) => {
      const initDivWithValue = (value) => {
        const div = document.createElement('div')
        div.append(value)
        return div
      }

      const initCell = (value, className) => {
        const first = initDivWithValue(value)
        const classNames = [CLASS_NAMES.itemCell]
        classNames.push(className)
        first.className = classNames.join(' ');
        return first
      }

      const div = document.createElement('div')
      div.className = className
      const classNameMapping = CLASS_NAMES.mappingCellClass;
      values.forEach((value, index) => {
        div.appendChild(initCell(value, classNameMapping[index]))
      })
      return div
    }
    const initHeader = (values) => {
      return initItemCells(values, CLASS_NAMES.header)
    }
    const initRow = (values) => {
      return initItemCells(values, CLASS_NAMES.item)
    }
    return {
      initHeader, initRow
    }
  })()


  const drawTableHeader = () => {
    const { initHeader } = factoryDraw
    const header = initHeader(bookstore.header)
    global.container.appendChild(header)
  }

  const cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj))
  }

  const drawTableItems = (data = bookstore.data) => {
    const { initRow } = factoryDraw

    data.forEach(({ id, author, name, topic }) => {
      const deleteElement = document.createElement('div')
      deleteElement.append('Delete')
      deleteElement.className = CLASS_NAMES.deleteItem
      deleteElement.addEventListener('click', () => openPopupDelete(id, name))
      const item = initRow(Object.values({ name, author, topic, deleteElement }))
      global.container.appendChild(item)
    })
  }

  const registerInvoke = () => {
    changeBackground();
    drawTableHeader()
    drawTableItems();
  }

  const callStack = () => {
    bootstrap();
    registerInvoke();
  }

  callStack()
}
exec();
