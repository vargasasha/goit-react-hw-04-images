// import { Component } from 'react';
// import { Button } from './Button/Button';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Searchbar } from './Searchbar/Searchbar';
// import { fetchImages } from './api/fetch';
// import { Spinner } from './Spinner/Spinner';

export class App extends Component {
  // state = {
  //   query: '',
  //   images: [],
  //   page: 1,
  //   loading: false,
  // };

  // changeQuery = newQuery => {
  //   this.setState({
  //     query: `${Date.now()}/${newQuery}`,
  //     images: [],
  //     page: 1,
  //   });
  // };

  // async componentDidUpdate(prevProps, prevState) {
  //   try {
  //     const query = this.state.query.slice(
  //       this.state.query.indexOf('/') + 1,
  //       this.state.query.length
  //     );

  //     if (
  //       prevState.query !== this.state.query ||
  //       prevState.page !== this.state.page
  //     ) {
  //       // this.setState({ loading: true });
  //       const images = await fetchImages(query, this.state.page);
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...images.hits],
  //         loading: false,
  //       }));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     // this.setState({ loading: false });
  //   }
  // }

  // handleLoadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  render() {
    // const { images, loading } = this.state;

    return (
      <>
        {/* <Searchbar changeQuery={this.changeQuery} /> */}

        {loading ? <Spinner /> : <ImageGallery images={images} />}
        {/* <ImageGallery images={images} /> */}
        {/* {images.length > 0 && <Button loadMore={this.handleLoadMore} />} */}
      </>
    );
  }
}
