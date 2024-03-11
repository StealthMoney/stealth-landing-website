import Image from "next/image";
import data from "../components/dummy-data/blog.json";

export default function Resources_page() {
  return (
    <>
      {data.map((items, index) => {
        return (
          <div
            key={index}
            className="flex md:flex-row flex-col gap-8 my-8 md:px-12 lg:px-24 items-center px-6 w-full"
          >
            <div className="md:w-2/4 w-full">
              <Image
                className="w-full"
                src={items.image}
                alt="blog-image"
                width={100}
                height={100}
              />
            </div>

            <div className=" flex flex-col gap-4 py-2">
              <h1 className="my-2 text-2xl font-bold">{items.header}</h1>
              <p>{items.body}</p>
              <div className="flex mt-5 items-center w-full">
                <small className="mx-2">
                  <a href="" className="text-white-100 font-bold">
                    {items.tag}
                  </a>
                </small>

                <small className="mx-2">{items.date_created}</small>

                <div className="flex justify-end w-1/4">
                  <a className="text-orange-100" href={`/resources/${items.id}`}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
