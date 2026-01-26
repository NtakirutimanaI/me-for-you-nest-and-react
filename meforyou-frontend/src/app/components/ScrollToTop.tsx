import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btn-scroll-top shadow-lg wow zoomIn"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </button>
            )}

            <style>{`
        .btn-scroll-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: #FE5D37;
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .btn-scroll-top:hover {
          background-color: #103741;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(254, 93, 55, 0.4);
        }

        @media (max-width: 768px) {
          .btn-scroll-top {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
        </>
    );
}
