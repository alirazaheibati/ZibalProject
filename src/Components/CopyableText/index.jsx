import  { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, Button } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

export const CopyableText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      }}
    >
      <Tooltip  title={copied ? "Copied!" : "Copy"}>
        <Button
          icon={copied ? <CheckOutlined /> : <CopyOutlined />}
          style={{ border: "none", background: "none" ,  }}
        >
          {text}
        </Button>
      </Tooltip>
    </CopyToClipboard>
  );
};

CopyableText.propTypes = {
  text: PropTypes.number.isRequired,
};