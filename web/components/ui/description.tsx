import { DescriptionProps } from "@/types/props";

const Description = async () => {
  const descriptionsData: DescriptionProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/descriptions`,
  ).then((res) => res.json());

  console.log(descriptionsData);

  return (
    <>
      <h1>Description</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        reiciendis voluptatum blanditiis. Temporibus laborum cupiditate
        repudiandae, alias voluptatibus fuga voluptas quis vitae expedita soluta
        culpa rem sit sint aut consectetur.
      </p>
    </>
  );
};

export { Description };
