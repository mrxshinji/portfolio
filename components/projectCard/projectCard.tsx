import Image from "next/image";
import Link from "next/link";
import s from "./projectCard.module.scss";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  imgUrl: string;
  webLink: string;
  repoLink: string;
  name: string;
  isOugi: boolean;
};

const ProjectCard = ({ imgUrl, webLink, repoLink, name, isOugi }: Props) => {
  return (
    <div className={s.container}>
      <AnimatePresence>
        {isOugi && (
          <motion.div
            className={s.ougiImgContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <Image src={imgUrl} alt='Preview' fill className={s.ougiImage} />{" "}
          </motion.div>
        )}
      </AnimatePresence>
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
