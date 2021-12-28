import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="//careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & COnditions
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:dev.pardana@gmail.com"
                >
                  dev.pardana@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6285784782523">
                  0857 8478 2523
                </Button>
              </li>
              <li className="list-group-item">
                <span>iCation, Bekasi, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
