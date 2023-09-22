import css from './QuestionSure.module.css';
import Button from '../Button/Button';

const QuestionSure = ({ textQuestion, setIsModalWindowOpen, handleOk }) => {
  const handleButtonCancel = () => {
    setIsModalWindowOpen(false);
  };
  return (
    <div className={css.questionSure}>
      <p className={css.questionText}>{textQuestion}</p>
      <div className={css.buttonsAnswer}>
        <Button text="Cancel" handleButton={handleButtonCancel} view="cancel" />
        <Button text="OK" handleButton={handleOk} view="ok" />
      </div>
    </div>
  );
};

export default QuestionSure;
