
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselr/01r.jpg",
    thumbnail: "carouselr/01r.jpg",
  },
  {
    original: "carouselr/02r.jpg",
    thumbnail: "carouselr/02r.jpg",
  },
  {
    original: "carouselr/03r.jpg",
    thumbnail: "carouselr/03r.jpg",
  },
  {
    original: "carouselr/04r.jpg",
    thumbnail: "carouselr/04r.jpg",
  },
  {
    original: "carouselr/05r.jpg",
    thumbnail: "carouselr/05r.jpg",
  },
  
];

const Content4carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content4carousel
