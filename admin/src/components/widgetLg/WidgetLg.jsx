import "./widgetLg.css";
import { format } from "timeago.js";
import { useGetOrder } from "../../hooks/Queries/User/Order/useGetOrder";

export default function WidgetLg() {
  const { isLoading, data } = useGetOrder();

  if (isLoading) {
    return <div>...loading</div>;
  }
  const orders = data;
  console.log(orders);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Type</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.name}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">0{order.phone}</td>
            <td className="widgetLgType">{order.payment}</td>
            <td className="widgetLgStatus">{order.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
