import React from 'react';

interface LoadMoreButtonProps {
  setEnd: React.Dispatch<React.SetStateAction<number>>;
  ids:number[];
  end:number
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({  setEnd,ids,end }) => {
  const handleClick = () => {
    if(ids.length<=end) return;
    setEnd(prev => prev + 5);
  };

  return (
    <button  className="load-more-button button-font" onClick={handleClick}>Load More</button>
  );
};

export default LoadMoreButton;
