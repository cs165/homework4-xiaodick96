// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);
    
    const musicElement = document.querySelector('#music');
    this.mscreen = new MusicScreen();
    this.getGif = this.mscreen.gif.getGifs.bind(this);

    this.musicDisplay = this.mscreen.musicDisplay.bind(this);
    this.onSubmit();

  
  }
  onSubmit(){
    let musicDisplay = this.musicDisplay;
    let getGif = this.getGif;
    const form = document.querySelector('form');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      musicDisplay();
      const input = document.querySelector('#query-input');
      console.log(input.value);
      const selected = document.querySelector('#song-selector');
      console.log(selected.value);
      getGif(selected.value);
    });
  }
  // TODO(you): Add methods as necessary.
}
 