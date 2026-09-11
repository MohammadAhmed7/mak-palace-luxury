import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Props = {
  images: string[];
  index: number | null;
  alt: string;
  onClose: () => void;
};

export function ImageLightbox({ images, index, alt, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, onClose]);

  if (!mounted || index === null) return null;

  return createPortal(
    <div className="fixed inset-0 z-[120] flex flex-col bg-background/95 backdrop-blur-sm">
      <TransformWrapper
        key={index}
        initialScale={1}
        minScale={1}
        maxScale={6}
        doubleClick={{ mode: "toggle", step: 1.6 }}
        wheel={{ step: 0.12 }}
        pinch={{ step: 5 }}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{alt}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() => zoomOut()}
                  className="border border-border p-2 text-gold transition-colors hover:bg-card"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => zoomIn()}
                  className="border border-border p-2 text-gold transition-colors hover:bg-card"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Reset zoom"
                  onClick={() => resetTransform()}
                  className="border border-border p-2 text-gold transition-colors hover:bg-card"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="border border-border p-2 text-foreground transition-colors hover:bg-card"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 touch-none">
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{ width: "100%", height: "100%" }}
              >
                <div className="flex h-full w-full items-center justify-center p-4">
                  <img
                    src={images[index]}
                    alt={alt}
                    className="max-h-full max-w-full select-none object-contain"
                    draggable={false}
                  />
                </div>
              </TransformComponent>
            </div>

            <p className="border-t border-border px-5 py-3 text-center text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Scroll, pinch or double-tap to zoom — drag to pan
            </p>
          </>
        )}
      </TransformWrapper>
    </div>,
    document.body,
  );
}
