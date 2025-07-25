import React from "react";
import "./Footer.scss";
import BadgeInfo from "lucide-react/dist/esm/icons/badge-info";
import BadgeDollarSign from "lucide-react/dist/esm/icons/badge-dollar-sign";
import LinkedIn from "lucide-react/dist/esm/icons/linkedin";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import CircleFadingPlus from "lucide-react/dist/esm/icons/circle-fading-plus";
import Languages from "lucide-react/dist/esm/icons/languages";
import Instagram from "lucide-react/dist/esm/icons/instagram";
import Facebook from "lucide-react/dist/esm/icons/facebook";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="item">
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Intellectual Property Claims</span>
                        <span>Investor Relations</span>
                        <span>Contact Sales</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on Fiverr</span>
                        <span>Buying on Fiverr</span>
                    </div>
                    <div className="item">
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community hub</span>
                        <span>Forum</span>
                        <span>Events</span>
                        <span>Blog</span>
                        <span>Influencers</span>
                        <span>Affiliates</span>
                        <span>Podcast</span>
                        <span>Invite a Friend</span>
                        <span>Become a Seller</span>
                        <span>Community Standards</span>
                    </div>
                    <div className="item">
                        <h2>More From Fiverr</h2>
                        <span>Fiverr Business</span>
                        <span>Fiverr Pro</span>
                        <span>Fiverr Logo Maker</span>
                        <span>Fiverr Guides</span>
                        <span>Get Inspired</span>
                        <span>Fiverr Select</span>
                        <span>ClearVoice</span>
                        <span>Fiverr Workspace</span>
                        <span>Learn</span>
                        <span>Working Not Working</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h2>fiverr</h2>
                        <span>© Fiverr International Ltd. 2023</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <Twitter />
                            <Facebook />
                            <LinkedIn />
                            <CircleFadingPlus />
                            <Instagram />
                        </div>
                        <div className="link">
                            <Languages />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <BadgeDollarSign />
                            <span>USD</span>
                        </div>
                        {/* <img src="/img/accessibility.png" alt="" /> */}
                        <BadgeInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;