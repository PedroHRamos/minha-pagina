export class RoomDTO {
    id: number;
    isBusy: boolean;

    constructor(id: number, isBusy: boolean){
        this.id = id;
        this.isBusy = isBusy;
    }
}
