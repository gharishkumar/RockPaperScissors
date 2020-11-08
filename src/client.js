var sock;
const writeEvent = (text) => {
  const parent = document.querySelector('#events');
  const el = document.createElement('li');
  el.innerHTML = text;
  parent.appendChild(el);
  parent.scrollTop = parent.scrollHeight;
};

const addButtonListeners = () => {
  ['rock', 'paper', 'scissors'].forEach((id) => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      sock.emit('turn', id);
    });
  });
};

const start = () => {
	writeEvent('Welcome to RockPaperScissors');
	sock = io();
	sock.emit('uname', document.getElementById("myText").value);
	sock.on('message', writeEvent);
	addButtonListeners();
	var center = document.createElement("center");
	document.getElementById("name").innerHTML = document.getElementById("myText").value
	document.getElementById("myText").remove();
	document.getElementById("ok").remove();
};