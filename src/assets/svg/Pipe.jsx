import React from "react";

const Pipe = ({ length = 360, height = 68 }) => {
  const endWidth = 20; // Largeur des embouts gauche et droit
  const totalWidth = endWidth * 2 + length; // Largeur totale du SVG
  const borderColor = "#B2B6B7"; // Couleur des bords
  const borderWidth = 3; // Épaisseur des bords
  const cornerRadius = 10; // Rayon des coins arrondis pour les embouts

  // Ajuster les dimensions pour tenir compte de la largeur de la bordure
  const adjustedHeight = height - borderWidth;
  const adjustedLength = length; // Pas besoin d'ajuster le corps pour ce cas
  const adjustedEndWidth = endWidth + borderWidth / 2;

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox={`0 0 ${totalWidth} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Embout gauche */}
      <rect
        x={0} // Commence au bord gauche de la viewBox
        y={borderWidth / 2}
        width={adjustedEndWidth}
        height={adjustedHeight}
        fill="none"
        stroke={borderColor}
        strokeWidth={borderWidth}
        rx={cornerRadius}
      />

      {/* Corps central extensible */}
      <rect
        x={adjustedEndWidth - borderWidth / 2} // Aligne avec l'embout gauche
        y={borderWidth / 2 + 12}
        width={adjustedLength - borderWidth} // Ajuste la largeur pour éviter les dépassements
        height={adjustedHeight - 24}
        fill="none"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />

      {/* Embout droit */}
      <rect
        x={adjustedEndWidth + adjustedLength - borderWidth} // Aligne au bord droit
        y={borderWidth / 2}
        width={adjustedEndWidth}
        height={adjustedHeight}
        fill="none"
        stroke={borderColor}
        strokeWidth={borderWidth}
        rx={cornerRadius}
      />
    </svg>
  );
};

export default Pipe;
