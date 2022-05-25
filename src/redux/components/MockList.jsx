import { useSelector } from "react-redux";

export const MockList = () => {
  const mockList = useSelector((state) => state.list);
  return (
    <div>
      <h4>{mockList.title}</h4>
      <ul className="mockList">
        {mockList.elements.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
