

const Extra2 = () => {
    return (
        <div className=" mx-4  my-6 lg:flex md:flex flex-row md:space-x-3 justify-between">
            <div className="lg:w-[70%] md:w-[65%]">
                <h2 className="lg:text-3xl text-red-400 font-bold mb-4">Bridely Fun Facts</h2>
                <h1 className="lg:text-4xl font-extrabold mt-4">Explore our 
                wedding Services</h1>
                <p className="lg:text-base font-semibold w-[65%] mt-4 mb-6">Discover our comprehensive wedding services, including venue selection, catering, decor, photography, and more, tailored to create your dream wedding experience.</p>
            </div>
          <div className="lg:w-[30%] md:w-[30%] ">
          <div className="grid grid-cols-1">
                <div className="flex justify-between text-xl font-medium">
                <h2>Professionality</h2>
                <h2>85%</h2>
                </div>
            <progress className="progress progress-success lg:w-80" value="85" max="100"></progress>
            <div className="flex justify-between text-xl font-medium">
                <h2>Food Ordering</h2>
                <h2>70%</h2>
                </div>
            <progress className="progress progress-primary lg:w-80" value="70" max="100"></progress>
            <div className="flex justify-between text-xl font-medium">
                <h2>Experience and Quality</h2>
                <h2>90%</h2>
                </div>
            <progress className="progress progress-info lg:w-80" value="90" max="100"></progress>
            <div className=" flex justify-between text-xl font-medium">
                <h2>Guarantee</h2>
                <h2>80%</h2>
                </div>
            <progress className="progress progress-secondary lg:w-80" value="80" max="100"></progress>
            </div>
          </div>
        </div>
    );
};

export default Extra2;