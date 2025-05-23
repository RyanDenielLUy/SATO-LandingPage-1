function typeFromRight(element, text, speed = 50) {
  let index = text.length - 1;
  const type = setInterval(() => {
    if (index >= 0) {
      element.textContent = text.slice(index);
      index--;
    } else {
      clearInterval(type);
    }
  }, speed);
}

const aboutText = document.getElementById('ttl');
const aboutContent = aboutText.textContent;
aboutText.textContent = '';

setTimeout(() => {
  typeFromRight(aboutText, aboutContent);
}, 400);

// Add typing animation for a list (if you have one with ID #feature-list)
const listItems = document.querySelectorAll('#feature-list li');
listItems.forEach((item, i) => {
  const text = item.textContent;
  item.textContent = '';
  item.style.whiteSpace = 'nowrap';
  setTimeout(() => {
    let index = 0;
    const type = setInterval(() => {
      if (index < text.length) {
        item.textContent += text[index];
        index++;
      } else {
        clearInterval(type);
      }
    }, 30);
  }, i * 300);
});
