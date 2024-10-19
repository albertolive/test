import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Longevidad = () => {
  const { data, error } = useSWR('/api/get-news?category=longevidad', fetcher);

  if (error) return <div>Error cargando noticias...</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Noticias sobre Longevidad</h1>
      {data.map((news, index) => (
        <div key={index}>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Longevidad;
