import Nav from "./../components/Nav";
import "../styles/globals.css";

const componentWrapper = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  maxHeight: '100vh',
  width: '100%',
  overflowY: 'scroll',
  zIndex: 50,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div
        style={componentWrapper}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
