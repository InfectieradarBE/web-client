import { HeaderConfig } from "case-web-app-core/build/types/headerConfig";

export const headerConfig: HeaderConfig = {
  config: {
    type: 'simpleLogo',
    className: "",
    image: {
      altKey: "logoAlt",
      sm: {
        url: "/images/logo1.png",
        className: "py-2",
        width: 226
      },
      lg: {
        url: "/images/logo1.png",
        className: "py-2",
        width: 250
      }
    },
    useLanguageSelector: true
  }
}
