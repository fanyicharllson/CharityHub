import Banner from "./homepage_sections/banner"
import SaveLife from "./homepage_sections/saveLife"
import Card from "./homepage_sections/card"
import PopularCauses from "./homepage_sections/popularcauses"
import Voluntier from "./homepage_sections/Voluntier"
import TestimonialSlider from "./homepage_sections/testimonial"

const Home = () => {
  return (
    <div>
      <Banner/>
      <SaveLife/>
      <Card/>
      <PopularCauses />
      <Voluntier />
      <TestimonialSlider />
    </div>
  )
}

export default Home