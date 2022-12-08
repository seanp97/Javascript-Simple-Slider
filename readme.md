Simple JS Slider library

HTML needs to be as follows...

    <div class="slider-wrapper">
        <img src="" />

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



DOTS

- If you would like to include dots on your page please add dots below button-group div like so. Also call slider.Dots(); in your main js file.

        <div class="button-group">
            <button id="prev">Previous</button>
            <button id="next">Next</button>
        </div>

        <div class="dots"></div>



If you want the slider to automatically slide, call the AutoSlide method
E.G. slider.AutoSlide(3000);

If no argument is set, 5000ms is the default



* My finished example would be this..

    let slider = new Slider(".slider-wrapper");    
    slider.Previous('#prev');
    slider.Next('#next');
    slider.Dots();


    ------------------


        <div class="slider-wrapper">
            <img src="" />

            <div class="slider">
                <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
                <img src="https://cdn.pixabay.com/photo/2022/11/24/15/18/car-7614510_960_720.jpg" />
                <img src="https://cdn.pixabay.com/photo/2022/11/27/18/01/flower-7620426_960_720.jpg" />
            </div>

            <div class="button-group">
                <button id="prev">Previous</button>
                <button id="next">Next</button>
            </div>

            <div class="dots"></div>

        </div>
