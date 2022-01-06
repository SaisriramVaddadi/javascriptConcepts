

function ConsistentDog() {
      this.favoriteWord = "Woof!";
       
      this.bark = function() {
           console.log('this in Consistent dog',this);
        return this.favoriteWord;
      }
}
  
//   let conDog = new ConsistentDog();
//   console.log(conDog);
//   let conBark = conDog.bark;
// console.log(conBark()); // => "Woof!"


// // window.music = 'classical';
// // window.getMusic = function(){
// // 	return this.music;
// // };
 
// var Foo = function(){
// 	this.music = "jazz";
// 	this.getMusic = function(){
//         // console.log('this in Foo  ',this)
// 		return this.music;
// 	}
// }
 
// var bar = new Foo();

// let music = bar.getMusic;

// let bindMusic = music.bind(bar);
// // console.log(this.getMusic()); // 'classical' (global)
// console.log(bindMusic()); // 'jazz' (property of bar, which is an instance of Foo)


