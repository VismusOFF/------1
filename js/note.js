const input = document.getElementById('noteTitle')
const textArea = document.getElementById('noteContent')
const btn = document.getElementById('btnSave')
const list = document.getElementById('list')

btn.onclick = () => {
  console.log(input.value)
  console.log(textArea.value)
  console.log('test')
}

const notes = []

function renderPosts () {
  list.innerHTML = ''
  if (notes.length === 0) {
    list.innerHTML = '<p class="text-push">Нет заметок</p>'
  }
  for(let i = 0; i < notes.length; i++) {
    list.insertAdjacentHTML('beforeend', returnTextContent(notes[i], i))
  }
}

renderPosts ()

btn.onclick = () => {
  if (input.value.length !== 0) {
    const newNote = {
      title: input.value,
      text: textArea.value,
      status: false,
    }
    notes.push(newNote)
    renderPosts(notes)
    input.value = ''
    textArea.value = ''
  }
}

list.onclick = function (event)  {
  if (event.target.dataset.index) {
    const index = +event.target.dataset.index
    const type = event.target.dataset.type

    if ( type === 'toggle' ) {
      notes[index].status = !notes[index].status
    } else if (type === 'remove') {
      notes.splice(index, 1)
    }
    renderPosts ()
  }
}


function returnTextContent (note, index) {
  return`<li class="li-list" id="li-list">
    <span class="name-li" data-index="${index}">${note.title}</span>
    <div class="block-li">
      <span class="text-li${note.status ? '-active' : ''}" >${note.text}</span>
            <div class="block-btn">
              <button class="btn-li-status${note.status ? '-active' : ''}" data-index="${index}" data-type="toggle" ></button>
              <button class="btn-li-delete" data-index="${index}" data-type="remove"></button>
            </div>
          </div>
        </li>`
}