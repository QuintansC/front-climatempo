'use client'
import Image from 'next/image';
import { CaixaTemp, CaixaTempCustom, Descricao, DiaSemana, DivColor, DivContainer, DivGrid1, ImageGrid, ItemDeInformacao, TituloData } from './Style';

const pegarDiaSemana = (data: string) => {
    var DiasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var SplitDaData = data.split("/").reverse();
    var DataFiltrada = new Date(parseInt(SplitDaData[0]), parseInt(SplitDaData[1]) - 1, parseInt(SplitDaData[2]));
    var dia = DataFiltrada.getDay();
    return DiasDaSemana[dia];
}

const CardInformacoes = (props: CardInformacoesProps) => {
    return (
        <DivContainer>
            <DivGrid1>
                <ImageGrid alt='' width={0} height={0} src={'/sol.png'}/>
                <TituloData>{props.data}</TituloData>
                <DiaSemana>{pegarDiaSemana(props.data)}</DiaSemana>       
                <Descricao> {props.text.pt}</Descricao>
            </DivGrid1>

            <div>
                <ItemDeInformacao>
                    <strong>Temperatura: </strong>
                    <CaixaTemp color={'0,0,230, 0.3'}>{props.temperatura.min}°</CaixaTemp>
                    <CaixaTemp color={'230,0,0, 0.3'}>{props.temperatura.max}°</CaixaTemp>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Umidade: </strong>
                    <CaixaTempCustom color={'83, 160, 250, 0.6'}>{`${props.humidade.min}% - ${props.humidade.max}`}</CaixaTempCustom>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Sol: </strong>
                    <CaixaTempCustom color={'255,100,0, 0.3'}>{`${props.sol.sunrise} - ${props.sol.sunset}`}</CaixaTempCustom>
                </ItemDeInformacao>
                <ItemDeInformacao>
                    <strong>Chuva: </strong>
                    <CaixaTempCustom color={'10,10,10, 0.2'}>{props.chuva.probability}%</CaixaTempCustom>
                </ItemDeInformacao>                
            </div>


            {props.valorMediaMax < parseInt(props.temperatura.max)? 
                <DivColor color={'250,10,10, 0.4'}> <Image alt='' src={'/warning.png'} width={25} height={25}/>Temperatura maxima deste dia será maior do que a média maxima deste periodo</DivColor>:
                props.valorMediaMin > parseInt(props.temperatura.min)? 
                    <DivColor color={'10,10,255, 0.4'}> <Image alt='' src={'/attencion.png'} width={25} height={25}/> Temperatura minima deste dia será menor do que a média minima deste periodo</DivColor>:
                    <></>
            }
        </DivContainer>
    )
}

export default CardInformacoes;