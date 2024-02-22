import React from "react";
import { Box, Typography } from "@mui/material";
import { GetApp as GetAppIcon } from "@mui/icons-material";
import { formatDate } from "../../../utils/common-utils";
import { iconPDF } from "../../../constants/data";

const ImageMessage = ({ message }) => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = message.text; // URL du fichier PDF
    link.download = message.text.split("/").pop(); // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ position: "relative" }}>
      {message?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
          <Typography style={{ fontSize: 14 }}>
            {message.text.split("/").pop()}
          </Typography>
        </div>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Typography style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={downloadPDF}
          fontSize="small"
          style={{
            marginRight: 10,
            border: "1px solid grey",
            borderRadius: "50%",
            cursor: "pointer" // Ajoutez un style de curseur pointer
          }}
        />
        {formatDate(message.createdAt)}
      </Typography>
    </div>
  );
};

export default ImageMessage;
