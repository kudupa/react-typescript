type GreetProps = {
  name: string;
  messages?: number; // ? means optional
  isLoggedin: boolean;
};
const Greet = ({ name, messages=0, isLoggedin }: GreetProps) => {
  return (
    <div>
      <h2>
        {" "}
        {isLoggedin
          ? `Hi ${name}, You have ${messages} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
};

export default Greet;
