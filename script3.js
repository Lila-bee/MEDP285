const formSketch = (p) => {
  let nameInput, fontSelect, foodRadio;

  p.setup = () => {
    let canvas = p.createCanvas(720, 400);
    canvas.parent('canvas-form'); // Attach this canvas to the specific div

    nameInput = p.createInput();
    nameInput.position(25, 115);
    nameInput.parent('canvas-form');

    foodRadio = p.createRadio();
    foodRadio.position(25, 215);
    foodRadio.option('#F7F5BC', 'Cranberries');
    foodRadio.option('#B8E3FF', 'Almonds');
    foodRadio.option('#C79A9A', 'Gouda');
    foodRadio.parent('canvas-form');

    fontSelect = p.createSelect();
    fontSelect.position(25, 300);
    fontSelect.option('Sans-serif');
    fontSelect.option('Serif');
    fontSelect.option('Cursive');
    fontSelect.changed(fontChanged);
    fontSelect.parent('canvas-form');
  };

  p.draw = () => {
    let backgroundColor = foodRadio.value();
    p.background(backgroundColor);

    p.textSize(25);
    p.text('Welcome to p5.js!', 25, 50);

    p.textSize(20);
    p.text(`What is your name? ${nameInput.value()}`, 25, 100);
    p.text('What is your favorite food?', 25, 200);
  };

  const fontChanged = () => {
    let fontSelection = fontSelect.value();
    p.textFont(fontSelection);
  };
};

new p5(formSketch);
