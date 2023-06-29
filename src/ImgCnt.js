import icon1 from "./images/icon1.png"; // Import the image file
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function ImgCnt() {
  return (
    <div>
        <img src={icon1} alt="icon1" />
        <img src={icon2} alt="icon2" />
        <img src={icon3} alt="icon3" />
        <img src={icon4} alt="icon4" />
    </div>
  )
}

export default ImgCnt;