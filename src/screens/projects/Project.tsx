import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  imageURL: StaticImageData;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, imageURL } = props;
  return (
    <div className="flex items-start gap-x-8 w-full bg-red">
      <div className="bg-black w-2/4 border-2 rounded-3xl p-4">
        <Image className="rounded" src={imageURL} alt={`${title}-screenshot`} />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <p className="text-xl text-primary mb-4">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Project;
