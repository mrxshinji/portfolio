import Image from "next/image";
import Link from "next/link";
import s from "./projectCard.module.scss";

type Props = {
  imgUrl: string;
  webLink: string;
  repoLink: string;
  name: string;
};

const ProjectCard = ({ imgUrl, webLink, repoLink, name }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={imgUrl} alt='Preview' fill className={s.projectImage} />
      </div>
      <p>WEB LINK:</p>
      <Link href={webLink}>
        <p>{name}</p>
      </Link>
      <p>REPO LINK:</p>
      <Link href={repoLink}>
        <p>Github</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
