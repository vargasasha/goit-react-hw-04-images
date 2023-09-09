import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api/fetch';
// import { Spinner } from './Spinner/Spinner';
import { useState, useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') return;

    async function getImages() {
      try {
        const slicedQuery = query.slice(query.indexOf('/') + 1, query.length);

        const response = await fetchImages(slicedQuery, page);

        setImages(prevState => [...prevState, ...response.hits]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getImages();
  }, [query, page]);



  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar changeQuery={changeQuery} />
      <ImageGallery images={images} />
      {images.length > 0 && <Button loadMore={handleLoadMore} />}
    </>
  );
};
