import React, { useState, useEffect } from 'react';

interface ImageItem {
    id: number;
    url: string;
    width: number;
    height: number;
    loaded: boolean;
}

interface HorizontalMasonryGridProps {
    images: string[];
}

const HorizontalMasonryGrid: React.FC<HorizontalMasonryGridProps> = ({ images: imageSrcs }) => {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    // load images on startup/when images change
    useEffect(() => {
        loadImages();
    }, [imageSrcs]);

    const loadImages = async () => {
        try {
            setLoading(true);
            setError('');

            const loadedImages: ImageItem[] = [];

            for (let i = 0; i < imageSrcs.length; i++) {
                try {
                    const imgSrc = imageSrcs[i];

                    // Load image to get dimensions
                    const img = new Image();
                    await new Promise<void>((resolve, reject) => {
                        img.onload = () => resolve();
                        img.onerror = () => reject(new Error(`Failed to load image: ${imgSrc}`));
                        img.src = imgSrc;
                    });

                    // add image with given width and height
                    loadedImages.push({
                        id: i + 1,
                        url: imgSrc,
                        width: img.width,
                        height: img.height,
                        loaded: true,
                    });
                } catch (err) {
                    console.warn(`Failed to load image ${i}:`, err);
                }
            }

            if (loadedImages.length === 0) {
                setError('No images could be loaded.');
            } else {
                setImages(loadedImages);
            }

            setLoading(false);
        } catch (err) {
            setError('Error loading images: ' + (err as Error).message);
            setLoading(false);
        }
    };

    const rows = 3;
    const rowHeight = 250;
    const gap = 16;






    return (
        <div className="w-full h-screen bg-gray-900 overflow-auto p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Horizontal Masonry Grid</h1>
                <p className="text-gray-400">{images.length} images loaded from project directory</p>
            </div>

            <div className="flex gap-2 flex-wrap justify-between">
                {images.map((img, idx) => (
                    <div
                        key={img.id}
                        className="flex-1 min-w-[200px] max-w-[400px] transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer group"
                    >
                        <img
                            src={img.url}
                            alt={`Image ${img.id}`}
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalMasonryGrid;