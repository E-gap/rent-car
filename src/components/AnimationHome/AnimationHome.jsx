import css from './AnimationHome.module.css';
import mitsubishi from '../../images/gifsForHome/mitsubishi-static.png';
import ferrari from '../../images/gifsForHome/ferrari-static.png';
import bmw from '../../images/gifsForHome/bmw-static.png';
import citroen from '../../images/gifsForHome/citroen-static.png';
import audi from '../../images/gifsForHome/audi-static.png';
import mercedes from '../../images/gifsForHome/mercedes-static.png';

const AnimationHome = () => {
  return (
    <div className={css.animation}>
      <img
        src={mitsubishi}
        alt="qwerty"
        className={`${css.png_static} ${css.mitsubishi}`}
      />
      <img
        src={citroen}
        alt="qwerty"
        className={`${css.png_static} ${css.citroen}`}
      />
      <img
        src={ferrari}
        alt="qwerty"
        className={`${css.png_static} ${css.ferrari}`}
      />
      <img src={bmw} alt="qwerty" className={`${css.png_static} ${css.bmw}`} />
      <img
        src={audi}
        alt="qwerty"
        className={`${css.png_static} ${css.audi}`}
      />
      <img
        src={mercedes}
        alt="qwerty"
        className={`${css.png_static} ${css.mercedes}`}
      />
    </div>
  );
};

export default AnimationHome;
