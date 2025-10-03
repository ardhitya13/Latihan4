interface ArticleProps {
  title: string;
  urlImage: string;
  description: string;
  author: string;
}

export default function ArticleCard({ title, urlImage, description, author }: ArticleProps) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
        src={urlImage}
        alt={title}
      />
      <div className="flex flex-col justify-between p-6 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">By: {author}</p>
      </div>
    </a>
  );
}
