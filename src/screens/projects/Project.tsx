import Image, { StaticImageData } from "next/image";

interface WebScore {
  title: string;
  point: number;
}

interface ProjectProps {
  title: string;
  description: string;
  imageURL: StaticImageData;
  siteScores: Array<WebScore>;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, imageURL, siteScores } = props;
  return (
    <div className="flex items-start gap-x-8 w-full bg-red">
      <div className="bg-black w-2/4 border-2 rounded-3xl p-4">
        <Image className="rounded" src={imageURL} alt={`${title}-screenshot`} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-xl text-primary mb-4">{title}</p>
        <p className="text-sm">{description}</p>
        <div className="flex gap-4">
          {siteScores.map((siteScore) => (
            <div>
              <div className="circle">
                <div>{siteScore.point}</div>
              </div>
              <p>{siteScore.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
