const h1Style = {
    fontFamily: "'Arial', sans-serif",

};

const pStyle = {
    fontFamily: "'Arial', sans-serif",
    margin: "2em",
    fontSize: "20px"
};

const aStyle = {
    fontFamily: "'Arial', sans-serif",
    fontSize: "20px"
};

const divStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
    marginLeft: "30px"
};

const ThirdSection = () => {
    return(
        <div>
            <a href="" style={aStyle}>CSS - Styling the web</a>
            <p style={pStyle}> CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
        </div>
    )
}


const SecondSection = () => {
    return(
        <div>
            <a href="" style={aStyle}>HTML — Structuring the web</a>
            <p style={pStyle}>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        </div>
    )
}


const FirstSection = () => {
    return(
        <div>
            <a href="" style={aStyle}>Getting started with the web</a>
            <p style={pStyle}>Provides a practical introduction to web development for complete beginners.</p>
        </div>
    )
}

const ReactApp = () => {
    return(
        <div style={divStyle}>
            <h1 style={h1Style}>Topics Covered</h1>
            <p style={{fontSize: "20px", fontFamily: "'Arial', sans-serif"}}>The following is a list of all the topics we cover in the MDN learning area.</p>
            <br />
            <br />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
};

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<ReactApp></ReactApp>);
