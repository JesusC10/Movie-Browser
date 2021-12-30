import Hero from "./Hero";

const Home = () => {
    return(
        <>
            <Hero text="Welcome to react 201" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aliquam veniam? Molestiae totam temporibus porro suscipit ducimus laboriosam iusto quo, eligendi eius reiciendis doloremque sapiente maxime ea rem debitis adipisci!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;