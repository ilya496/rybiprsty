import { useState } from "react";
import { LuX } from "react-icons/lu";
import { useParams } from "react-router-dom";

const eventImages: Record<string, string[]> = {
  "patecek-10-1-2025": [
    "/images/patecek_1/1.jpg",
    "/images/patecek_1/2.jpg",
    "/images/patecek_1/3.jpg",
    "/images/patecek_1/4.jpg",
    "/images/patecek_1/5.jpg",
    "/images/patecek_1/6.jpg",
    "/images/patecek_1/7.jpg",
    "/images/patecek_1/8.jpg",
    "/images/patecek_1/9.jpg",
    "/images/patecek_1/10.jpg",
  ],
  "patecek-28-2-2025": [
    "/images/patecek_2/1.jpg",
    "/images/patecek_2/2.jpg",
    "/images/patecek_2/3.jpg",
    "/images/patecek_2/4.jpg",
    "/images/patecek_2/5.jpg",
    "/images/patecek_2/6.jpg",
    "/images/patecek_2/7.jpg",
    "/images/patecek_2/8.jpg",
    "/images/patecek_2/9.jpg",
  ],
  "goofy-fotky": [
    "/images/kuba_simon_pivo.jpg",
    "/images/nigga.jpg",
    "/images/viktor_goofy.jpg",
    "/images/skupinova_fotka.jpg",
    "/images/simon_viktor.jpg",
  ],
};

function GalleryDetailPage() {
  const { eventName } = useParams();
  const images = eventImages[eventName || ""] || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Open modal with selected image
  const openModal = (src: string) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="container gallery-detail-container">
      <section className="section">
        <h1 className="gallery-detail-title">{eventName?.replace("-", " ")}</h1>
        <div className="image-grid">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Event ${index + 1}`}
              className="grid-image"
              onClick={() => openModal(src)}
            />
          ))}
        </div>
      </section>
      {isModalOpen && modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full screen" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              <LuX size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryDetailPage;
