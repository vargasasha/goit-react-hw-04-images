import { Component } from 'react';
import Modal from 'react-modal';
import styles from '../../css/styles.module.css';

const customStyles = {
  content: {
    width: '768px',
    height: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { url, modalUrl } = this.props;

    return (
      <>
        <img
          src={url}
          alt=""
          className={styles.ImageGalleryItemImage}
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          overlayClassName="Overlay"
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <img src={modalUrl} alt="" />
        </Modal>
      </>
    );
  }
}
