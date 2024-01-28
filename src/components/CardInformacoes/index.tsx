'use client'
import { CaixaTemp, Descricao, DiaSemana, DivColor, DivContainer, DivGrid1, ImageGrid, ItemDeInformacao, TitleDate } from './Style';

interface CardInformacoesProps{
    data: string
    temperatura: {
        min: string
        max: string
    }
    humidade: {
        min: string
        max: string
    }
    text:{
        pt: string
    }
    sol:{
        sunrise: string
        sunset: String
    }
    chuva: {
        probability: string
    }
    
}

const pegarDiaSemana = (data: any) => {
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var arr = data.split("/").reverse();
    var teste = new Date(arr[0], arr[1] - 1, arr[2]);
    var dia = teste.getDay();

    return semana[dia];
}

const CardInformacoes = (props: CardInformacoesProps) => {

    console.log(props)
    return (
        <DivContainer>
            <DivGrid1>
                <ImageGrid alt='' width={0} height={0} src={'/sol.png'}/>
                <TitleDate>{props.data}</TitleDate>
                <DiaSemana>{pegarDiaSemana(props.data)}</DiaSemana>       
                <Descricao> {props.text.pt}</Descricao>
            </DivGrid1>

            <div>
                <ItemDeInformacao>
                    <strong>Temperatura: </strong>
                    <CaixaTemp color={'0,0,230, 0.3'}>{props.temperatura.min}</CaixaTemp>
                    <CaixaTemp color={'230,0,0, 0.3'}>{props.temperatura.max}</CaixaTemp>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Umidade: </strong>
                    <CaixaTemp color={'0,0,230, 0.3'}>{props.humidade.min}</CaixaTemp>
                    <CaixaTemp color={'230,0,0, 0.3'}>{props.humidade.max}</CaixaTemp>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Sol: </strong>
                    <CaixaTemp color={'255,100,0, 0.3'}>{`${props.sol.sunrise} - ${props.sol.sunset}`}</CaixaTemp>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Chuva: </strong>
                    <CaixaTemp color={'10,10,10, 0.2'}>{props.chuva.probability}%</CaixaTemp>
                </ItemDeInformacao>                
            </div>

            <DivColor color={'250,10,10, 0.4'}> Sol e aumento de nuvens. Pancadas de chuva à tarde. À noite, muitas nuvens, mas sem chuva</DivColor>
        </DivContainer>
    )
}

export default CardInformacoes;