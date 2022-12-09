import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonBasket = ({ widthSkeleton, heightSkeleton }) => {
  return (
    <ContentLoader
      speed={2}
      width={1100}
      height={121}
      viewBox={`0 0 ${widthSkeleton} ${heightSkeleton}`}
      backgroundColor="#504e4e"
      foregroundColor="#888181"
    >
      <rect x="0" y="0" rx="20" ry="20" width="1100" height="121" />
    </ContentLoader>
  );
};

