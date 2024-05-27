import { getTranslations } from "next-intl/server";
import { Link } from "~/navigation";
import Image from "next/image";
import { IconBrandX, IconLink } from "@tabler/icons-react";
import Avatar from "~/assets/images/avatar.jpg";

interface TrustedItem {
  author: string;
  label: string;
  avatar: string;
  content: string;
  link?: string;
  linkIcon?: React.ReactNode;
}
const trustedList: [TrustedItem[], TrustedItem[], TrustedItem[]] = [
  [

  ],
];

export const Trusted = async () => {
  const t = await getTranslations("home");
  return (
    <section id="trusted" className="my-16 md:my-24 overflow-x-clip white">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="w-full flex flex-col items-center text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("trusted.heading")}
          </h2>
          <p className="text-lg text-zinc-700 w-full md:max-w-screen-md leading-8">
            {t("trusted.paragraph")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-20">
          {trustedList.map((trustedItems, i) => (
            <div
              className="space-y-6 data-[index=2]:sm:hidden data-[index=2]:lg:block"
              key={i}
              data-index={i}
            >
              {trustedItems.map((item, index) => (
                <div className="p-4 rounded-lg bg-zinc-100" key={index}>
                  <div className="flex gap-2 items-center mb-2">
                    <div className="h-12 w-12 bg-zinc-200 rounded-full overflow-hidden relative">
                      <Image
                        src={item.avatar}
                        fill
                        className="object-cover object-center"
                        alt="review user avatar"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base text-zinc-800 font-bold">
                        {item.author}
                      </div>
                      <div className="text-xs text-zinc-500">{item.label}</div>
                    </div>
                    {item.link && (
                      <Link className="px-2" target="_blank" href={item.link}>
                        {item.linkIcon ? item.linkIcon : <IconLink />}
                      </Link>
                    )}
                  </div>
                  <p className="text-base">{item.content}</p>
                </div>
              ))}
            </div>
          ))}
          {/* {trustedList.map((feature, i) => (
            <div className="flex items-start gap-3" key={i}>
              <div className="rounded-full bg-zinc-800 text-white p-2 w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800">
                  {feature.title}
                </h3>
                <h3 className="text-base text-zinc-500">
                  {feature.description}
                </h3>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};
