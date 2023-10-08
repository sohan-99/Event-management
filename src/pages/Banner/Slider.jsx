

const Slider = () => {
    return (
        <div className="my-3 carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/JdgLgGd/Alekhya-Himanth-Wedding-459.webp" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/gjjFY0T/wedding-planners-singapore-ali-salah-pexels.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/T8wtwd7/140115-41-a-bride-and-groom-exiting-their-wedding-ceremony-as-guests-throw-white-confetti-over-them.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Db3xswZ/Beth-Brad-17-jpg.webp" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Slider;