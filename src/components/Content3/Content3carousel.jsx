
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselp/01p.jpg",
    thumbnail: "carouselp/01p.jpg",
  },
  {
    original: "carouselp/02p.jpg",
    thumbnail: "carouselp/02p.jpg",
  },
  {
    original: "carouselp/03p.jpg",
    thumbnail: "carouselp/03p.jpg",
  },
  {
    original: "carouselp/04p.jpg",
    thumbnail: "carouselp/04p.jpg",
  },
  {
    original: "carouselp/05p.jpg",
    thumbnail: "carouselp/05p.jpg",
  },
  {
    original: "carouselp/06p.jpg",
    thumbnail: "carouselp/06p.jpg",
  },
  {
    original: "carouselp/07p.jpg",
    thumbnail: "carouselp/07p.jpg",
  },
  
];



const Content3carousel = () => {
    return (
     <>
     <ImageGallery items={images} />
     </>
    )
  }
  
  export default Content3carousel
  

