import { getArticles } from "./services/getarticles";
import ArticleCard from "./components/card_article";

// Definisikan tipe data artikel
interface Article {
  id: number;
  title: string;
  urlImage: string;
  description: string;
  author: string;
}

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Daftar Artikel</h1>

      <ul className="flex flex-col gap-6">
        {articles.map((article) => (
          <li key={article.id} className="w-full">
            <ArticleCard
              title={article.title}
              urlImage={article.urlImage}
              description={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
