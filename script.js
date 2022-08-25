const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const behaviour_questions = [
  'People look up to me',
  'I tend to be a kind person',
  'I accept life as it comes',
  'People say I have a strong personality',
  'I find it difficult to relax',
  'I have a very wide circle of friends',
  'I am always ready to help others',
  'I like to behave correctly',
  'I tend to do what I am told',
  'I like things to be very neat and tidy',
  'People cant put me down',
  'I enjoy having fun',
  'I respect my elders and those in authority',
  'I am always willing to do new things - to take a risk',
  'I believe things will go well',
  'I am always willing to help'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...behaviour_questions]
    .forEach((question, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class=question-name">${question}</p>
          <i class="fa fa-magnet"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
