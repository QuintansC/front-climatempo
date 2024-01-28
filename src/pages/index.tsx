'use client'
import Slider from "@/components/CardInformacoes";
import { DivHome, Footer, Header, Main } from "@/styles/pageStyle";
import { GetServerSideProps } from "next";

export default function Home({ data }: any) {
  return (
    <Main>
      <Header>Temperatura para <strong>São paulo</strong> nos proximos <strong>7 dias</strong></Header>
      <DivHome>

        {data?.data?.map((dado: any)=>{
          console.log(dado)

          return <Slider 
            data={dado.date_br}
            temperatura={dado.temperature}
            humidade={dado.humidity}
            text={dado.text_icon.text}
            sol={dado.sun}
            chuva={dado.rain}
          ></Slider>
        })}
      </DivHome>
      <Footer></Footer>
    </Main>
  );
}

export const getServerSideProps = (async () => {
  const res = await await fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=${process.env.TOKEN}`)
  const data = await res.json()
  return { props: { data } }
}) satisfies GetServerSideProps

