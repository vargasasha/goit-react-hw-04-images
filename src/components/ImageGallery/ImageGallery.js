import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from "../../css/styles.module.css"

export const ImageGallery = ({ images }) => {

  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          <ImageGalleryItem
            url={image.webformatURL}
            modalUrl={image.largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
};
