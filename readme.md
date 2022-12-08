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

* slider.PrevBtn('#prev');
* slider.NextBtn('#next');

Again, these can be called something different. Also change reference in HTML.
