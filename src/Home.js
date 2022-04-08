import React from "react";
import "./Home.css";
import banner from "./banner.jpg";
import Product from "./Product";
import { auth } from "./firebase";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImage" src={banner} alt="banner" />
        <div className="Category"><h2>Men's Half Sleeve T-Shirts</h2></div>
        <div className="homeRow">
          <Product
            id="1"
            image="https://images.bewakoof.com/t320/monday-scooby-half-sleeve-t-shirt-men-s-printed-t-shirts-391486-1629712255.jpg"
            title="Wander Geometry Half Sleeve T-Shirt"
            price={299}
          />
          <Product
            id="2"
            image="https://images.bewakoof.com/t320/gyaan-half-sleeve-t-shirt-black-men-s-printed-t-shirts-310957-1621917950.jpg"
            title="Gyaan Half Sleeve T-Shirt"
            price={249}
          />
          <Product
            id="3"
            image="https://images.bewakoof.com/t320/freedom-feather-half-sleeve-t-shirt-black-men-s-printed-t-shirts-340007-1614941266.jpg"
            title="Freedom Feather Half Sleeve T-Shirt "
            price={399}
          />
        </div>
        <div className="homeRow">
          <Product
            id="4"
            image="https://images.bewakoof.com/t320/chili-pepper-melange-half-sleeve-contrast-pocket-hoodie-t-shirt-men-s-plain-half-sleeve-melange-contrast-pocket-hoodie-t-shirt-351514-1628573155.jpg"
            title="Chili Pepper Melange Contrast Pocket Hoodie T-shirt"
            price={499}
          />
          <Product
            id="5"
            image="https://images.bewakoof.com/t320/pop-hope-half-sleeve-t-shirt-black-men-s-printed-t-shirts-300994-1606020676.jpg"
            title="Pop Hope Half Sleeve T-Shirt "
            price={349}
          />
           <Product
            id="6"
            image="https://images.bewakoof.com/t540/busy-doing-nothing-half-sleeve-t-shirt-287587-1637937192-1.jpg"
            title="Busy Doing Nothing Half Sleeve T-Shirt"
            price={499}
          />
          </div>
          <div className="homeRow">
          <Product
            id="7"
            image="https://images.bewakoof.com/t320/dark-shadow-men-s-street-wear-relaxed-fit-t-shirt-387810-1635929467-1.jpg"
            title="Dark Shadow Relaxed Fit T-Shirt"
            price={499}
          />
          <Product
            id="8"
            image="https://images.bewakoof.com/t320/bold-red-half-sleeve-t-shirt-69875-1638165764-1.jpg"
            title="Bold Red Half Sleeve T-Shirt "
            price={349}
          />
          <Product
            id="9"
            image="https://images.bewakoof.com/t540/popcorn-yellow-tie-dye-t-shirt-379203-1635869611-1.jpg"
            title="Popcorn Yellow Tie & Dye T-Shirt "
            price={749}
          />
          </div>
          <div className="Category"><h2>Men's Shorts</h2></div>
          <div className="homeRow">
          <Product
            id="10"
            image="https://images.bewakoof.com/t320/jet-black-men-s-fashion-collabs-aop-shorts-337789-1634704522-1.jpg "
            title="Jet Black Men's Fashion Collabs AOP Shorts"
            price={649}
          />
          <Product
            id="11"
            image="https://images.bewakoof.com/t540/india-ink-raw-hem-shorts-330909-1637855491-1.jpg"
            title="India Ink Raw Hem Shorts "
            price={749}
          />
          <Product
            id="12"
            image="https://images.bewakoof.com/t320/brown-plain-shorts-men-s-plain-cotton-casual-shorts-293199-1607432135.jpg"
            title="Burnt Brown Mens Shorts "
            price={749}
          />
          </div>
          <div className="homeRow">
          <Product
            id="13"
            image="https://images.bewakoof.com/t540/plain-329130-1637147710-1.jpg"
            title="Blue Colorblock Shorts "
            price={749}
          />
          <Product
            id="14"
            image="https://images.bewakoof.com/t540/dazzling-blue-men-s-solid-one-side-printed-strip-shorts-337769-1635400386-1.jpg"
            title="Dazzling Blue Men's Solid One Side Printed Strip Shorts"
            price={749}
          />
          <Product
            id="15"
            image="https://images.bewakoof.com/t540/navy-blue-casual-short-men-s-plain-casual-short-pc-330320-1620797203.jpg"
            title="Navy Blue Casual Shorts"
            price={749}
          />
          </div>
          <div className="homeRow">
          <Product
            id="16"
            image="https://images.bewakoof.com/t320/dark-maroon-casual-short-330309-1638211793-1.jpg"
            title="Dark Maroon Casual Short "
            price={749}
          />
          <Product
            id="17"
            image="https://images.bewakoof.com/t540/quiet-grey-men-s-fashion-collabs-aop-shorts-337788-1637147412-1.jpg"
            title="Quiet Grey Men's Fashion Collabs AOP Shorts"
            price={749}
          />
          <Product
            id="18"
            image="https://images.bewakoof.com/t540/ceylon-yellow-men-s-solid-side-tape-pocket-shorts-337775-1635869207-1.jpg"
            title="Ceylon Yellow Men's Solid Side Tape Pocket Shorts "
            price={749}
          />
           </div>
           <div className="Category"><h2>Men's Jacket</h2></div>
          <div className="homeRow">
          <Product
            id="19"
            image="https://images.bewakoof.com/t320/black-winter-moss-puffer-jacket-aw-21-368705-1637147661-1.jpg"
            title="Black Reversible Hoodie Puffer Jacket"
            price={1799}
          />
          <Product
            id="20"
            image="https://images.bewakoof.com/t540/black-varsity-bomber-jacket-276597-1635869612-1.jpg"
            title="Black Varsity Bomber Jacket"
            price={1499}
          />
          <Product
            id="21"
            image="https://images.bewakoof.com/t540/red-windcheater-aw-21-men-s-mpjaw30-windcheater-aw-21-plain-364951-1633095659.jpg"
            title="Flying Red Color Block Windcheater"
            price={749}
          />
          </div>
           <div className="homeRow">
          <Product
            id="22"
            image="https://images.bewakoof.com/t320/orange-sleeveless-color-block-puffer-jacket-aw-21-men-s-mpjaw50-sleeveless-color-block-puffer-jacket-aw-21-plain-364945-1633095315.jpg"
            title="Orange Sleeveless Color Block Puffer Jacket AW 21"
            price={1399}
          />
          <Product
            id="23"
            image="https://images.bewakoof.com/t320/blue-reversible-puffer-jacket-368703-1637318862-1.jpg"
            title="Blue Reversible Puffer Jacket"
            price={1349}
          />
          <Product
            id="24"
            image="https://images.bewakoof.com/t540/red-pear-varsity-bomber-jacket-287640-1635869321-1.jpg"
            title="Red Pear Varsity Bomber Jacket"
            price={649}
          /> 
          </div>
           <div className="homeRow">
          <Product
            id="25"
            image="https://images.bewakoof.com/t540/soc-performance-red-bomber-jacket-436489-1634235701-1.jpg "
            title="Red Bomber Jacket"
            price={1499}
          />
          <Product
            id="26"
            image="https://images.bewakoof.com/t540/mimosa-zipper-bomber-jacket-283473-1638214203-1.jpg"
            title="Mimosa Zipper Bomber Jacket"
            price={749}
          />
          <Product
            id="27"
            image="https://images.bewakoof.com/t540/snazzy-green-printed-bomber-jacket-428603-1635623849-1.jpg"
            title="Snazzy Green Printed Bomber Jacket "
            price={749}
          /> 
          </div>
        </div>
      </div>
    
  );
}

export default Home;
