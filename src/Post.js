const Post = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);
 
    // ...
 
    const handleSubmit = (e) => {
       e.preventDefault();
       addPosts(title, body);
    };
 
    const addPosts = (title, body) => {
       client
          .post('', {
             title: title,
             body: body,
          })
          .then((response) => {
             setPosts([response.data, ...posts]);
          });
       setTitle('');
       setBody('');
    };
    
    return (
       div
    );
 };
 
 export default Post;