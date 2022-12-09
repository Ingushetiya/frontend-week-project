import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonMain = () => {
  return (
    <ContentLoader
      speed={2}
      width={350}
      height={400}
      viewBox="0 0 350 400"
      backgroundColor="#504e4e"
      foregroundColor="#888181"
    >
      <rect x="0" y="0" rx="10" ry="10" width="350" height="240" />
      <rect x="0" y="255" rx="10" ry="10" width="350" height="81" />
      <rect x="218" y="355" rx="10" ry="10" width="110" height="37" />
      <rect x="49" y="355" rx="10" ry="10" width="40" height="37" />
    </ContentLoader>
  );
};

