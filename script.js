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
    });
}
