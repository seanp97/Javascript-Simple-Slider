class Slider {

    constructor(wrapper) {
        this._wrapper = wrapper;
        this.el = document.querySelector(this._wrapper);
        this.sliderInit = 1;
        this.allImages = document.querySelectorAll('.slider img');

        this.allImages.forEach((image, index) => {
            if(index != this.sliderInit - 1) {
                this.initImage = document.querySelector('.slider img:first-of-type').src;
                document.querySelector(`${this._wrapper} > img`).src = this.initImage;
            }
        
            this.sliderIndex = index + 1;
            image.classList.add(`slide-image-${this.sliderIndex}`)
        });

        document.querySelector('.slider img:first-of-type').classList.add('active-slider');

        console.log('Initialized');
    }

    PrevBtn(el) {
        this._el = el;
        document.querySelector(this._el).addEventListener('click', () => {
            this.sliderInit--;
            if(this.sliderInit === 0) {
                this.sliderInit = this.allImages.length;
            }

            this.sliderAll = document.querySelectorAll('.slider img');
            this.sliderAll.forEach((img) => {
                img.classList.remove('active-slider');
            });
            document.querySelector(`.slide-image-${this.sliderInit}`).classList.add('active-slider');

            this.currentImage = document.querySelector(`.slide-image-${this.sliderInit}`).src;
            document.querySelector(`${this._wrapper} > img`).src = this.currentImage;
        })
    }

    NextBtn(el) {
        this._el = el;
        document.querySelector('#next').addEventListener('click', () => {
            this.sliderInit++;
            if(this.sliderInit > this.allImages.length) {
                this.sliderInit = 1;
            }

            this.sliderAll = document.querySelectorAll('.slider img');
            this.sliderAll.forEach((img) => {
                img.classList.remove('active-slider');
            });
            document.querySelector(`.slide-image-${this.sliderInit}`).classList.add('active-slider');

            this.currentImage = document.querySelector(`.slide-image-${this.sliderInit}`).src;
            document.querySelector(`${this._wrapper} > img`).src = this.currentImage;
        })
    }

}
