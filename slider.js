class Slider {

    constructor(wrapper, timeout = 5000) {
        this._wrapper = wrapper;
        this.el = document.querySelector(this._wrapper);
        this.sliderInit = 1;
        this.allImages = document.querySelectorAll('.slider img');
        this.el.style.position = 'relative';
        this._timeout = timeout;
        this.SetInterval = 0;

        this._mainImageElement = document.createElement('img');
        document.querySelector(`${this._wrapper}`).insertBefore(this._mainImageElement, this.el.firstChild);
        document.querySelector('.button-group').outerHTML += '<div class="dots"></div>';

        this.initImage = document.querySelector('.slider img:first-of-type').src;
        document.querySelector(`${this._wrapper} > img`).src = this.initImage;

        this._initText = document.querySelector('.slider img:first-of-type').getAttribute('slider-text');
        this._initPos = document.querySelector('.slider img:first-of-type').getAttribute('slider-position');

        if(this._initText) {
            if(this._initPos) {
                document.querySelector(`${this._wrapper} > img`).outerHTML += `<div class="slider-text ${this._initPos}">${this._initText}</div>`;
            }
            else {
                document.querySelector(`${this._wrapper} > img`).outerHTML += `<div class="slider-text centered">${this._initText}</div>`;
            }
            
        }
        else {
            document.querySelector(`${this._wrapper} > img`).outerHTML += `<div class="slider-text centered"></div>`;
        }

        this.mainImage = document.querySelector(`${this._wrapper} > img`);
        this.mainImage.classList.add('slider-main-image');
        this.mainImage.style.minWidth = '1px';
        this.mainImage.style.minHeight = '1px';

        document.querySelector(`${this._wrapper} > img`).style.width = 'inherit';
        document.querySelector(`${this._wrapper} > img`).style.height = 'inherit';

        this.AutoSlide(this._timeout);
        this.Dots();
    }

    SliderCommon() {
        if(this.DotExists()) {  
            this._allDots = document.querySelectorAll('.dots .dot');

            this._allDots.forEach((dot) => {
                dot.classList.remove('dot-active');
            });

            document.querySelector(`.dots .dot:nth-of-type(${this.sliderInit})`).classList.add('dot-active');
        }

        this.currentImage = document.querySelector(`.slider img:nth-of-type(${this.sliderInit})`).src;
        document.querySelector(`${this._wrapper} > img`).src = this.currentImage;

        this._sliderText = document.querySelector(`.slider img:nth-of-type(${this.sliderInit})`).getAttribute('slider-text');
        this._sliderPos = document.querySelector(`.slider img:nth-of-type(${this.sliderInit})`).getAttribute('slider-position');
        if(this._sliderText) {
            document.querySelector(`.slider-text`).innerText = this._sliderText;

            if(this._sliderPos) {
                document.querySelector(`.slider-text`).setAttribute('class', `slider-text ${this._sliderPos}`);
            }
            else {
                document.querySelector(`.slider-text`).setAttribute('class', `slider-text centered`);
            }
        }
        else {
            document.querySelector(`.slider-text`).innerText = '';
        }

    }

    ButtonInlineSlider() {
        document.querySelector('.button-group').classList.add('inline-slider');
    }

    ObjectFit() {
        document.querySelector(`${this._wrapper} > img`).style.objectFit = 'cover';
    }

    Previous(el) {
        this._elPrev = el;
        document.querySelector(`${this._elPrev}`).style.cursor = 'pointer';
        document.querySelector(`.button-group ${this._elPrev}`).addEventListener('click', () => {
            this.sliderInit--;
            if(this.sliderInit === 0) {
                this.sliderInit = this.allImages.length;
            }

            clearInterval(this.SetInterval);
            this.SliderCommon();
            this.AutoSlide();
        })
    }

    OverLay(brightness = 75) {
        this._brightness = brightness;
        if(this._brightness <= 100) {
            document.querySelector('.slider-main-image').style.filter = `brightness(0.${this._brightness})`;
        }
        
    }

    Next(el) {
        this._elNext = el;
        document.querySelector(`${this._elNext}`).style.cursor = 'pointer';
        document.querySelector(`.button-group ${this._elNext}`).addEventListener('click', () => {
            this.sliderInit++;
            if(this.sliderInit > this.allImages.length) {
                this.sliderInit = 1;
            }

            clearInterval(this.SetInterval);
            this.SliderCommon(); 
            this.AutoSlide();
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
                this.sliderInit = index + 1;

                this.getImageSrc = document.querySelector(`.slider img:nth-of-type(${index + 1})`).src;
                document.querySelector(`${this._wrapper} > img`).src = this.getImageSrc;
                clearInterval(this.SetInterval);
                this.AutoSlide();
            });
        });
    }

    Dots() {
        if(this.DotExists()) {            
            for(let i = 0; i < this.allImages.length; i++) {
                this._dots.innerHTML += `<span class="dot"></span>`;
            }
        }
        document.querySelector('.dots .dot:first-of-type').classList.add('dot-active');
        this.DotSlider();
    }

    DotExists() {
        this._dots = document.querySelector(`${this._wrapper} .dots`);
        if(this._dots) return true;
        return false;
    }

    AutoSlide() {
        this.SetInterval = setInterval(() => {
            this.sliderInit++;
            if(this.sliderInit > this.allImages.length) {
                this.sliderInit = 1;
            }

            this.SliderCommon();
        }, this._timeout);
    }

    HideDots() {
        document.querySelector('.dots').style.display = 'none';
    }

    HideButtons() {
        document.querySelector('.button-group').style.display = 'none';
    }

    SliderInit() {
        return this.sliderInit;
    }

    DotsCenter() {
        document.querySelector('.dots').style.textAlign = 'center';
    }

}
