
function Tags ({tags}) {
    return (
        <ul>
          {tags.map((tag, index) => (
            <li key={`tag ${index}`} className={`color-${tag}`}>{tag}</li>

          ))}
        </ul>
      );
}

export default Tags