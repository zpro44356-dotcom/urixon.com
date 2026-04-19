// Logo Design imports
import oro1 from "@/assets/portfolio/oro/1.jpg";
import oro2 from "@/assets/portfolio/oro/2.jpg";
import oro3 from "@/assets/portfolio/oro/3.jpg";
import oro4 from "@/assets/portfolio/oro/4.jpg";
import oro5 from "@/assets/portfolio/oro/5.jpg";
import oro6 from "@/assets/portfolio/oro/6.jpg";
import oro7 from "@/assets/portfolio/oro/7.jpg";
import aliqua1 from "@/assets/portfolio/aliqua/1.jpg";
import aliqua2 from "@/assets/portfolio/aliqua/2.jpg";
import aliqua3 from "@/assets/portfolio/aliqua/3.jpg";
import aliqua4 from "@/assets/portfolio/aliqua/4.jpg";
import aliqua5 from "@/assets/portfolio/aliqua/5.jpg";
import aliqua6 from "@/assets/portfolio/aliqua/6.jpg";
import cozycat1 from "@/assets/portfolio/cozycat/1.jpg";
import cozycat2 from "@/assets/portfolio/cozycat/2.jpg";
import cozycat3 from "@/assets/portfolio/cozycat/3.jpg";
import cozycat4 from "@/assets/portfolio/cozycat/4.jpg";
import cozycat5 from "@/assets/portfolio/cozycat/5.jpg";
import cozycat6 from "@/assets/portfolio/cozycat/6.jpg";
import floor1 from "@/assets/portfolio/flooring-express/1.jpg";
import floor2 from "@/assets/portfolio/flooring-express/2.jpg";
import floor3 from "@/assets/portfolio/flooring-express/3.jpg";
import floor4 from "@/assets/portfolio/flooring-express/4.jpg";
import floor5 from "@/assets/portfolio/flooring-express/5.jpg";
import floor6 from "@/assets/portfolio/flooring-express/6.jpg";
import floor7 from "@/assets/portfolio/flooring-express/7.jpg";
import floor8 from "@/assets/portfolio/flooring-express/8.jpg";
import salv1 from "@/assets/portfolio/salvation-hill/1.png";
import salv2 from "@/assets/portfolio/salvation-hill/2.png";
import salv3 from "@/assets/portfolio/salvation-hill/3.png";
import salv4 from "@/assets/portfolio/salvation-hill/4.png";
import xynex1 from "@/assets/portfolio/xynex/1.png";
import xynex2 from "@/assets/portfolio/xynex/2.png";
import xynex3 from "@/assets/portfolio/xynex/3.png";
import xynex4 from "@/assets/portfolio/xynex/4.png";
import xynex5 from "@/assets/portfolio/xynex/5.png";
import xynex6 from "@/assets/portfolio/xynex/6.png";
import xynex7 from "@/assets/portfolio/xynex/7.png";
import yest1 from "@/assets/portfolio/yesterday/1.png";
import yest2 from "@/assets/portfolio/yesterday/2.png";
import yest3 from "@/assets/portfolio/yesterday/3.png";
import yest4 from "@/assets/portfolio/yesterday/4.png";
import yest5 from "@/assets/portfolio/yesterday/5.png";
import yest6 from "@/assets/portfolio/yesterday/6.png";
import yest7 from "@/assets/portfolio/yesterday/7.png";

// UI/UX imports
import uiux1 from "@/assets/portfolio/uiux/1.jpg";
import uiux2 from "@/assets/portfolio/uiux/2.jpg";
import uiux3 from "@/assets/portfolio/uiux/3.jpg";
import uiux4 from "@/assets/portfolio/uiux/4.jpg";
import uiux5 from "@/assets/portfolio/uiux/5.jpg";

export type LogoProject = {
  title: string;
  category: string;
  images: string[];
};

export type UiUxProject = {
  title: string;
  category: string;
  image: string;
};

export const logoProjects: LogoProject[] = [
  { title: "Oro Cream", category: "Brand Identity", images: [oro1, oro2, oro3, oro4, oro5, oro6, oro7] },
  { title: "Aliqua", category: "Logo Design", images: [aliqua1, aliqua2, aliqua3, aliqua4, aliqua5, aliqua6] },
  { title: "CozyCat", category: "Brand Identity", images: [cozycat1, cozycat2, cozycat3, cozycat4, cozycat5, cozycat6] },
  { title: "Flooring Express", category: "Logo Design", images: [floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8] },
  { title: "Salvation Hill", category: "Brand Identity", images: [salv1, salv2, salv3, salv4] },
  { title: "Xynex", category: "Logo Design", images: [xynex1, xynex2, xynex3, xynex4, xynex5, xynex6, xynex7] },
  { title: "Yesterday", category: "Brand Identity", images: [yest1, yest2, yest3, yest4, yest5, yest6, yest7] },
];

export const uiuxProjects: UiUxProject[] = [
  { title: "Interface Study 01", category: "UI / UX", image: uiux1 },
  { title: "Interface Study 02", category: "UI / UX", image: uiux2 },
  { title: "Interface Study 03", category: "UI / UX", image: uiux3 },
  { title: "Interface Study 04", category: "UI / UX", image: uiux4 },
  { title: "Interface Study 05", category: "UI / UX", image: uiux5 },
];
