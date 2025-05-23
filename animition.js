
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
  aboutText.textContent = ''; // Clear it

  setTimeout(() => {
    typeFromRight(aboutText, aboutContent);
  }, 400); // delay so it comes after features


  const listItems = document.querySelectorAll('#feature-list li');

  listItems.forEach((item, i) => {
    const text = item.textContent;
    item.textContent = ''; // Clear it
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
      }, 40); // typing speed
    }, i * 600); // delay per item
  });
