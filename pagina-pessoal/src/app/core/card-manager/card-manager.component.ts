import { Component, OnInit } from '@angular/core';
import { ImageDTO } from 'src/dto/ImageDTO';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css']
})
export class CardManagerComponent implements OnInit {

  numberOfCards: number;
  images: Array<ImageDTO>;
  imageNames: Array<string>;
  image: ImageDTO;
  numberOfRows: number;
  matchesCount: number;
  cardsActivesCount: number;
  pointsUserDRAFT: number;
  imagePath: string;
  isGameOn: boolean;

  constructor() {

    this.imageNames = ['amongus.png', 'dev_descomplicado.jpg', 'diamante.png', 'js.png'];
    this.images = new Array<ImageDTO>();
    this.image = new ImageDTO(1, 'a');
    this.numberOfRows = 2;
    this.matchesCount = 0;
    this.cardsActivesCount = 0;
    this.pointsUserDRAFT = 0;
    this.imagePath = '/assets/img/';
    this.isGameOn = true;


    this.numberOfCards = 4;
    for ( let i = 0; i < this.numberOfCards * 2; i++){
      this.image = new ImageDTO(i, this.imagePath + this.imageNames[this.imageNames.length - 1]);
      this.images.push(this.image);
      i++;
      this.image = new ImageDTO(i, this.imagePath + this.imageNames[this.imageNames.length - 1]);
      this.images.push(this.image);
      this.imageNames.pop();
    }

    this.images = this.shuffleArray(this.images);

  }

  ngOnInit(): void {
    
  }

  async trataClick( imagem: ImageDTO ): Promise<void>{
    if ( this.isGameOn ){

      this.flip( imagem );
      this.cardsActivesCount++;
      let hasMatch = false;
      const imageclicked = 'Imagem Clicada: \n\t id: ' + imagem.id + '\n\t FrontFile: '
      + imagem.frontFileName + '\n\t FileName: ' + imagem.fileName + '\n\t OutOfGame: ' + imagem.isCardOutOfGame
      + '\n\t isImageFliped: ' + imagem.isImageFliped;

      if ( this.cardsActivesCount === 2 ){

        await this.resolveAfterSecond(10).then( value => {});
        hasMatch = this.cardMatchVerifier();
        this.cardsActivesCount = 0;

        if ( hasMatch ){
          // Change this function in the future to set points to the user that matched the cards and animate it
          alert('Acertô mizeravi');
          this.pointsUserDRAFT++;
          this.unFlipAllCards();
        } else {
          alert('Errou');
          this.unFlipAllCards();
        }
      }
    }
    this.isEndOfGame();
  }

  cardMatchVerifier(): boolean{
    let imageFlipedCount = 0;
    let positionImageAux = 0;

    for ( let i = 0; i < this.images.length ; i++ ){
      if ( this.images[i].isImageFliped ){
        if ( imageFlipedCount === 0 ){
          positionImageAux = i;
          imageFlipedCount++;
        }else{
          imageFlipedCount++;
          if ( this.images[positionImageAux].frontFileName === this.images[i].frontFileName ){
            this.images[i].isCardOutOfGame = true;
            this.images[positionImageAux].isCardOutOfGame = true;
            imageFlipedCount = 0;
            return true;
          }
        }
      }
    }
    imageFlipedCount = 0;
    return false;
  }

  isEndOfGame(): void{

    let cardsOutOfGame = 0;

    for ( let i = 0; i < this.images.length ; i++ ){
      if ( this.images[i].isCardOutOfGame ){
        cardsOutOfGame++;
      }
    }

    if ( cardsOutOfGame === this.images.length ){
      this.isGameOn = false;
      alert('Você ganhou!');
    }

  }

  flip( imagem: ImageDTO ): void{
    if ( this.cardsActivesCount < 2 ){
      if ( !imagem.isImageFliped ){
        imagem.fileName = imagem.frontFileName;
        imagem.isImageFliped = true;
        imagem.ifFlipClass = 'flip';
      }
    }
  }

  unFlipAllCards(): void{
    for ( let i = 0; i < this.images.length ; i++ ){
      if ( this.images[i].isImageFliped ){
        this.images[i].fileName = this.images[i].backFileName;
        this.images[i].isImageFliped = false;
        this.images[i].ifFlipClass = '';
      }
    }
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  async resolveAfterSecond(x: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 500);
    });
  }

/*
  SINGLE PLAYER
    * Basics OK.

  MULTIPLAYER
    *All the steps above
    *We need to create a way to separate the core informations from the client informations
        *It seems like the logic of that prototype of gartic that I try a long time ago
          *Socket.io
            *npm install express socket.io
    *We need to create the rooms rules
    *We need to create the rounds
    *A player try to match the cards and if he fail the other player can try
        *If a player match the cards so he got a point and can play again
    *We need to create a mecanism to do all users see what other users are doing in rounds
        *The core coordennate everything, the beggining of a round, who has to play and show this gameplay to every player on this room
        *Control the rounds, if the user mathc 2 cards or not, if the user play again, who plays next, the end of the game, etc.

    *I think the best way to segregate the responsibility is
      *Making a card-manager that will returnn a canvas(view) to the socket
      *Thhe socket will be responsable to define the rooms, add/remove players

*/


}
