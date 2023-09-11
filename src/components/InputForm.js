import "./InputForm.css";

function InputForm(props) {
  return (
    <div className="list-container">
      <ul className="list">
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputForm;
