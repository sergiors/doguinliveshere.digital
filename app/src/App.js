import "App.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import Doguin from "pics/doguin.jpeg";

const Placeholder = () => (
  <div className="bg-gray-100 rounded-xl w-64 h-96"></div>
);

const App = () => {
  return (
    <>
      <Helmet>
        <title>Doguin lives here</title>
      </Helmet>
      <section className="container space-y-4 py-4">
        <h1 className="text-3xl">Doguin lives here</h1>
        <p>Hi, I'm Sérgio, lives in Curitiba, Brazil. Doguin is my dog.</p>

        <LazyLoad placeholder={<Placeholder />} throttle={200} height={340}>
          <img
            src={Doguin}
            className="rounded-xl w-64"
            alt="Ladies and gentlemen, Doguin"
          />
        </LazyLoad>

        <ul className="flex gap-4">
          <li>
            <a href="//github.com/sergiors">Github</a>
          </li>
          <li>
            <a href="//twitter.com/osergiosiqueira">Twitter</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default App;
