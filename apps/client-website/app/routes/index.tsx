import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex h-full flex-col gap-4 p-4 md:min-h-full md:flex-row">
      <section className="flex h-fit w-full items-center justify-center md:block md:h-full md:min-w-80 md:max-w-md">
        <div className="h-full w-full bg-ctp-crust p-4 sm:max-w-xl">
          <h2 className="text-xl font-bold">Card</h2>
          <p>Este é o conteúdo do card.</p>
        </div>
      </section>
      <section className="grow md:overflow-y-scroll">
        <h2 className="text-xl font-bold">Conteúdo Aleatório</h2>
        <p>Este é o conteúdo aleatório à direita.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem qui
          unde, possimus debitis id quo eaque, quasi alias dolor aspernatur
          facilis dignissimos harum saepe sint! Explicabo, facilis doloribus
          quam quisquam, ullam officia expedita itaque aspernatur fuga nam non
          libero, quo sequi laudantium deleniti sint repellendus eius
          consequuntur corporis ex adipisci numquam exercitationem facere. Ipsam
          harum soluta consectetur ex possimus atque earum et, unde ad,
          voluptatibus, vero totam provident. Alias deleniti magni repudiandae
          molestiae at iste, consequuntur accusamus, inventore nisi, repellat
          minima qui ratione eveniet aperiam? Dolorum eaque distinctio natus
          impedit ea sed fugiat ut dolorem provident odio mollitia cumque totam
          odit rem itaque corporis nihil, laborum ratione dolor iure sapiente
          est alias? Consectetur maxime placeat porro dolor quae alias sequi
          natus officia. Fugit doloribus voluptatibus voluptatum ab alias nemo
          sunt aut perferendis nesciunt temporibus. Aut nisi eum excepturi
          temporibus eos sunt vitae impedit expedita minus. Molestias eum
          dignissimos voluptatum assumenda fuga! Voluptates veritatis quasi unde
          rerum officia reprehenderit voluptatum et sint ratione itaque eius
          tenetur hic, maxime officiis consectetur laudantium accusamus
          necessitatibus? Quasi nemo exercitationem alias quis saepe expedita ab
          autem, eligendi tempore cum impedit vel aliquid tenetur consequuntur
          natus dignissimos aut! Tempora quas voluptatum obcaecati temporibus id
          autem accusantium incidunt omnis perspiciatis? Eaque aspernatur
          deleniti officia voluptatem ratione in debitis corrupti dicta minima.
          Impedit corporis nulla rerum ut ratione, beatae, repudiandae sed
          consequuntur deleniti ex ipsum perspiciatis recusandae incidunt
          expedita aperiam optio porro? Blanditiis odio voluptates animi odit
          doloremque aspernatur, nisi minus in consequuntur dolor, iure aperiam
          vitae ut incidunt, optio minima aliquid. Earum cupiditate, recusandae
          odio laudantium asperiores magni obcaecati illum aliquam, laborum
          libero officiis sapiente tempore? Dicta nam vitae nemo dolores sint
          soluta voluptatem unde qui. Voluptates natus eligendi dignissimos quae
          dicta neque. Quasi nulla corrupti ullam rerum, veniam quo. Similique,
          consequatur quam? Suscipit perspiciatis rem odit placeat provident.
          Aut error ratione ducimus perferendis labore dolore possimus similique
          unde. Eius earum consectetur nostrum sint tempora optio porro ad
          laudantium, illo nihil nulla consequuntur dicta rem sequi facilis
          dolor autem tenetur magni? Cumque, libero! Ut aspernatur omnis
          dignissimos officiis similique voluptas excepturi, ea quidem sed
          adipisci eligendi nihil, facere eveniet vero ipsum molestias autem
          blanditiis voluptate. Omnis odit laboriosam sapiente sit facere dicta
          iusto ex praesentium neque possimus libero autem, aliquam et eius iure
          consequuntur voluptate ullam. Laboriosam porro optio totam ducimus
          laudantium saepe excepturi doloribus dignissimos aliquam aliquid
          commodi, quis eligendi quidem qui possimus, fugit ad laborum id cum
          provident beatae deserunt? Quo tenetur beatae, debitis quasi numquam
          reprehenderit inventore quae eum deleniti saepe sint magni
          perspiciatis ea soluta enim, amet dolorem assumenda cumque quibusdam
          autem ipsa at est deserunt. Iusto atque aspernatur, blanditiis
          accusamus dignissimos explicabo omnis harum delectus dolorum ipsam
          laboriosam dolore deserunt impedit magni. Dolorum ratione odit ipsum,
          porro tempora, expedita, id voluptates blanditiis quas amet nobis.
          Incidunt quas nemo molestiae illo, perferendis reprehenderit vero
          error reiciendis. Officia iste sit autem laboriosam velit unde
          deleniti dolores ex eveniet est similique quasi quis dolorem quidem
          porro, iure earum blanditiis ipsam dicta cumque labore? Maiores,
          dolores?
        </p>
      </section>
    </main>
  );
}
