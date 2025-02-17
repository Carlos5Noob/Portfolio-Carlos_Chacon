import '../App.css';

function Message() {
    return ( // añado clases para que sea un container con bg blanco, con sombras y redondeado. Ademas, le doy estilo para que sea responsive
      <p className="container text-wrap text-bg-light p-4 rounded h3 shadow-lg border text-center text-md-start transform-hover">
        Hello, I’m Carlos Chacón, a growing web developer. I specialize in Python and Java, with experience in frameworks like Flask, Django, and Bootstrap 5. I’ve worked in environments such as VS Code, PyCharm, and Eclipse, as well as developed in Unity with C#. I handle essential tools like Git, GitHub, and Docker, and have basic knowledge of React. I’m always looking to learn and improve my skills to create efficient and well-structured solutions.
      </p>
    );
  }
  
  export default Message;
  