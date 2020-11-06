import React from "react";

function Footer() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <div className="footer">
      <h4>Thanks for Visiting</h4>
      <button onClick={scrollToTop}>Home</button>
    </div>
  );
}

export default Footer;
