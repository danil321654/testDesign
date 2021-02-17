import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StaticHeader from './components/StaticHeader';
import Header from './components/Header';
import FeaturesSocial from './components/FeaturesSocial';
import FeaturesDownload from './components/FeaturesDownload';
import Testimonials from './components/Testimonials';
import FeaturesDescribe from './components/FeaturesDescribe';
import MoreTestimonials from './components/MoreTestimonials';
import BottomSquare from './components/BottomSquare';
import Footer from './components/Footer';
import Chat from './components/Chat';
import useWindowDimensions from './helpers/useWindowDimensions';

const classes = {
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '6314px',
    overflowY: "hidden"
  },
  main: {
    marginTop: '70px',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const useStyles = makeStyles(classes);

function App() {
  const dim = useWindowDimensions();
  const style = useStyles();
  return (
    <div className={style.container}>
      <StaticHeader />
      {dim.width>900 &&<Chat />}
      <div className={style.main}>
        <Header />
        <FeaturesSocial />
        <FeaturesDownload />
        <Testimonials />
        <FeaturesDescribe />
        <MoreTestimonials />
        <BottomSquare />
        <Footer />
      </div>
    </div>
  );
}

export default App;
