const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const behaviour_questions = [
  'People look up to me',
  'I tend to be a kind person',
  'I accept life as it comes',
  'People say I have a strong personality'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...behaviour_questions]
    .map(a => ({value:a, sort: Math.random() }))
    .sort((a,b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((question, index) => {
      const listItem = document.createElement('li');

      // listItem.classList.add('over'); 

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="question-name">${question}</p>
          <i class="fa fa-magnet"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);

      addEventListeners();
    });
}
function dragStart(e) {
  // console.log('Event: ', 'dragStart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  // dragStartIndex = +this.getAttribute('data-index');
  console.log(dragStartIndex);
  let target = EventUtil.getCurrentTarget(e);
  target.style.cursor = 'drag';
  return true;
}

function dragEnter() {
  // console.log('Event: ', 'dragEnter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragLeave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragOver');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'dragsDrop');
  const dragEndIndex = +this.getAttribute('data-index');
  console.log("end: ",dragEndIndex);
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}


function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  })

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  })
}
