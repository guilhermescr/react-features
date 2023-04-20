export default function Topic({
  imgSrc,
  imgAltTxt,
  heading,
  description,
  topicTag
}) {
  return (
    <div className="topic bg-white rounded-lg cursor-pointer flex flex-col gap-2 justify-between max-w-[200px] p-3 w-full hover:bg-[#feffffd8] active:opacity-90">
      <img className="h-36 max-w-[180px] w-full" src={imgSrc} alt={imgAltTxt} />

      <h3 className="font-bold text-center">{heading}</h3>

      <article className="line-clamp-2">{description}</article>

      <p className="font-bold text-slate-800">{topicTag}</p>
    </div>
  );
}
