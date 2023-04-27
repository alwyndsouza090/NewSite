import React from 'react';
import "./Testimony.css"

const TestimonialCarousel = () => {

    const testimonials = [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo mauris vel metus ultricies, a luctus odio dignissim. Donec tincidunt fringilla orci, sed euismod nisi commodo in.',
          author: 'John Doe',
        },
        {
          content: 'Duis dignissim sapien sit amet augue aliquet malesuada. Curabitur blandit arcu sapien, ut commodo turpis congue nec. Praesent fringilla lectus vitae odio commodo, vel dignissim augue pharetra.',
          author: 'Jane Smith',
        },
        {
          content: 'Phasellus sit amet blandit elit. Maecenas sit amet magna bibendum, lobortis justo ac, dapibus metus. Duis malesuada interdum nibh, vel eleifend augue convallis ut. Sed euismod euismod lorem, vitae bibendum odio facilisis a.',
          author: 'Mike Johnson',
        },
      ];


  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerId);
  }, [currentIndex, testimonials.length]);

  return (
    <div className='my-5'>

    <h3 className='text-center'>TESTIMONY</h3>
    <div className="container testimonial-carousel">
      <div className="testimonial-carousel__slide">
        <div className="testimonial-carousel__content">{testimonials[currentIndex].content}</div>
        <div className="testimonial-carousel__author">{testimonials[currentIndex].author}</div>
      </div>
      <div className="testimonial-carousel__buttons">
        <button className="testimonial-carousel__button" onClick={handlePrevClick}>
   prev
        </button>
        <button className="testimonial-carousel__button" onClick={handleNextClick}>
       next
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
