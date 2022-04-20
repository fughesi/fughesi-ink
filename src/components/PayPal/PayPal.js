import React from "react";
import "./PayPal.css";

export default function PayPal() {
  return (
    <div className="paypalMain">
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="GAAYP37G6WZVY" />
        <table>
          <tr>
            <td>
              <input type="hidden" name="on0" value="T-shirt material" />
              <span className="shirtSelect">select shirt</span>
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="100% cotton -">100% cotton - $21.00 USD</option>
                <option value="Tri-blend (premium) -">
                  Tri-blend (premium) - $29.00 USD
                </option>
              </select>{" "}
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
}
