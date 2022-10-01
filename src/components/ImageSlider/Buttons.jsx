const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <>
      <div className="imageSlider__button">
        <button onClick={() => handlePrev()}>
          <img src="src/assets/icon-previous.svg" alt="previous" />
        </button>
        <button onClick={() => handleNext()}>
          <img src="src/assets/icon-next.svg" alt="next" />
        </button>
      </div>
    </>
  );
};

export default Buttons;
