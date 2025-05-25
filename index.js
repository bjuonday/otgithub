/* title matir */
const originalTitle = document.title;
const newText = document.title;
let index = 0;
function updateTitle() {
  document.title = newText.substring(0, index);
  index++;
  if (index <= newText.length) {
    setTimeout(updateTitle, Math.random() * 200 + 75);
  }
}
updateTitle();