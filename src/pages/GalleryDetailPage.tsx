import { useState } from "react";
import { LuX } from "react-icons/lu";
import { useParams } from "react-router-dom";

type EventGalleryMeta = {
  folder: string;
  count: number;
  prefix?: string;
  startIndex?: number;
};

const eventImageMeta: Record<string, EventGalleryMeta> = {
  "patecek-10-1-2025": { folder: "patecek_1", count: 10 },
  "patecek-28-2-2025": { folder: "patecek_2", count: 9 },
  "patecek-16-4-2025": { folder: "patecek_3", count: 81 },
};

function GalleryDetailPage() {
  const { eventName } = useParams();

  const getImages = () => {
    const meta = eventImageMeta[eventName || ""];

    if (!meta) return [];

    const {
      folder,
      count,
      prefix = `/images/${folder}/`,
      startIndex = 1,
    } = meta;

    return Array.from({ length: count }, (_, i) => {
      const index = startIndex + i;
      return `${prefix}${index}.jpg`;
    });
  };

  const images = getImages();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

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
