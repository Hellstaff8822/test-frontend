import quote from '../assets/quote.svg';

const Card = ({ logo, review, authorImage, authorName, authorPosition, company }) => {
  return (
    <div
      className="bg-white border border-[#b6b1b1] rounded-xl flex flex-col text-left shadow-md 
                 w-[380px] max-w-full h-[502px] p-7">
      <div className="flex-grow relative">
        <div className="h-26 mb-4 flex items-center">
          <img src={logo} alt={`${company} logo`} className="object-contain " />
        </div>
        <p className="font-medium text-lg leading-relaxed text-[#9b9a99] lg:text-xl lg:leading-[175%]">
          {review}
        </p>
        <div className="absolute right-4 bottom-10 lg:right-0 lg:bottom-0">
          <img src={quote} alt="quote" className="w-10 h-7" />
        </div>
      </div>
      <div className="flex items-center pt-6">
        <img
          src={authorImage}
          alt={authorName}
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mr-4"
        />
        <div>
          <p className="font-bold text-xl lg:text-2xl text-black">{authorName}</p>
          <p className="font-medium text-base lg:text-xl text-black">{authorPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
