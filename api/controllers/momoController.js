import axios from "axios";
import crypto from "crypto";
import { catchAsync } from "../utils/catchAsync.js";
const momoController = {
  async payment(req, res) {
    const { body } = req;

    const partnerCode = "MOMO";
    const accessKey = "F8BBA842ECF85";
    const secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    const requestId = partnerCode + new Date().getTime();
    const orderId = requestId;
    const orderInfo = `Pay for product #${orderId}`;
    let searchParams = new URLSearchParams({
      payload: JSON.stringify(body),
    });
    if (searchParams) searchParams = `?${searchParams}`;
    const redirectUrl = `http://localhost:5173/cart/checkout/successful/${searchParams}`;
    const ipnUrl = "https://callback.url/notify";

    const amount = Math.round(body.total * 23000);

    const requestType = "captureWallet";
    const extraData = ""; // pass empty value if your merchant does not have stores

    const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

    const signature = crypto
      .createHmac("sha256", secretkey)
      .update(rawSignature)
      .digest("hex");
    const requestBody = {
      partnerCode,
      accessKey,
      requestId,
      amount,
      orderId,
      orderInfo,
      redirectUrl,
      ipnUrl,
      extraData,
      requestType,
      signature,
      lang: "en",
    };

    const { data } = await axios.post(
      "https://test-payment.momo.vn/v2/gateway/api/create",
      requestBody
    );
    // res.json(data.qrCodeUrl);
    res.json(data.payUrl);
  },
};
Object.keys(momoController).forEach((key) => {
  momoController[key] = catchAsync(momoController[key]);
});
export { momoController };
