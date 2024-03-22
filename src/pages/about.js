import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";

function AboutPage() {
  return (
    <div>
      <DefaultLayout>
        <div className="max-w-[800px] text-mainco">
          <h1 className="text-3xl uppercase py-5">About Us</h1>
          <p className="text-sm py-3 pr-5">
            Welcome to our website dedicated to showcasing the remarkable
            contributions of some of history's most influential scientists.
            Here, we celebrate the intellect, creativity, and dedication of
            individuals who have shaped the course of human knowledge and
            understanding.
          </p>
          <p className="py-3 pr-5">
            Our platform serves as a tribute to the visionaries, innovators, and
            pioneers who have left an indelible mark on various fields of
            science, from physics and mathematics to biology and astronomy.
            Through concise yet comprehensive profiles, we offer insights into
            the lives and accomplishments of these eminent figures, allowing
            visitors to appreciate their enduring legacy.
          </p>
          <p className="py-3 pr-5">
            From luminaries like Albert Einstein and Marie Curie to lesser-known
            but equally significant contributors such as Subrahmanyan
            Chandrasekhar and Emmy Noether, our curated selection spans
            centuries and continents, reflecting the diverse tapestry of
            scientific endeavor.
          </p>
          <p className="py-3 pr-5">
            Whether you're a student seeking inspiration, an enthusiast eager to
            delve into the annals of scientific history, or simply someone with
            a curiosity about the world and the people who have shaped it, our
            website invites you on a journey of discovery and enlightenment.
          </p>
          <p className="py-3 pr-5">
            Join us as we pay homage to the brilliance of the human mind and the
            quest for understanding that drives scientific exploration. Explore,
            learn, and be inspired by the remarkable lives of the scientists who
            have transformed our understanding of the universe and our place
            within it.
          </p>
          <p className="py-3 pr-5">
            Discover the stories behind the discoveries, the struggles behind
            the successes, and the enduring legacy of those who dared to push
            the boundaries of knowledge. Welcome to our tribute to the giants of
            science..
          </p>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default AboutPage;
