import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";

const StarRating: React.FC<{ rating: number; size: number }> = ({
  rating,
  size,
}) => {
  const renderStars = (fullStar: number, isHalfStar: boolean) => {
    const stars = [];

    for (let i = 0; i < fullStar; i++) {
      stars.push(<IoMdStar key={`full-${i}`} size={size} />);
    }

    isHalfStar ? stars.push(<IoMdStarHalf key="half" size={size} />) : null;

    const emptyStar = 5 - fullStar - (isHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<IoMdStarOutline key={`empty-${i}`} size={size} />);
    }

    return <>{stars}</>;
  };

  const fullStars = Math.floor(rating);
  const isHalfStar = rating % 1 >= 0.1 ? true : false;

  return renderStars(fullStars, isHalfStar);
};

export { StarRating };
