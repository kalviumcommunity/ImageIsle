import AboutNav from "./AboutNav";
import "./AboutCSS.css";
import { motion, useScroll } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <AboutNav />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="about-heading">About imageIsle</h1>
      <div className="about-container">
        <p className="about-para">
          <h2 id="about-startmsg">Welcome to imageIsle,</h2>
          <br />
          <span id="about-para1">
            ImageIsle is your go-to source for high-quality stock images
            available for free download. Our platform is designed to serve
            designers, bloggers, marketers, and anyone in need of stunning
            visuals to enhance their projects. At ImageIsle, we believe that
            beautiful images should be accessible to everyone, which is why we
            offer a vast collection of images at no cost.
          </span>
          <br />
          <br />
          <ul>
            <li>
              <span className="sub-head" id="sub-head1">
                Our Features Vast Collection:
              </span>{" "}
              Dive into thousands of stock images spanning various categories
              such as nature, technology, business, and more.
            </li>
            <li>
              <span className="sub-head" id="sub-head2">
                Free Downloads:
              </span>{" "}
              Enjoy unrestricted access to download and use our images for both
              personal and commercial projects without any cost.
            </li>
            <li>
              <span className="sub-head" id="sub-head3">
                High Quality:
              </span>{" "}
              <span>
                Every image on ImageIsle is carefully selected and curated to
                ensure high resolution and exceptional visual appeal.
              </span>
            </li>
            <li>
              <span className="sub-head" id="sub-head4">
                Search Functionality:
              </span>{" "}
              Find the perfect image effortlessly with our intuitive and
              efficient search feature.
            </li>
            <li>
              <span className="sub-head" id="sub-head5">
                User-friendly Interface:
              </span>{" "}
              Navigate our website with ease, thanks to its simple and
              user-friendly design.
            </li>
            <li>
              <span className="sub-head" id="sub-head6">
                Regular Updates:
              </span>{" "}
              Stay up-to-date with our constantly growing collection, as we
              regularly add new images to keep our library fresh and relevant.
            </li>
          </ul>
          <br />
          <span id="about-para2">
            Our Mission At ImageIsle, our mission is to provide a seamless
            experience for users to access high-quality images that inspire and
            elevate their creative projects. We are committed to continually
            expanding our collection and enhancing our platform to meet the
            evolving needs of our community. Explore ImageIsle today and
            discover the perfect images for your next project!
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
