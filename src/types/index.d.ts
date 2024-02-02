type HomePropsData={
  data: Dado
  errorExcecao: Error
}
  
interface Dado {
  name: string
  state: string
  data: Array<Dado>
  temperature: {
    max: string
    min: string
  }
  humidity: {
    max: string
    min: string
  }
  text_icon: {
    text: {
      pt: string
    }
  }
  sun: { sunrise: string; sunset: String; }
  rain: {
    probability: string
  }

  date_br: string
}


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
  valorMediaMax: number
  valorMediaMin: number
}
