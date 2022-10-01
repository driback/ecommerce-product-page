const Images = ({ source, alt, pos, clas, id }) => {
  return (
    <div className={clas} style={{ translate: `${pos * -100}%` }}>
      <img src={source} alt={alt} id={id} />
    </div>
  );
};

export default Images;
