/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createFileRoute } from "@tanstack/react-router";
import pizzaDoSobre from "~/assets/images/pizza_do_sobre.jpg";

export const Route = createFileRoute("/sobre")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-wrap">
      <div className="relative my-auto w-1/2 lg:w-1/3">
        <h2 className="absolute z-10 w-full p-4 font-script text-4xl font-bold md:w-1/2 lg:w-1/3">
          Pizzas de Qualidades desde 1983
        </h2>
        <img
          className="w-full h-auto -scale-x-100 "
          src={pizzaDoSobre}
          alt="imagem_de_uma_pizza"
        />
      </div>
      <div className="w-full p-4 md:w-1/2 lg:w-1/3">
        <h1 className="text-center font-script text-3xl font-semibold">
          Sobre nós
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          veritatis deleniti expedita, ipsa repudiandae qui deserunt officia
          neque, rerum necessitatibus quia non maxime voluptatum, quibusdam odio
          error veniam amet tenetur.
        </p>
      </div>
    </div>
  );
}
