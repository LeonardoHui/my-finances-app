import React from "react";
import styles from "@/styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div
        className={styles.section}
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 100,
        }}
      >
        <div>
          <h1 className="mb-4 font-weight-normal line-height-1_4">
            Lorem Ipsum
          </h1>
          <p className="text-muted mb-4 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum condimentum ligula sed vehicula. Phasellus et erat quis
            quam viverra elementum eu in turpis. Curabitur accumsan nisl et
            efficitur porttitor. Curabitur eu viverra arcu, vitae lacinia ipsum.
            Morbi tincidunt auctor dui eu mollis. Vivamus sagittis laoreet metus
            sit amet lacinia. Nulla et eros posuere, tempus dolor sed, aliquet
            sem. Duis facilisis varius ligula, non rutrum metus lobortis nec.
            Integer laoreet, magna nec gravida consequat, dolor enim luctus
            magna, hendrerit vehicula lacus lectus quis felis. Praesent id
            imperdiet est. Proin sed urna a est tempor molestie quis in purus.
            Vestibulum consectetur nunc felis, at feugiat est feugiat non.
            Mauris ut pretium ante, non condimentum lorem.
          </p>
          <Link href="/account/register">
            <button>Register Now!</button>
          </Link>
        </div>
        <div>
          <img src="/images/piechart.png" />
        </div>
      </div>
      <div
        className={styles.section}
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 100,
        }}
      >
        <div>
          <img src="/images/barchart.png" />
        </div>
        <div>
          <p className="text-muted mb-4 pb-2">
            Pellentesque mollis sodales tortor, eu semper turpis tristique ut.
            Suspendisse nec nulla hendrerit, aliquet magna id, dictum lacus.
            Pellentesque ante augue, condimentum sit amet risus nec, aliquam
            feugiat lacus. Proin convallis dapibus libero in auctor. Sed orci
            augue, feugiat eget placerat eget, finibus eget purus. Mauris
            tristique mauris quis mattis viverra. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Sed ut
            risus ullamcorper tellus faucibus iaculis eu eget ex. Morbi lacus
            magna, ultricies at egestas ut, luctus vitae dui.
          </p>
          <Link href="/about">
            Find Out How <span className="ml-2 right-icon">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
