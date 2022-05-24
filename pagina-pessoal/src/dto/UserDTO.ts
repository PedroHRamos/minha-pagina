export class UserDTO {
    id: number;
    nome: string;
    points: number;

    constructor(id: number, nome: string, points: number){
        this.id = id;
        this.nome = nome;
        this.points = points;
    }
}
