import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
} from "@tabler/icons-react";
import clsx from "clsx";

export default function App() {
  // const type = "submit";
  // const onClick = () => console.log("Login");
  return (
    <div className={"bg-slate-900 grid place-content-center min-h-screen"}>
      <div className={"flex gap-x-2"}>
        <Button className={"bg-pink-600"}>
          <IconBrandInstagram />
          Instagram
        </Button>
        <Button
          className={"bg-green-600"}
          onClick={() => console.log("login")}
          type="submit"
        >
          <IconBrandSpotify />
          Spotify
        </Button>
        <Button
          className={"bg-black"}
          onClick={() => console.log("login")}
          type="submit"
        >
          <IconBrandGithub />
          Github
        </Button>
        <Button onClick={() => console.log("login")} type="submit">
          <IconBrandLinkedin />
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
function Button(props) {
  const { className = "bg-blue-600", children, text, type = "submit" } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded"
      )}
    >
      {text || children}
    </button>
  );
}
