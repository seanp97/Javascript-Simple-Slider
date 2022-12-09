Simple JS Slider library

HTML needs to be as follows...

Please note 'slider-wrapper class can be named whatever you like'
Same applies to '#prev'and '#next' for the buttons

    <div class="slider-wrapper">

        <div class="slider">
            <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
        </div>

        <div class="button-group">
            <button id="prev">Previous</button>
            <button id="next">Next</button>
        </div>
    </div>


To use please instantiate the JS class in the main js file of your liking.

* let slider = new Slider(".slider-wrapper");    

Please note the argument passed in is the slider parent wrapper. This can be named to your liking.

We then call the two methods for the previous and next.

* slider.Previous('#prev');
* slider.Next('#next');

Again, these can be called something different. Also change reference in HTML.

Make sure to include both the slider.css and slider.js files in your HTML.


Dots are automatically shown, but if you would like to hide call the HideDots() method like slider.HideDots();

This can also be applied to the buttons. Call HideButtons() to hide the buttons like slider.HideButtons();


If you want the slider to automatically slide, call the AutoSlide method
E.G. slider.AutoSlide(3000);

If no argument is set, 5000ms is the default


If you want include text over your image add the slider-text attribute in the HTML like so. The slider-position attribute will place the text in 1 of 5 positions.

    "centered"
    "top-left"
    "top-right"
    "bottom-left"
    "bottom-right"


    <div class="slider-wrapper">
        
        <div class="slider">
            <img slider-text="Hello World" slider-position="top-left" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
            <img slider-text="Hello Two" slider-position="bottom-right" src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            <img slider-text="Hello Three" slider-position="centered" src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
       </div>

        <div class="button-group">
            <button id="prev">Previous</button>
            <button id="next">Next</button>
        </div>

    </div>



If you would like an overlay on your images, call the OverLay() method like slider.OverLay(60) and pass in how much percentage you would like


By default the percentage overlay is 75 if no argument is passed in



* My finished example would be this..

    let slider = new Slider(".slider-wrapper");    
    slider.Previous('#prev');
    slider.Next('#next');
    slider.AutoSlide();
    slider.OverLay(60);


    ------------------


        <div class="slider-wrapper">
            
            <div class="slider">
                <img slider-text="Hello World" slider-position="top-left" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
                <img slider-text="Hello Two" slider-position="bottom-right" src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
                <img slider-text="Hello Three" slider-position="centered" src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
        </div>

            <div class="button-group">
                <button id="prev">Previous</button>
                <button id="next">Next</button>
            </div>

        </div>
