export const StarRating = (rating: string | number) => {
  return (
    <div className="rating rating-xs">
      {[...Array(rating)].map((_, index) => (
        <input
          disabled
          key={index}
          type="radio"
          name="rating"
          className="bg-[var(--color-secondary)] mask mask-star-2 cursor-default mx-[1px]"
        />
      ))}
    </div>
  );
};
