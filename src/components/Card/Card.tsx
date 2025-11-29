import React from "react";
import "./Card.css";

interface CardProps {
  title?: React.ReactNode;
  description?: string;
  imageUrl?: string;
  link?: string;
  logoUrl?: string;
  buttonLabel?: string;
  orientation?: string;
  logoSize?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
  logoUrl,
  buttonLabel,
  logoSize,
}) => {
  const logoStyle = logoSize
    ? { width: logoSize, height: logoSize, flexShrink: 0 }
    : undefined;

  return (
    <div className="card">
      <div className="card-content">
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            className="card-logo-top"
            style={logoStyle}
          />
        )}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {link && buttonLabel && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {buttonLabel}
          </a>
        )}
      </div>
      <div className="card-image">
        <img
          src={imageUrl}
          alt={typeof title === "string" ? title : "Card image"}
        />
      </div>
    </div>
  );
};

export default Card;
