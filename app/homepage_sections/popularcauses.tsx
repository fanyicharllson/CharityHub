import CauseCard from "@/components/CauseCard";
import Cause1img from "@/public/assets/images/cause1.avif"
import Cause2img from "@/public/assets/images/cause2.avif"
import Cause3img from "@/public/assets/images/cause3.avif"
import Cause4img from "@/public/assets/images/cause5.avif"

const PopularCauses = () => {
  const causes = [
    {
      title: 'Build School for the less Previlage',
      description:
        'Help us construct a school in a remote village, providing education  to children in need.',
      image: Cause2img,
      goal: 50000,
      raised: 32000,
    },
    {
      title: 'Provide Food for the Hungry',
      description:
        'Provide nutritious meals to families struggling with food insecurity in your community.',
      image: Cause1img,
      goal: 30000,
      raised: 18000,
    },
    {
      title: 'Provide Clean Water Access',
      description:
        'Help us bring clean and safe drinking water to remote communities around the world.',
      image: Cause3img,
      goal: 20000,
      raised: 15000,
    },
    {
      title: 'Support Disaster Relief Efforts',
      description:
        'Join us in providing immediate aid and support to those affected by natural disasters.',
      image: Cause4img,
      goal: 40000,
      raised: 25000,
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center gap-2 text-center pb-4">
        <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
      <h4 className="text-teal-500 font-bold">Latest Causes</h4>
      </div>
      <h2 className="h2-title text-center">Find the popular cause <br></br> and donate them</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Discover some of the impactful causes we are supporting. Join us to make a difference.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {causes.map((cause, index) => (
          <CauseCard key={index} title={cause.title} description={cause.description} image={cause.image.src} goal={cause.goal} raised={cause.raised} />
        ))}
      </div>
    </section>
  );
}; 

export default PopularCauses;
