import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
    <Phonebook></Phonebook>
    </div>
  );
};
