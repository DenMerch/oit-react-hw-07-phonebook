import { ContactForm } from "./Forms/FormsFone";
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts"
import { useSelector } from "react-redux";
import { loadingSelector } from "redux/selectors";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const isLoading = useSelector(loadingSelector)
  return (
    <div
      style={{
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <Contacts />
      {isLoading && <Loader />}
    </div>
  )
}


