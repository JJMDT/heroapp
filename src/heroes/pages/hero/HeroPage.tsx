import { useParams } from "react-router";

const HeroPage = () => {

  const {idSlug} = useParams();
  console.log({idSlug})
  return <div>HeroesPage</div>;

};

export default HeroPage;
