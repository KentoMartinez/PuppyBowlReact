import { Link } from "react-router-dom";

export default function FakeTabs() {
  return (
    <>
      <h2>COMING SOON</h2>
      <Link to="/teams">
        <img
          id="welcome-img"
          src={
            "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fsecrets.jpg"
          }
        ></img>
      </Link>
    </>
  );
}
