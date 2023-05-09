import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AromaAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <span className="topIconBadge">2</span>
          </div>
          <img src="/PopularProduct/1.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
