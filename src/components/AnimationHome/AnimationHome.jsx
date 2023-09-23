import css from './AnimationHome.module.css';
import mitsubishi from '../../images/gifsForHome/mitsubishi.png';
import ferrari from '../../images/gifsForHome/ferrari.png';
import bmw from '../../images/gifsForHome/bmw.png';
import citroen from '../../images/gifsForHome/citroen.png';
import audi from '../../images/gifsForHome/audi.png';
import mercedes from '../../images/gifsForHome/mercedes.png';

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
