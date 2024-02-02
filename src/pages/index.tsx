'use client'
import Slider from "@/components/CardInformacoes";
import { DivHome, Footer, Header, Main, BotaoFlechaEsquerda, BotaoFlechaDireita } from "@/styles/pageStyle";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home({ data, errorExcecao }: HomePropsData) {
  const carousel = useRef<any>(null)
  const [temperaturaTotalMaxima, setTemperaturaTotalMaxima] = useState(0)
  const [temperaturaTotalMinima, setTemperaturaTotalMinima] = useState(0)

  useEffect(()=>{
    {data?.data?.map((dado: Dado)=>{
      setTemperaturaTotalMaxima(temperaturaTotalMaxima+parseInt(dado.temperature.max));
      setTemperaturaTotalMinima(temperaturaTotalMinima+parseInt(dado.temperature.min));
    })}
  }, [])

  const avancarCarousel = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    let valor = carousel.current.offsetWidth / 3
    carousel.current.scrollLeft += valor
  }

  const retrocederCarousel = (e: any) =>{
    e.preventDefault()
    let valor = carousel.current.offsetWidth / 3
    carousel.current.scrollLeft -= valor
  }
  return (
    <Main>
      <Head>
        <title>Teste Culttivo</title>
        <meta
          name="description"
          content="Teste desenvolvido para Vaga de Front-end da Culttivo"
        />

      </Head>
      {data != undefined?
        <Header>Temperatura para <strong>{data.name} - {data.state}</strong> nos proximos <strong>{data.data.length} dias</strong></Header>:
        <Header>Erro na API ao buscar os Dados, por favor entre em contato</Header>
      }
      <DivHome ref={carousel}>
        {data !== undefined?data?.data?.map((dado: Dado, id: number) => {
          return <Slider 
            key={id}
            data={dado.date_br}
            temperatura={dado.temperature}
            humidade={dado.humidity}
            text={dado.text_icon.text}
            sol={dado.sun}
            chuva={dado.rain}
            valorMediaMax={temperaturaTotalMaxima}
            valorMediaMin={temperaturaTotalMinima}
          >
          </Slider>
        }):
          <div>Houve um erro ao Encontrar os dados: {errorExcecao.message}</div>
        }
      </DivHome>;
      <BotaoFlechaDireita onClick={avancarCarousel}><Image alt="arrow" src={'/arrow.webp'} width={30} height={30}/></BotaoFlechaDireita>
      <BotaoFlechaEsquerda onClick={retrocederCarousel}><Image alt="arrow" src={'/arrow.webp'} width={30} height={30}/></BotaoFlechaEsquerda>
      <Footer></Footer>
    </Main>
  );
}

export const getStaticProps = (async () => {
  try{
    const res = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=${process.env.TOKEN}`)
    const data = await res.json()
    return { props: { data } }
  }
  catch(errorExcecao){
    return {
      props: { errorExcecao }
    }
  }
}) satisfies GetStaticProps

