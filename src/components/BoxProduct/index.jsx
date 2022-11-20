import { ContainerProduct } from "./style";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { ButtonBuy } from "../ButtonBuy";

export function BoxProduct({ item }) {
  return (
    <ContainerProduct key={item.name}>
      <img src={item.img} />
      <h6> {item.name} </h6>
      <p>{item.description}</p>
      <span> {item.Price} </span>

      <div className="product-buy">
        <div className="product-button">
          <button>
            <AiOutlineMinus size={20} />
          </button>
          <span>01</span>
          <button>
            <AiOutlinePlus size={20} />
          </button>
        </div>
        <ButtonBuy />
      </div>
    </ContainerProduct>
  );
}
