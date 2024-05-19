import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselpd/01pd.png",
    thumbnail: "carouselpd/01pd.png",
  },
  {
    original: "carouselpd/02pd.png",
    thumbnail: "carouselpd/02pd.png",
  },
  {
    original: "carouselpd/03pd.png",
    thumbnail: "carouselpd/03pd.png",
  },
  {
    original: "carouselpd/04pd.jpg",
    thumbnail: "carouselpd/04pd.jpg",
  },
  {
    original: "carouselpd/05pd.png",
    thumbnail: "carouselpd/05pd.png",
  },
  {
    original: "carouselpd/06pd.jpg",
    thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original: "carouselpd/07pd.jpg",
    thumbnail: "carouselpd/07pd.jpg",
  },
  {
    original: "carouselpd/08pd.jpg",
    thumbnail: "carouselpd/08pd.jpg",
  },
  {
    original: "carouselpd/09pd.png",
    thumbnail: "carouselpd/09pd.png",
  },
  {
    original: "carouselpd/10pd.jpg",
    thumbnail: "carouselpd/10pd.jpg",
  },
  
];


const Content5carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content5carousel
