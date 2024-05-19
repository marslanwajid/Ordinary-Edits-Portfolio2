
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselw/01w.jpg",
    thumbnail: "carouselw/01w.jpg",
  },
  {
    original: "carouselw/02w.jpg",
    thumbnail: "carouselw/02w.jpg",
  },
  {
    original: "carouselw/03w.jpg",
    thumbnail: "carouselw/03w.jpg",
  },
  {
    original: "carouselw/04w.jpg",
    thumbnail: "carouselw/04w.jpg",
  },
  {
    original: "carouselw/05w.jpg",
    thumbnail: "carouselw/05w.jpg",
  },
  {
    original: "carouselw/06w.jpg",
    thumbnail: "carouselw/06w.jpg",
  },
  {
    original: "carouselw/07w.jpg",
    thumbnail: "carouselw/07w.jpg",
  },
  {
    original: "carouselw/08w.jpg",
    thumbnail: "carouselw/08w.jpg",
  },
  {
    original: "carouselw/01.jpg",
    thumbnail: "carouselw/01.jpg",
  },
];

const Content2carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content2carousel

