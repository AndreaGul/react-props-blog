
function Tags ({tags}) {
    return (
        <div>
          {tags.map((tag, index) => (
            <span key={index}>{tag} </span>
          ))}
        </div>
      );
}

export default Tags