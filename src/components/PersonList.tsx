import { PersonListProps } from "./person.type";

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((each) => {
        return <h2 key={each.firstname}>{`${each.firstname} ${each.lastname}`} </h2>;
      })}
    </div>
  );
};

export default PersonList;
