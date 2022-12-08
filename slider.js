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

        this.mainImage = document.querySelector(`${this._wrapper} > img`);
        this.mainImage.classList.add('slider-main-image');
        this.mainImage.style.minWidth = '1px';
        this.mainImage.style.minHeight = '1px';
    }

    PrevBtn(el) {
        this._el = el;
        document.querySelector(`.button-group ${this._el}`).addEventListener('click', () => {
            this.sliderInit--;
            if(this.sliderInit === 0) {
                this.sliderInit = this.allImages.length;
            }

            this.currentImage = document.querySelector(`.slide-image-${this.sliderInit}`).src;
            document.querySelector(`${this._wrapper} > img`).src = this.currentImage;
        })
    }

    NextBtn(el) {
        this._el = el;
        document.querySelector(`.button-group ${this._el}`).addEventListener('click', () => {
            this.sliderInit++;
            if(this.sliderInit > this.allImages.length) {
                this.sliderInit = 1;
            }

            this.currentImage = document.querySelector(`.slide-image-${this.sliderInit}`).src;
            document.querySelector(`${this._wrapper} > img`).src = this.currentImage;
        })
    }

    DotSlider() {
        this._allDots = document.querySelectorAll('.dots .dot');

        this._allDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {

                this._allDots.forEach((notThis) => {
                    notThis.classList.remove('dot-active');
                });
                dot.classList.add('dot-active');

                this.getImageSrc = document.querySelector(`.slider img:nth-of-type(${index + 1})`).src;
                document.querySelector(`${this._wrapper} > img`).src = this.getImageSrc;
            });
        });
    }

    Dots() {
        this._dots = document.querySelector(`${this._wrapper} .dots`);

        if(this._dots) {            
            for(let i = 0; i < this.allImages.length; i++) {
                this._dots.innerHTML += `<span class="dot dot-${i + 1}"></span>`;
            }
        }
        document.querySelector('.dots .dot:first-of-type').classList.add('dot-active');
        this.DotSlider();
    }

}
