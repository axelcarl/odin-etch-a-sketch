const boardSize = 1000;
const genBtn = document.querySelector('#generate');

function generateBoard() {
  genBtn.textContent = 'Clear Board';
  genBtn.removeEventListener('click', generateBoard);
  genBtn.addEventListener('click', clearBoard);
  
  let gridSize = parseInt(prompt('Enter a value between 1 and 100'));
  if (gridSize < 1 || gridSize > 100)
    gridSize = 100;
  let pixelSize = boardSize / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = 'black';
    })
    if (i % gridSize == 0)
      pixel.style.className = 'new-row'
    document.querySelector('.board').append(pixel);
  }
}

function clearBoard() {
  genBtn.textContent = 'Generate Board';
  document.querySelector('.board').innerHTML = '';
  genBtn.removeEventListener('click', clearBoard);
  genBtn.addEventListener('click', generateBoard);
}

genBtn.addEventListener('click', generateBoard)
