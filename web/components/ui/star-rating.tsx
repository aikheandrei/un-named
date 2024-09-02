import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const renderStars = (fullStar: number, isHalfStar: boolean) => {
    const stars = [];

    for (let i = 0; i < fullStar; i++) {
      stars.push(<IoMdStar key={`full-${i}`} size={20} />);
    }

    isHalfStar ? stars.push(<IoMdStarHalf key="half" size={20} />) : null;

    const emptyStar = 5 - fullStar - (isHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<IoMdStarOutline key={`empty-${i}`} size={20} />);
    }

    return <div className="flex flex-row gap-[0.1rem]">{stars}</div>;
  };

  const fullStars = Math.floor(rating);
  const isHalfStar = rating % 1 >= 0.1 ? true : false;

  return renderStars(fullStars, isHalfStar);
};

export { StarRating };
