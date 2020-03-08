
export const Carousel = () => {
    return (
    <div class="css-carousel">
     
        <input type="radio" name="carousel" id="carousel-1" checked />
        <input type="radio" name="carousel" id="carousel-2" />
        <input type="radio" name="carousel" id="carousel-3" />
     
        <div class="carousel-nav">
            <label for="carousel-1"></label>
            <label for="carousel-2"></label>
            <label for="carousel-3"></label>
        </div>
     
        <div class="carousel-slides">
            <div class="carousel-inner">
                <div class="carousel-item">Slide 1</div>
                <div class="carousel-item">Slide 2</div>
                <div class="carousel-item">Slide 3</div>
            </div>
        </div>
     
    </div>)
}