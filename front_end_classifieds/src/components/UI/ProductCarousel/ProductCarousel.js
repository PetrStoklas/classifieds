import React, { Component } from 'react';
// import storage from '../../../../../classifieds/public/uploads/products';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.pexels.com/photos/305223/pexels-photo-305223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.pexels.com/photos/305223/pexels-photo-305223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.pexels.com/photos/305223/pexels-photo-305223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];


class ProductCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        activeIndex: 0,
        images: this.props.images,
        items: {
          altText: ['slide 1', 'slide 2', 'slide 3'],
          caption: ['slide 1', 'slide 2', 'slide 3'],
        }
      };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
      // this.images = this.props.images;
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      // console.log('carousel images-----', this.state.images);
      const { activeIndex } = this.state;
  
      const slides = this.state.images.map((image) => {
        
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={image['id']}
            interval={false}
          >
          <img className="w-100" src={"http://127.0.0.1:8000/uploads/products/"+image['filename']} alt={image['original_filename']} />
          {/*          artisan has to run -> paht using its the artisan project path           */}
          </CarouselItem>
        );
      });
  
      
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }

}

export default ProductCarousel;