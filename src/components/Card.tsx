interface ICard {
  cardBorder?: string;
  cardBackGround?: string;
  cardInfoFontColor?: string;
  cardTitle: string;
  value: string;
  children?: React.ReactElement;
}

export default function Card({
  cardBorder,
  cardBackGround,
  cardInfoFontColor,
  cardTitle,
  value,
  children,
}: ICard) {
  return (
    <div className={`card ${cardBorder}`}>
      <div>
        <div
          className={`flex flex-col h-40 w-40 m-auto rounded-full justify-center items-center ${cardBackGround}`}
        >
          <span className={`font-medium ${cardInfoFontColor}`}>
            {cardTitle}
          </span>
          <span className={`text-2xl  ${cardInfoFontColor}`}>{value}</span>
        </div>
      </div>

      {children}
    </div>
  );
}
