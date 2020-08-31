export class Coracao {
    
    // True = Coracao cheio False == Coracao vazio

    coracao: boolean;
    urLCoracaoCheio: string =  "../../assets/coracao_cheio.png";
    urLCoracaoVazio: string =  "../../assets/coracao_vazio.png";
    constructor(coracao:boolean){
        this.coracao = coracao;
    }

    exibiCoracao() : string {
        if(this.coracao){
            return this.urLCoracaoCheio;
        }else{
            return this.urLCoracaoVazio;
        }
    }
}