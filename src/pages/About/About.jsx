import Navber from "../Share/Navber/Navber";

const About = () => {
    return (
        <div>
            <Navber></Navber>
            <h1 className="text-6xl font-bold text-center">About <span className="text-red-600">Us !</span> </h1>
            <div className="hero min-h-screen my-6 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h2 className="text-lg font-bold text-red-400">
                            Who We Are
                        </h2>
                        <p className="text-green-600 text-5xl font-semibold mb-6">
                            Planner for Your <br />
                            Perfect Wedding
                        </p>
                        <p className="lg:text-xl text-left md:text-base text-xs font-medium">
                            Vision & Budget, Timeline, Venue, Guest List,Wedding Party,<br />
                            Date & Save the Date, Vendors,Attire, Décor & Theme, <br />
                            Ceremony & Reception, Entertainment,  Invitations, <br />Registry,
                            Transportation & Accommodation, Hair & Makeup, <br /> Rehearsal Dinner,
                            Marriage License, Wedding Day Timeline,<br />Final Details,  Emergency Kit,
                            Relax & Enjoy.
                        </p>
                        <div className="stats stats-vertical mt-36 lg:stats-horizontal shadow">
                            <div className="stat">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div className="stat-value">1565+</div>
                                <div className="stat-title">Happy Couples</div>
                            </div>
                            <div className="stat">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                <div className="stat-value">1200+</div>
                                <div className="stat-title">Weddings</div>
                            </div>
                            <div className="stat">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                <div className="stat-value">1879+</div>
                                <div className="stat-title">Decoration</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px]">
                        <img className="lg:w-[450px] w-[300px] md:w-[750px] lg:h-[450]" src="https://i.ibb.co/m8FxyMM/817a781feaafd6ea2ba6d896f186c087.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;