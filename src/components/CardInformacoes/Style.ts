import styled from "@emotion/styled";
import Image from "next/image";

const DivContainer = styled.div`
  border-radius: 20px;;
  min-width: 300px;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;

  margin-right: 15px;

  &:last-child{
    margin: 0;
  }
`

const DivGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(2, 0) ;
  grid-template-rows: repeat(3, 1fr) 0;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 180px;
`
const ImageGrid = styled(Image)`
  grid-area: 1 / 1 / 3 / 2;
  width: 64px;
  height: 64px;
  margin: auto;
`

const TituloData = styled.strong`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: end;
`

const DiaSemana = styled.span`
  grid-area: 2 / 2 / 3 / 3; 
  display: flex;
  align-items: start;
`

const Descricao = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  word-break: normal;
  background-color: rgb(230, 230, 230);
  padding: 10px;
  font-size: 13px;
  color: rgb(100, 100, 100);
  border-radius: 10px;
`

const CaixaTemp = styled.p`
  color: rgba(${(props) => props.color});
  background-color: rgba(${(props) => props.color});
  padding: 5px;
  border-left: 5px solid;
  height: 25px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const CaixaTempCustom = styled.p`
  color: rgba(${(props) => props.color});
  background-color: rgba(${(props) => props.color});
  padding: 5px;
  border-left: 5px solid;
  height: 25px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 50% !important;
  text-align: center;
`

const ItemDeInformacao = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  strong{
    width: 50%;
  }

  p{
    margin-left: auto;
    margin-right: 0px;
    width: 21%;
    margin-left: 5px;
  }
    
`

const DivColor = styled.div`
  word-break: normal;
  background-color: rgba(${(props) => props.color});
  padding: 10px;
  font-size: 13px;
  color: rgba(${(props) => props.color});
  border-radius: 10px;
  border-left: 10px solid rgba(${(props) => props.color});
  font-size: 0.7em;
  display: flex;
  align-items: center;
  img{
    margin-right: 10px;
    ${(props) => {
      if(props.color == '10,10,255, 0.4'){
        return 'filter: brightness(0) saturate(100%) invert(45%) sepia(33%) saturate(3210%) hue-rotate(195deg) brightness(94%) contrast(90%);'
      }
      else{
        return 'filter: brightness(0) saturate(100%) invert(64%) sepia(50%) saturate(3402%) hue-rotate(320deg) brightness(99%) contrast(99%);'
      }
    }}
  }
`

export {
  DivContainer,
  DivGrid1,
  ImageGrid,
  TituloData,
  DiaSemana,
  Descricao,
  CaixaTemp,
  ItemDeInformacao,
  DivColor,
  CaixaTempCustom
}