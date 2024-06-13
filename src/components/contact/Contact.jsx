import "./Contact.styles.scss";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <span>Sign up to our newsletter & get 20% off{" "} </span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          {/* <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
  <PinterestIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
