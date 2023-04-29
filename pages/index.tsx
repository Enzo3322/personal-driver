/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Menu from '@/components/Menu'
import Testimonial from '@/components/Testimonial'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regina - Motorista Particular</title>
        <meta name="description" content="Regina motorista particular" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={`${styles.main}`}>
        <section className={styles.hero}>
          <div className={styles.textContainer}>
            <h1>Levo você aonde e quando precisar, com  qualidade.</h1>
            <p>Motorista particular de Idosos, Crianças, Pets e Entregas em geral!</p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={styles.title}>Viagens em Santos com preço Fixo</h2>
              <p className={styles.condition}>*Viagens somente em Santos</p>
              <p className={styles.condition}>*Pagamento somente em dinheiro</p>
              <p className={styles.subtitle}>Valor da corrida</p>
              <h3 className={styles.price}>R$30,00</h3>
              <button className={styles.buttonPrimary}>AGENDAR VIAGEM!</button>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.cardContainer}>
            <img src="./regina.jfif" alt="Regina e Mascote do Patrulha canina" />
            <div className={styles.textContainer}>
              <h2>Regina</h2>
              <p>
                Sou uma motorista particular experiente e confiável, especializada em transportar crianças,
                idosos, animais de estimação e mercadorias com segurança e eficiência. Com minha atenção aos
                detalhes e comprometimento com o serviço excepcional, você pode contar comigo para garantir
                uma viagem tranquila e confortável
              </p>
              <button className={styles.buttonPrimary}>AGENDAR VIAGEM!</button>
            </div>
          </div>
        </section>
        <section className={styles.testimonials}>
          <Swiper pagination={{
            dynamicBullets: true,
          }}
            style={{ maxWidth: '1120px' }}
            slidesPerView={3}

            modules={[Pagination]}>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name='Roberta' comment='Muito profissional!, levou meu PET para uma cirurgia e foi super simpatica e carinhosa.' />
            </SwiperSlide>

          </Swiper>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}
