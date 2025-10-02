import SocialIcon from "@/components/social-icons";
import { siteMetadata } from "@/site-meta-data";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border-t-1 pt-5 text-sm md:text-base">
      <div className="flex space-x-15">
        <div className="flex space-x-4">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
        </div>

        <div className="flex items-center space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />

          <SocialIcon kind="github" href={siteMetadata.github} />
        </div>
      </div>
    </footer>
  );
}
