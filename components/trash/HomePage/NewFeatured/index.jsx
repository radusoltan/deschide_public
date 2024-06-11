"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';

export const NewFeatured = () => {

  return <div className="bg-white py-6">
    <div className="xl:container mx-auto px-4 sm:px-4 xl:px-2">
      <Splide options={{
        type       : 'slide',
        perPage    : 1,
        perMove    : 1,
        gap        : '1rem',
        breakpoints: {
          768: {
            perPage: 2,
            gap    : '2rem',
          },
        },
      }}>
        <SplideSlide>
          <div style={{ backgroundColor: 'red', height: '200px' }}>Slide 1</div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem' }}>
            <div style={{ backgroundColor: 'blue', height: '100px' }}>Sub-slide 1</div>
            <div style={{ backgroundColor: 'green', height: '100px' }}>Sub-slide 2</div>
            <div style={{ backgroundColor: 'orange', height: '100px' }}>Sub-slide 3</div>
            <div style={{ backgroundColor: 'yellow', height: '100px' }}>Sub-slide 4</div>
          </div>
        </SplideSlide>
        {/* Add more slides as needed */}
      </Splide>
    </div>

  </div>
    }