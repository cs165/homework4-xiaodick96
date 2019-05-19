// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(musicspace) {
    // TODO(you): Implement the constructor and add fields as necessary.
	this.musicspace=musicspace;
	this.gifboxElement = musicspace.querySelector("#gifbox");
	this.playElement = musicspace.querySelector("#play");
    this.exitElement = musicspace.querySelector("#exit");
    this.audioPlayer = null;
    this.gifDisplay = null;
    this.playButton = new PlayButton(this.playElement);
    this.status = false; //default pause
	
	this._stat = this._stat.bind(this);
	
	document.addEventListener("Status", this._stat);
	
	this._quit();
  }
  // TODO(you): Add methods as necessary.
  load(imgURL, songURL) {
	  this.gifDisplay = new GifDisplay(this.gifboxElement, imgURL);
	  this.audioPlayer = new AudioPlayer();
	  this.audioPlayer.setSong(songURL);
	  this.audioPlayer.setKickCallback( () => {
		document.dispatchEvent(new CustomEvent("Kick"));
	  });	
	  this.playButton.reset();
  }
  _quit(){
	  this.exitElement.addEventListener('click', () => {
		  document.dispatchEvent(new CustomEvent("Exit"));
	  });
  }
  _stat(){
	  if(this.status){
		  this.status = false;
		  this.audioPlayer.pause();
	  }else {
		  this.status = true;
		  this.audioPlayer.play();
	  }
  }
}
