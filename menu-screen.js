// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(menuElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menuElement = menuElement;

    const theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const input = document.querySelector('#query-input');


    this.chooseTheme =  theme[this.getRandom(theme.length)];
    input.value = this.chooseTheme;
	this.getRandom();
    
  }

  // TODO(you): Add methods as necessary.
  getRandom(x){
	const index = Math.floor(Math.random() * this.THEME.length);
    this.inputContainer.value = this.THEME[index];
  }
}
