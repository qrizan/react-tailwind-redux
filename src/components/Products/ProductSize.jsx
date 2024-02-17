const ProductSize = (props) => {
  const { sizeValue, setSizeValue } = props;
  const productSize = ["S", "M", "X", "XL"];
  const sizeData = productSize?.map((item) => ({
    id: `input_${item}`,
    value: item,
  }));

  const changeSize = (e) => {
    const nodes = e.target.parentElement.parentElement.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].lastChild.firstChild.classList.remove("show_border");
    }
    e.target.nextSibling.firstChild.classList.toggle("show_border");
    return setSizeValue(e.target.value);
  };

  return (
    <fieldset>
      <div className="grid grid-cols-4 gap-4">
        {sizeData?.map(({ id, value }) => (
            <div className="-mt-2" key={id}>
                <input
                    id={id}
                    className="invisible radio_custom"
                    type="radio"
                    value={value}
                    checked={sizeValue == { sizeValue }}
                    onChange={changeSize}
                />
                <label htmlFor={id} className="radio_custom_label">
                <div
                    className={`border border-gray-300 py-3 text-center cursor-pointer "}`}
                >
                    {value}
                </div>
                </label>
            </div>
        ))}
      </div>
    </fieldset>
  );
};

export default ProductSize;
