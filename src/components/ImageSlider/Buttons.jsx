import Next from "../../assets/icon-next.svg";
import Prev from "../../assets/icon-previous.svg";

const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <>
      <div className="imageSlider__button">
        <button onClick={() => handlePrev()}>
          <img src={Prev} alt="previous" />
        </button>
        <button onClick={() => handleNext()}>
          <img src={Next} alt="next" />
        </button>
      </div>
    </>
  );
};

export default Buttons;
