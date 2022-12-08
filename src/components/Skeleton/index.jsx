import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={350}
    height={465}
    viewBox="0 0 350 465"
    backgroundColor="#504e4e"
    foregroundColor="#888181"
  >
    <rect x="147" y="363" rx="0" ry="0" width="2" height="0" /> 
    <rect x="0" y="0" rx="20" ry="20" width="350" height="400" />
  </ContentLoader>
  );
};

export default Skeleton;
