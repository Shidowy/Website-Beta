import React from "react";
import "../../styles/about/structure.css";

interface StructureBoxProps {
  title: string;
  description: string;
}

const StructureBox: React.FC<StructureBoxProps> = ({ title, description }) => {
  return (
    <div className="structure-box">
      <h2 className="structure-title">{title}</h2>
      <p className="structure-description">{description}</p>
    </div>
  );
};

const Structure: React.FC = () => {
  return (
    <div className="structure">
      <StructureBox
        title="International Research Olympiad (IRO)"
        description="In collaboration with IRO, Media Sured has been able to partner with global researchers to expand..."
      />
      <StructureBox
        title="Greater San Diego Science and Engineering Fair (GSDSEF)"
        description="In cooperation with GSDSEF, Media Sured has initiated several key projects aimed at promoting youth..."
      />
    </div>
  );
};

export default Structure;
