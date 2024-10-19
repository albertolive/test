import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const NewsComponent = () => {
  const { data, error } = useSWR('/api/get-news', fetcher);

  if (error) return <div>Error cargando noticias...</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      {data.map((news, index) => (
        <div key={index}>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
