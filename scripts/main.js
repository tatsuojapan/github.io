const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpeg'){
        myImage.setAttribute('src','images/test-image2.jpeg')
    } else {
        myImage.setAttribute('src','images/test-image.jpeg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Input your name.');
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }