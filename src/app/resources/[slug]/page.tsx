import Image from "next/image";
import data from "../../components/dummy-data/blog.json";

export default function Page({ params }: { params: { slug: string } }) {
  const item = data.find((item) => item.id === params.slug);

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
        <div className="flex flex-col gap-6 w-3/4">
          <h1
            className="text-lg font-bold"
            id={
              item.sub_contents && item.sub_contents?.length > 0
                ? `header${item.sub_contents?.map((item, index) => index + 1)}`
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
                  <h1 className="font-bold font-lg" id={`header${i}`}>
                    {el.header}
                  </h1>
                  <p className="font-sm">{el.body}</p>

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

        <div className="md:w-1/4 py-4 flex flex-col">
          <h1 className="font-bold my-2">CONTENT</h1>
          {item.sub_contents && item.sub_contents?.length > 0 ? (
            item.sub_contents?.map((item, index) => (
              <>
                <div className="w-full py-2 px-2 h-auto border-l border-[#aaaaaa]">
                  <a key={index} className="my-2" href={`#header${index}`}>
                    Header {index + 1}
                  </a>
                </div>
              </>
            ))
          ) : (
            <div className="w-full py-2 px-2 h-auto border-l border-[#aaaaaa]">
              <a className="my-2" href="#header0">
                Header 1
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
