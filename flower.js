

const flowerInput = document.getElementById('flowerInput');
const flowerList = document.getElementById('flowerList');

flowerInput.addEventListener('input', function() {

  const flowerName = flowerInput.value.trim();
  if (flowerName !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = flowerName;
    flowerList.appendChild(listItem);
    flowerInput.value = ''; // Clear the input field after adding
  }
});
