"use client";;
import { use } from "react";
import Image from "next/image";
import data from "../../components/dummy-data/blog.json";
import "../../components/server/styles/resource_page/components.css";

interface BlogItem {
  id: string;
  header: string;
  image: string;
  body: string;
  sub_contents?: SubContent[];
}

interface SubContent {
  id: string;
  header: string;
  body: string;
  image: string;
  links?: Link[];
}

interface Link {
  link: string;
  title: string;
  description?: string;
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const item: BlogItem | undefined = data.find(
    (item) => item.id === params.slug
  );

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <section className="md:px-12 lg:px-24 items-center px-6 py-4 w-full text-white-100 flex flex-col gap-8">
      <h1 className="text-4xl my-6 font-bold">{item.header}</h1>
      <div className="w-full">
        <Image
          src={item.image}
          alt="blog-item"
          width={100}
          height={100}
          className="w-full"
        />
      </div>

      <div className="w-full flex gap-8">
        <div className="flex flex-col gap-6 md:w-3/4 w-full">
          <h1
            className="text-lg font-bold"
            id={
              item.sub_contents && item.sub_contents?.length > 0
                ? `header${item.sub_contents[0].id}`
                : "header0"
            }
          >
            {item.header}
          </h1>
          <p>{item.body}</p>

          {item.sub_contents && item.sub_contents?.length > 0 && (
            <>
              {item.sub_contents?.map((el, i) => (
                <div key={i} className="flex flex-col gap-6 w-full">
                  <h1 className="font-bold font-lg" id={`header${el.id}`}>
                    {el.header}
                  </h1>
                  <p className="font-sm">{el.body}</p>

                  {el.links && el.links.length > 0 && (
                    <div className="w-full my-4">
                      <h1 className="text-lg font-bold mb-5">
                        Setup Instructions:
                      </h1>
                      {el.links.map((link, index) => (
                        <div key={index} className="my-2">
                          <h2 className="font-bold">{link.title}</h2>
                          <p>{link.description}</p>
                          <a
                            href={link.link}
                            className="text-orange-100 my-4"
                            target="_blank"
                          >
                            {link.link}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="w-full">
                    <Image
                      className="w-full"
                      src={el.image}
                      alt="blog-image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
