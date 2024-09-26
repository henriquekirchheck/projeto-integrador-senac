/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createFileRoute } from "@tanstack/react-router";
import pizzaDoSobre from "~/assets/images/pizza_do_sobre.jpg";

export const Route = createFileRoute("/sobre")({
  component: About,
});

function About() {
  return (
    <div className="flex p-4">
      <div className="relative my-auto hidden w-1/2 lg:block lg:w-1/3">
        <h2 className="absolute z-10 w-full p-4 font-script text-4xl font-bold md:w-1/2 lg:w-1/3">
          Pizzas de Qualidades desde 1983
        </h2>
        <img
          className="h-auto w-full -scale-x-100 rounded"
          src={pizzaDoSobre}
          alt="imagem_de_uma_pizza"
        />
      </div>
      <div className="w-full p-4">
        <h1 className="text-center font-script text-3xl font-semibold">
          Sobre nós
        </h1>
        <p className="text-justify text-base md:text-lg lg:text-xl">
          Bem-vindo à Placeholder Inc., onde a paixão pela pizza se encontra com
          a criatividade! Fundada por um grupo de amigos que compartilham o amor
          pela boa comida e momentos especiais, nossa pizzaria é mais do que um
          simples lugar para comer: é um espaço acolhedor onde histórias são
          contadas e memórias são feitas. Aqui, cada pizza é feita com
          ingredientes frescos e de alta qualidade, escolhidos a dedo para
          garantir sabores incríveis. Nossas receitas exclusivas combinam
          tradições clássicas com toques contemporâneos, oferecendo opções que
          agradam a todos os paladares — desde os amantes das pizzas
          tradicionais até os mais aventureiros. Além das pizzas, você
          encontrará um ambiente amigável e descontraído, perfeito para reunir
          amigos e familiares. Nossa equipe está sempre pronta para atender com
          um sorriso, tornando sua experiência ainda mais especial. Na
          Placeholder Inc., acreditamos que cada fatia deve ser uma celebração.
          Venha nos visitar e descubra porque somos a escolha certa para suas
          refeições!
        </p>
      </div>
    </div>
  );
}
