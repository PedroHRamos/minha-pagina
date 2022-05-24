export class ImageDTO {
    id: number;
    fileName: string;
    backFileName: string;
    frontFileName: string;
    isImageFliped: boolean;
    isCardOutOfGame: boolean;
    ifFlipClass: string;

    constructor(id: number, fileName: string){
        this.id = id;
        this.fileName = 'assets/img/interrogacao.png';
        this.frontFileName = fileName;
        this.isImageFliped = false;
        this.isCardOutOfGame = false;
        this.backFileName = 'assets/img/interrogacao.png';
        this.ifFlipClass = '';
    }

}
