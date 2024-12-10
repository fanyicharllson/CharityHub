import Banner from "./homepage_sections/banner"
import SaveLife from "./homepage_sections/saveLife"
import Card from "./homepage_sections/card"
import PopularCauses from "./homepage_sections/popularcauses"

const Home = () => {
  return (
    <div>
      <Banner/>
      <SaveLife/>
      <Card/>
      <PopularCauses />
    </div>
  )
}

export default Home