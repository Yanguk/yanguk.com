import SocialIcon from "@/components/social-icons";
import { siteMetadata } from "@/site-meta-data";

export default function Footer() {
  return (
    <footer className="flex text-sm md:text-base items-center justify-center w-full">
      <div className="flex space-x-15">
        <div className="flex space-x-4">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
        </div>

        <div className="flex space-x-4 items-center">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />

          <SocialIcon kind="github" href={siteMetadata.github} />
        </div>
      </div>
    </footer>
  );
}
