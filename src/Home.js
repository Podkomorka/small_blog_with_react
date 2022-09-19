import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // "data: blogs" is saying "grab data, but call it blogs"
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {/* This makes sure blogs is loaded from the json file fetch
      before giving it to the BlogList prop. This is called a conditional output for a part of the template */}
      { blogs && <BlogList blogs={blogs} title="List of Blogs" />}
    </div>
  );
}
 
export default Home;