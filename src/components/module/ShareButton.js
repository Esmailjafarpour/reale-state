"use client";
import { useState , useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import styles from "@/module/ShareButton.module.scss";

const ShareButton = () => {
     const [url, setUrl] = useState(null);
     useEffect(() => {
          setUrl(window.location.href)
     }, []);

  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
